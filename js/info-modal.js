document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // SPLIT-PANEL INFO MODAL (ToS, Payments, Process)
  // ==========================================
  const infoModal = document.getElementById('info-modal');
  const infoCloseBtn = document.getElementById('info-modal-close-btn');
  const infoModalNav = document.getElementById('info-modal-nav');
  const infoModalTitle = document.getElementById('info-modal-title');
  const infoModalSubtitle = document.getElementById('info-modal-subtitle');
  const infoModalContent = document.getElementById('info-modal-content');

  // Scroll Spy & ToS Acceptance states
  let isScrollingFromClick = false;
  let scrollTimeout;

  let isTosCurrentlyOpen = false;
  let hasScrolledTosToBottom = false;

  // Utility: detect if nav item text overflows its container
  function detectNavOverflow() {
    if (!infoModalNav) return;
    infoModalNav.querySelectorAll('.info-nav-item span').forEach(span => {
      // Compare actual text width vs visible container width
      if (span.scrollWidth > span.clientWidth + 5) {
        span.classList.remove('no-overflow');
      } else {
        span.classList.add('no-overflow');
      }
    });
  }

  const tosModule = document.getElementById('tos-acceptance-module');
  const tosSigInput = document.getElementById('tos-signature-input');
  const tosEmailInput = document.getElementById('tos-email-input');
  const tosCheckbox = document.getElementById('tos-agree-checkbox');
  const tosAcceptBtn = document.getElementById('tos-accept-btn');

  // Local state to store signed data for download
  let signedData = null;

  function checkTosScrollRequirement() {
    if (!infoModalContent) return false;
    // Evaluate if inner content overflows container vertically
    return infoModalContent.scrollHeight > infoModalContent.clientHeight + 10;
  }

  function validateTosAcceptance() {
    if (!isTosCurrentlyOpen || !tosModule || !tosSigInput || !tosCheckbox || !tosAcceptBtn) return;

    const signature = tosSigInput.value.trim();
    const email = tosEmailInput ? tosEmailInput.value.trim() : '';
    const isChecked = tosCheckbox.checked;

    // Basic Email Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Permit acceptance if scrolled fully OR if scrollbar natively disabled by short content
    if ((hasScrolledTosToBottom || !checkTosScrollRequirement()) && signature.length >= 2 && isEmailValid && isChecked) {
      // Only enable if we haven't already signed (checking if btn is in success mode)
      if (!tosAcceptBtn.classList.contains('btn-success')) {
        tosAcceptBtn.disabled = false;
      }
    } else {
      tosAcceptBtn.disabled = true;
    }
  }

  if (tosSigInput) tosSigInput.addEventListener('input', validateTosAcceptance);
  if (tosEmailInput) tosEmailInput.addEventListener('input', validateTosAcceptance);
  if (tosCheckbox) tosCheckbox.addEventListener('change', validateTosAcceptance);

  async function fetchClientIPMetadata() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      if (!response.ok) return {};
      const data = await response.json();
      return {
        ip: data.ip || 'Unknown',
        city: data.city || 'Unknown',
        region: data.region || 'Unknown',
        country: data.country_name || 'Unknown',
        isp: data.org || 'Unknown'
      };
    } catch (err) {
      console.warn("Could not fetch extended client IP data:", err);
      return {};
    }
  }

  if (tosAcceptBtn) {
    tosAcceptBtn.addEventListener('click', async () => {
      // If button is in Download mode, trigger PDF generation
      if (tosAcceptBtn.classList.contains('btn-success') && signedData) {
        generateTosPdf(signedData);
        return;
      }

      // Enforce spam/rate limiting (allow max 1 sub per 30 seconds)
      const lastSubmit = parseInt(localStorage.getItem('tos_last_submit_time') || '0', 10);
      if (Date.now() - lastSubmit < 30000) {
        alert('Please wait before trying again.');
        return;
      }

      const signature = tosSigInput.value.trim();
      const email = tosEmailInput.value.trim();
      const originalText = tosAcceptBtn.innerText;

      // UX: Disable UI and show loading
      tosAcceptBtn.innerText = 'Signing & Logging...';
      tosAcceptBtn.disabled = true;

      // Fetch user IP details securely
      const ipData = await fetchClientIPMetadata();

      // Retrieve ToS version from CONFIG (defined in config.js)
      const tosConfig = (typeof CONFIG !== 'undefined' && CONFIG.serviceInfo)
        ? CONFIG.serviceInfo.find(i => i.id === 'tos')
        : null;
      const tosVersion = tosConfig ? (tosConfig.version || 'v1.0') : 'v1.0';

      // Enhanced metadata collection for audit log
      const auditLogData = {
        ...ipData,
        email: email,
        tosVersion: tosVersion,
        browser: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        resolution: `${window.screen.width}x${window.screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        referrer: document.referrer || 'Direct',
        pageUrl: window.location.href
      };

      // Attempt Firestore save
      let docId = "LOCAL_ONLY";
      if (typeof window.saveSignatureToDatabase === 'function') {
        const result = await window.saveSignatureToDatabase(signature, auditLogData);
        if (!result || !result.success) {
          console.error("Firestore save failed.");
          alert('Failed to save your agreement. Please try again.');
          tosAcceptBtn.innerText = originalText;
          tosAcceptBtn.disabled = false;
          return; // Abort operation visually so user can try again
        }
        docId = result.id;
      } else {
        console.warn("Firebase script not loaded yet or blocked, proceeding with local acceptance only.");
      }

      // Store data for PDF generation
      const timestamp = new Date().toLocaleString();
      signedData = { signature, email, docId, version: tosVersion, timestamp };

      // Tag the submission time to block massive spam retries
      localStorage.setItem('tos_last_submit_time', Date.now().toString());

      // Set complex persistent flag for local tracking
      const acceptanceData = {
        accepted: true,
        timestamp: Date.now(),
        version: tosVersion,
        email: email,
        docId: docId
      };
      localStorage.setItem('tos_acceptance_data', JSON.stringify(acceptanceData));

      tosAcceptBtn.classList.add('btn-success');
      tosAcceptBtn.innerText = 'Download Agreement (PDF)';
      tosAcceptBtn.disabled = false;

      // Hide input fields visually but keep them in DOM
      if (tosSigInput.parentElement) tosSigInput.parentElement.style.display = 'none';

      // Lock inputs
      if (tosSigInput) tosSigInput.disabled = true;
      if (tosEmailInput) tosEmailInput.disabled = true;
      if (tosCheckbox) {
        tosCheckbox.checked = true;
        tosCheckbox.disabled = true;
      }

      console.log("ToS Agreement Finalized. Receipt available for download.");
    });
  }

  // PDF Generation Helper Function using jsPDF
  function generateTosPdf(data) {
    if (typeof window.jspdf === 'undefined') {
      alert("PDF library is not loaded properly.");
      return;
    }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Styling Defaults
    const margin = 20;
    let y = 25;

    // Header
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(59, 130, 246); // Primary Blue
    doc.text("DIGITAL SERVICE AGREEMENT", margin, y);

    y += 15;
    doc.setFontSize(10);
    doc.setTextColor(100, 100, 100);
    doc.setFont("helvetica", "normal");
    doc.text(`Certificate ID: ${data.docId}`, margin, y);
    doc.text(`Version: ${data.version}`, 120, y);

    y += 10;
    doc.setDrawColor(200, 200, 200);
    doc.line(margin, y, 190, y);

    // Body Section
    y += 15;
    doc.setFontSize(14);
    doc.setTextColor(0, 0, 0);
    doc.setFont("helvetica", "bold");
    doc.text("Agreement Parties", margin, y);

    y += 10;
    doc.setFontSize(11);
    doc.setFont("helvetica", "normal");
    let devName = "AnS_Dev";
    if (typeof CONFIG !== 'undefined' && CONFIG.profile) {
      devName = CONFIG.profile.name;
    }
    doc.text(`Developer: ${devName}`, margin, y);
    y += 7;
    doc.text(`Client Name: ${data.signature}`, margin, y);
    y += 7;
    doc.text(`Client Email: ${data.email}`, margin, y);

    y += 15;
    doc.setFont("helvetica", "bold");
    doc.text("Agreement Summary", margin, y);

    y += 8;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    const summaryText = "By signing this document electronically, the Client acknowledges that they have read, understood, and agreed to be bound by the full Terms of Service (ToS) as outlined on the AnS_Dev portfolio website. This agreement includes compliance with platform terms, payment schedules, and project scope boundaries. Both parties recognize this digital record as legally binding evidence of acceptance.";
    const splitLines = doc.splitTextToSize(summaryText, 170);
    doc.text(splitLines, margin, y);

    y += (splitLines.length * 5) + 15;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text("Digital Signatures", margin, y);

    // Signature Boxes
    y += 10;
    doc.setDrawColor(230, 230, 230);
    doc.setFillColor(248, 250, 252);
    doc.rect(margin, y, 80, 25, 'FD');
    doc.rect(110, y, 80, 25, 'FD');

    y += 10;
    doc.setFont("courier", "italic");
    doc.text(devName, margin + 10, y);
    doc.text(data.signature, 110 + 10, y);

    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.text("Developer Digital Stamp", margin + 5, y);
    doc.text("Client Digital Signature", 110 + 5, y);

    // Footer
    y = 280;
    doc.setFontSize(8);
    doc.setTextColor(150, 150, 150);
    doc.text(`Signed digitally on ${data.timestamp}. All data logged securely.`, 105, y, { align: "center" });

    // Save
    doc.save(`ToS_Agreement_${data.signature.replace(/\s+/g, '_')}.pdf`);
  }

  // Attach Scroll listener to independently scrollable content area
  if (infoModalContent) {
    infoModalContent.addEventListener('scroll', () => {
      // Suspend scroll spy during click-triggered smooth scroll
      if (isScrollingFromClick) return;

      const cards = infoModalContent.querySelectorAll('.info-section-card');
      if (!cards.length) return;

      let currentActiveIndex = 0;

      cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        const containerRect = infoModalContent.getBoundingClientRect();
        // Calculate distance from the top of the container
        const offsetTop = cardRect.top - containerRect.top;

        // If the card reaches the upper third of the viewport, snap active state
        if (offsetTop <= 150) {
          currentActiveIndex = index;
        }
      });

      // Update nav items without hijacking scroll
      if (infoModalNav) {
        infoModalNav.querySelectorAll('.info-nav-item').forEach((btn, idx) => {
          if (idx === currentActiveIndex) {
            btn.classList.add('active');

            // Ensure the selected sidebar item stays visible in the sidebar's own scroll context
            const btnRect = btn.getBoundingClientRect();
            const sidebarRect = infoModalNav.parentElement.getBoundingClientRect();
            if (btnRect.bottom > sidebarRect.bottom || btnRect.top < sidebarRect.top) {
              btn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          } else {
            btn.classList.remove('active');
          }
        });
      }

      // Apply glow highlights to the active card
      cards.forEach((c, idx) => {
        c.classList.toggle('active-card', idx === currentActiveIndex);
      });

      // -------------------------
      // Evaluate ToS Form Auto-Unlock condition
      // -------------------------
      if (isTosCurrentlyOpen && !hasScrolledTosToBottom) {
        const contentScrollHeight = infoModalContent.scrollHeight;
        const contentClientHeight = infoModalContent.clientHeight;
        const contentScrollTop = infoModalContent.scrollTop;

        // Utilize a 20px threshold buffer to resolve device layout imprecisions
        if (contentScrollHeight - contentScrollTop - contentClientHeight < 20) {
          hasScrolledTosToBottom = true;
          validateTosAcceptance();
        }
      }
    });
  }

  // Provide to window API
  window.openInfoModal = function (infoObj) {
    if (!infoModal || !infoObj || !infoObj.sections) return;

    isTosCurrentlyOpen = (infoObj.id === 'tos');
    const isFaqMode = (infoObj.id === 'faq');
    const modalPanel = infoModal.querySelector('.info-modal-panel');

    // Toggle FAQ-specific class for mobile sidebar visibility
    if (modalPanel) {
      modalPanel.classList.toggle('faq-mode', isFaqMode);
    }

    // Show/hide search bar (FAQ only)
    const searchContainer = document.getElementById('info-modal-search');
    const searchInput = document.getElementById('info-search-input');
    if (searchContainer) {
      searchContainer.style.display = isFaqMode ? 'block' : 'none';
    }
    if (searchInput) searchInput.value = '';

    // Populate header
    if (infoModalTitle) infoModalTitle.textContent = infoObj.title || infoObj.text;
    if (infoModalSubtitle) infoModalSubtitle.textContent = infoObj.subtitle || '';

    // Store sections reference for FAQ article rendering
    const currentSections = infoObj.sections;

    // Helper: render FAQ article view (single topic, no card wrapper)
    function renderFaqArticle(sectionIndex) {
      if (!infoModalContent || !currentSections[sectionIndex]) return;
      const section = currentSections[sectionIndex];
      infoModalContent.innerHTML = '';
      infoModalContent.scrollTop = 0;
      const article = document.createElement('div');
      article.className = 'faq-article-view';
      article.innerHTML = `
        <h3><i class="${section.icon || 'fas fa-circle'}"></i> ${section.label}</h3>
        <div>${section.content}</div>
      `;
      infoModalContent.appendChild(article);

      // Mobile: Sync dropdown toggle label if it exists
      const mobileToggle = document.querySelector('.faq-mobile-selector span');
      if (mobileToggle) mobileToggle.textContent = section.label;
    }

    // Build sidebar navigation buttons
    if (infoModalNav) {
      infoModalNav.innerHTML = '';
      currentSections.forEach((section, index) => {
        const btn = document.createElement('button');
        btn.className = 'info-nav-item' + (index === 0 ? ' active' : '');
        btn.setAttribute('data-nav-index', index);
        btn.setAttribute('data-label', section.label.toLowerCase());
        btn.innerHTML = `<i class="${section.icon || 'fas fa-circle'}"></i><span>${section.label}</span>`;
        btn.addEventListener('click', () => {
          // Update active state across all sidebar items
          infoModalNav.querySelectorAll('.info-nav-item').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          // Detect overflow for marquee (FAQ only)
          if (isFaqMode) detectNavOverflow();

          if (isFaqMode) {
            // FAQ: render single article view
            renderFaqArticle(index);
          } else {
            // Default: scroll to matching card
            isScrollingFromClick = true;
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => { isScrollingFromClick = false; }, 800);

            if (infoModalContent) {
              infoModalContent.querySelectorAll('.info-section-card').forEach(c => c.classList.remove('active-card'));
              const targetCard = infoModalContent.querySelector(`[data-section-index="${index}"]`);
              if (targetCard) {
                targetCard.classList.add('active-card');
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }
        });
        infoModalNav.appendChild(btn);
      });

      // Check text overflow for marquee on initial render (FAQ only)
      if (isFaqMode) requestAnimationFrame(detectNavOverflow);
    }

    // --- FAQ Mobile Dropdown Logic ---
    if (isFaqMode && window.innerWidth <= 700) {
      let mobileToggle = infoModalNav.parentElement.querySelector('.faq-mobile-selector');
      if (!mobileToggle) {
        mobileToggle = document.createElement('div');
        mobileToggle.className = 'faq-mobile-selector';
        infoModalNav.parentElement.insertBefore(mobileToggle, infoModalNav);
      }

      // Set initial label from first section
      mobileToggle.innerHTML = `<span>${currentSections[0].label}</span><i class="fas fa-chevron-down chevron"></i>`;

      // Toggle open state logic
      mobileToggle.onclick = (e) => {
        e.stopPropagation();
        const isOpen = mobileToggle.classList.toggle('open');
        infoModalNav.classList.toggle('open', isOpen);
      };

      // Ensure clicking an item closes the dropdown
      infoModalNav.querySelectorAll('.info-nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
          mobileToggle.classList.remove('open');
          infoModalNav.classList.remove('open');
        });
      });
    } else {
      const existingToggle = document.querySelector('.faq-mobile-selector');
      if (existingToggle) existingToggle.remove();
      infoModalNav.classList.remove('open');
    }

    // Search bar filtering logic (FAQ only)
    if (isFaqMode) {
      const searchInput = document.getElementById('info-search-input');
      if (searchInput) {
        const freshInput = searchInput.cloneNode(true);
        searchInput.parentNode.replaceChild(freshInput, searchInput);

        freshInput.addEventListener('input', () => {
          const query = freshInput.value.toLowerCase().trim();
          const navBtns = infoModalNav.querySelectorAll('.info-nav-item');

          navBtns.forEach((btn) => {
            const label = btn.getAttribute('data-label') || '';
            const idx = parseInt(btn.getAttribute('data-nav-index'));
            const sectionContent = currentSections[idx] ? currentSections[idx].content.toLowerCase() : '';
            const matches = !query || label.includes(query) || sectionContent.includes(query);
            btn.classList.toggle('search-hidden', !matches);
          });
        });
      }
    }

    // Build content: FAQ = single article | Default = all cards
    if (infoModalContent) {
      infoModalContent.innerHTML = '';

      if (isFaqMode) {
        // Render the first section as article by default
        renderFaqArticle(0);
      } else {
        // Default card-based rendering for ToS, Payments
        currentSections.forEach((section, index) => {
          const card = document.createElement('div');
          card.className = 'info-section-card' + (index === 0 ? ' active-card' : '');
          card.setAttribute('data-section-index', index);
          card.innerHTML = `
            <div class="info-section-card-header">
              <i class="${section.icon || 'fas fa-circle'}"></i>
              <strong>${section.label}</strong>
            </div>
            <div class="info-section-card-body">${section.content}</div>
          `;
          infoModalContent.appendChild(card);
        });
        infoModalContent.scrollTop = 0;
      }
    }

    // -------------------------
    // Mount ToS Form Visibility Layer
    // -------------------------
    if (isTosCurrentlyOpen && tosModule) {
      tosModule.style.display = 'flex';

      // Evaluate dynamic 30-days & Version validation
      let isAlreadyAccepted = false;
      let savedDocId = null;

      try {
        const rawData = localStorage.getItem('tos_acceptance_data');
        if (rawData) {
          const savedData = JSON.parse(rawData);
          const daysPassed = (Date.now() - savedData.timestamp) / (1000 * 60 * 60 * 24);
          const currentVersion = infoObj.version || 'v1.0';

          // Re-prompt if 30 days passed or if ToS version text has updated
          if (daysPassed < 30 && savedData.version === currentVersion) {
            isAlreadyAccepted = true;
            savedDocId = savedData.docId;
          }
        }
      } catch (e) { console.warn('Could not parse ToS local storage', e); }

      if (isAlreadyAccepted) {
        // Hide inputs and show download button for returning users
        if (tosSigInput && tosSigInput.parentElement) tosSigInput.parentElement.style.display = 'none';

        if (tosAcceptBtn) {
          tosAcceptBtn.style.display = 'block';
          tosAcceptBtn.disabled = false;
          tosAcceptBtn.classList.add('btn-success');
          tosAcceptBtn.innerText = 'Access Digital Copy';

          // Re-attach download logic if data needs fetching
          tosAcceptBtn.onclick = async () => {
            if (signedData) {
              generateTosPdf(signedData);
            } else if (savedDocId) {
              tosAcceptBtn.innerText = 'Fetching Contract...';
              tosAcceptBtn.disabled = true;
              if (typeof window.getSignatureFromDatabase === 'function') {
                const result = await window.getSignatureFromDatabase(savedDocId);
                if (result.success) {
                  signedData = result.data;
                  generateTosPdf(signedData);
                  tosAcceptBtn.innerText = 'Access Digital Copy';
                  tosAcceptBtn.disabled = false;
                } else {
                  alert("Failed to retrieve contract from server. You may need to resign.");
                  localStorage.removeItem('tos_acceptance_data');
                  window.location.reload();
                }
              } else {
                alert("Cannot connect to server. Please try again later.");
                tosAcceptBtn.innerText = 'Access Digital Copy';
                tosAcceptBtn.disabled = false;
              }
            }
          };
        }

        if (tosCheckbox) {
          tosCheckbox.checked = true;
          tosCheckbox.disabled = true;
        }
      } else {
        hasScrolledTosToBottom = false;
        if (tosSigInput && tosSigInput.parentElement) tosSigInput.parentElement.style.display = 'grid'; // Ensure grid on reset

        if (tosSigInput) {
          tosSigInput.disabled = false;
          tosSigInput.value = '';
        }
        if (tosEmailInput) {
          tosEmailInput.disabled = false;
          tosEmailInput.value = '';
        }
        if (tosCheckbox) {
          tosCheckbox.checked = false;
          tosCheckbox.disabled = false;
        }
        if (tosAcceptBtn) {
          tosAcceptBtn.style.display = 'block';
          tosAcceptBtn.disabled = true;
          tosAcceptBtn.classList.remove('btn-success');
          tosAcceptBtn.innerText = 'Accept Terms';
          tosAcceptBtn.onclick = null; // Reset to default listener check
        }

        // Defer validation slightly allowing DOM engine to render scrollHeight geometry accurately
        setTimeout(validateTosAcceptance, 100);
      }
    } else if (tosModule) {
      tosModule.style.display = 'none';
    }

    infoModal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Push deep-link hash to URL for shareability
    window.history.replaceState(null, '', `#info-${infoObj.id}`);
  };

  if (infoCloseBtn && infoModal) {
    // Close on X button click
    infoCloseBtn.addEventListener('click', () => {
      infoModal.classList.remove('open');
      document.body.style.overflow = '';
      window.history.replaceState(null, '', window.location.pathname);
    });

    // Close on clicking outside the modal panel overlay
    infoModal.addEventListener('click', (e) => {
      if (e.target === infoModal) {
        infoModal.classList.remove('open');
        document.body.style.overflow = '';
        window.history.replaceState(null, '', window.location.pathname);
      }
    });
  }

  // Auto-open info modal from deep-link hash on page load
  const urlHash = window.location.hash;
  if (urlHash.startsWith('#info-')) {
    const targetId = urlHash.replace('#info-', '');
    if (typeof CONFIG !== 'undefined' && CONFIG.serviceInfo) {
      const targetInfo = CONFIG.serviceInfo.find(i => i.id === targetId);
      if (targetInfo) {
        setTimeout(() => window.openInfoModal(targetInfo), 500);
      }
    }
  }

});