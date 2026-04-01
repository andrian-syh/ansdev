document.addEventListener('DOMContentLoaded', () => {

  // Navbar Scroll Logic
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Nav Toggle Logic
  const mobileToggleBtn = document.getElementById('mobile-toggle-btn');
  const mobileGlassMenu = document.getElementById('mobile-glass-menu');
  const body = document.body;

  if (mobileToggleBtn && mobileGlassMenu) {
    mobileToggleBtn.addEventListener('click', () => {
      mobileToggleBtn.classList.toggle('active');
      mobileGlassMenu.classList.toggle('open');
      
      // Lock background scrolling when mobile menu is active
      if (mobileGlassMenu.classList.contains('open')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // Auto-close navigation menu on link click
    const mobileLinks = mobileGlassMenu.querySelectorAll('.mobile-nav-item');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggleBtn.classList.remove('active');
        mobileGlassMenu.classList.remove('open');
        body.style.overflow = '';
      });
    });
  }

  // Set Current Year in Footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // ============================================
  // DOM POPULATION FROM CONFIG
  // ============================================
  if (typeof CONFIG !== 'undefined') {
    // 1. Core Profile Identity
    const pName = document.getElementById('ui-profile-name');
    if (pName) pName.textContent = CONFIG.profile.name;
    const pDesc = document.getElementById('ui-profile-desc');
    if (pDesc) pDesc.textContent = CONFIG.profile.description;
    const pAvatar = document.getElementById('ui-profile-avatar');
    if (pAvatar) pAvatar.src = CONFIG.profile.avatar;

    // 2. Social Links
    const rSocial = document.getElementById('ui-social-roblox');
    if (rSocial) rSocial.href = CONFIG.socials.roblox;
    const dSocial = document.getElementById('ui-social-discord');
    if (dSocial) dSocial.href = CONFIG.socials.discord;
    const lSocial = document.getElementById('ui-social-linkedin');
    if (lSocial) lSocial.href = CONFIG.socials.linkedin;

    // 3. Quantitative Stats Renderer
    const statsContainer = document.getElementById('ui-stats-container');
    if (statsContainer && CONFIG.stats.length > 0) {
      statsContainer.innerHTML = '';
      CONFIG.stats.forEach((stat, index) => {
        // Build stat item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'stat-mini-item';
        
        const h4 = document.createElement('h4');
        h4.className = 'stat-number';
        h4.setAttribute('data-target', stat.target);
        h4.setAttribute('data-suffix', stat.suffix);
        h4.textContent = '0' + stat.suffix;
        
        const p = document.createElement('p');
        p.textContent = stat.label;

        itemDiv.appendChild(h4);
        itemDiv.appendChild(p);
        statsContainer.appendChild(itemDiv);

        // Build divider if not the last item
        if (index < CONFIG.stats.length - 1) {
          const mDivider = document.createElement('div');
          mDivider.className = 'stat-mini-divider';
          statsContainer.appendChild(mDivider);
        }
      });
    }

    // 4. About Section Data
    const aboutTitle = document.getElementById('ui-about-title');
    if (CONFIG.about && aboutTitle) {
      document.getElementById('ui-about-eyebrow').textContent = CONFIG.about.eyebrow;
      aboutTitle.textContent = CONFIG.about.title;
      document.getElementById('ui-about-img').src = CONFIG.about.image;
      document.getElementById('ui-about-cv').href = CONFIG.about.cvLink;

      // Iterate and render about paragraphs
      const pContainer = document.getElementById('ui-about-paragraphs');
      pContainer.innerHTML = '';
      CONFIG.about.paragraphs.forEach(pHTML => {
        const pElement = document.createElement('p');
        pElement.innerHTML = pHTML; // Using innerHTML to preserve config-defined inline structural tags (e.g. <strong>)
        pContainer.appendChild(pElement);
      });

      // Generate skill badges dynamically
      const skillsContainer = document.getElementById('ui-about-skills');
      skillsContainer.innerHTML = '';
      CONFIG.about.skills.forEach(skill => {
        const sSpan = document.createElement('span');
        sSpan.className = 'skill-badge';
        sSpan.textContent = skill;
        skillsContainer.appendChild(sSpan);
      });
    }
  }

  // ============================================
  // TYPING EFFECT
  // ============================================
  const typedTextSpan = document.querySelector(".typed-text");
  const cursorSpan = document.querySelector(".cursor");
  const textArray = (typeof CONFIG !== 'undefined') ? CONFIG.profile.titles : ["Developer", "Scripter"];
  
  const typingDelay = 100;
  const erasingDelay = 40;
  const newTextDelay = 2000;
  let textArrayIndex = 0;
  let charIndex = 0;

  function type() {
    if (charIndex < textArray[textArrayIndex].length) {
      if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
      if (cursorSpan) cursorSpan.classList.remove("typing");
      setTimeout(erase, newTextDelay);
    }
  }

  function erase() {
    if (charIndex > 0) {
      if (cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      if (cursorSpan) cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }

  if (textArray.length > 0 && typedTextSpan) {
    setTimeout(type, newTextDelay + 250);
  }

  // ============================================
  // COUNTER ANIMATION HOOK
  // ============================================
  const statNumbers = document.querySelectorAll('.stat-number');
  
  function animateValue(obj, start, end, duration, suffix) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentVal = Math.floor(progress * (end - start) + start);
      obj.textContent = currentVal + suffix;
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        obj.textContent = end + suffix; 
      }
    };
    window.requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const finalValue = parseInt(targetElement.getAttribute('data-target'));
        const suffix = targetElement.getAttribute('data-suffix') || '';
        animateValue(targetElement, 0, finalValue, 1500, suffix);
        obs.unobserve(targetElement);
      }
    });
  }, { threshold: 0.5 });

  statNumbers.forEach(stat => {
    observer.observe(stat);
  });

  // ============================================
  // PORTFOLIO / PROJECTS LOGIC
  // ============================================
  if (typeof CONFIG !== 'undefined' && CONFIG.portfolioData) {
    const filtersContainer = document.getElementById('ui-portfolio-filters');
    const gridContainer = document.getElementById('ui-portfolio-grid');
    const modal = document.getElementById('project-modal');
    const closeBtn = document.getElementById('modal-close-btn');
    const pData = CONFIG.portfolioData;

    let currentFilter = "All";
    let currentGalleryPage = 1;

    // 1. Render Filters
    if (filtersContainer) {
      pData.filters.forEach((filter, index) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (index === 0 ? ' active' : '');
        btn.textContent = filter;
        btn.setAttribute('data-filter', filter);
        
        btn.addEventListener('click', () => {
          // Highlight active filter button
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          currentFilter = filter;
          currentGalleryPage = 1; // Reset to page 1 on filter change
          renderProjects();
        });
        
        filtersContainer.appendChild(btn);
      });
    }

    // 2. Render Cards & Pagination Configuration
    function renderProjects() {
      if (!gridContainer) return;
      gridContainer.innerHTML = '';
      
      // Filter projects array based on selected genre
      const filtered = pData.projects.filter(p => currentFilter === "All" || p.genre === currentFilter);
      
      // Pagination parameters
      const isMobilePag = window.innerWidth <= 900;
      const itemsPerPage = isMobilePag ? 4 : 8; // Adapt items per page based on viewport size
      const totalPages = Math.ceil(filtered.length / itemsPerPage);
      
      // Prevent out-of-bounds page indexing due to resize or filter events
      if (currentGalleryPage > totalPages && totalPages > 0) currentGalleryPage = totalPages;
      if (currentGalleryPage < 1) currentGalleryPage = 1;
      
      // Slice array to extract current page data
      const startIndex = (currentGalleryPage - 1) * itemsPerPage;
      const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage);
      
      paginatedItems.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'glass-panel project-card';
        card.innerHTML = `
          <div class="project-thumb">
            <img src="${proj.image}" alt="${proj.title}">
          </div>
          <div class="project-card-content">
            <h3 class="project-title">
              ${proj.title}
              <span class="project-visits">${proj.visits}</span>
            </h3>
            <p class="project-genre">${proj.tags.join(' &bull; ')}</p>
            <button class="btn btn-primary project-btn-mobile" style="margin-top:auto;" onclick="openProjectModal('${proj.id}')">View Details</button>
          </div>
        `;
        gridContainer.appendChild(card);
      });
      
      // Execute pagination controller rendering
      renderPagination(totalPages);
    }
    
    // Pagination UI Controller Builder
    function renderPagination(totalPages) {
      const pagContainer = document.getElementById('ui-pagination-controls');
      if (!pagContainer) return;
      pagContainer.innerHTML = '';
      
      if (totalPages <= 1) return; // Hide pagination if content fits single page
      
      // Previous Button
      const prevBtn = document.createElement('button');
      prevBtn.className = 'page-btn';
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevBtn.disabled = currentGalleryPage === 1;
      prevBtn.addEventListener('click', () => {
        if (currentGalleryPage > 1) { 
          currentGalleryPage--; 
          renderProjects(); 
        }
      });
      pagContainer.appendChild(prevBtn);
      
      // Numeric Pagination Buttons
      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn' + (i === currentGalleryPage ? ' active' : '');
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
          currentGalleryPage = i; 
          renderProjects();
        });
        pagContainer.appendChild(pageBtn);
      }
      
      // Next Button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn';
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextBtn.disabled = currentGalleryPage === totalPages;
      nextBtn.addEventListener('click', () => {
        if (currentGalleryPage < totalPages) { 
          currentGalleryPage++; 
          renderProjects(); 
        }
      });
      pagContainer.appendChild(nextBtn);
    }
    
    // Register resize listener to adapt layout dynamically
    window.addEventListener('resize', () => {
      // Debounce render execution to prevent layout thrashing
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(() => {
        renderProjects();
      }, 150);
    });

    // 3. Modal Functionality
    window.openProjectModal = function(id) {
      const proj = pData.projects.find(p => p.id === id);
      if (!proj || !modal) return;
      
      document.getElementById('modal-img').src = proj.image;
      document.getElementById('modal-title').textContent = proj.title;
      
      const tagsContainer = document.getElementById('modal-tags');
      tagsContainer.innerHTML = '';
      proj.tags.forEach(tag => {
        const tSpan = document.createElement('span');
        tSpan.className = 'skill-badge';
        tSpan.textContent = tag;
        tagsContainer.appendChild(tSpan);
      });
      
      document.getElementById('modal-desc').textContent = proj.description;
      
      const contribul = document.getElementById('modal-contributions');
      contribul.innerHTML = '';
      proj.contributions.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        contribul.appendChild(li);
      });
      
      document.getElementById('modal-link').href = proj.link;
      
      modal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Lock background scroll
    };

    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
        document.body.style.overflow = '';
      });
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    // Initial load for Grid
    renderProjects();

    // ==========================================
    // 4. DOUBLE MARQUEE / CONVEYER BELT LOGIC (index.html)
    // ==========================================
    const marqueeTrack1 = document.getElementById('ui-portfolio-marquee-1');
    const marqueeTrack2 = document.getElementById('ui-portfolio-marquee-2');
    
    if (marqueeTrack1 && marqueeTrack2) {
      
      // Duplicate data extensively to prevent visible seam clipping
      const allProjects = [...pData.projects, ...pData.projects, ...pData.projects, ...pData.projects];
      
      // Node generator utility
      function fillTrack(trackElem, items) {
        items.forEach(proj => {
          const card = document.createElement('div');
          card.className = 'glass-panel project-card';
          card.innerHTML = `
            <div class="project-thumb">
              <img src="${proj.image}" alt="${proj.title}">
            </div>
            <div class="project-card-content">
              <h3 class="project-title">
                ${proj.title}
                <span class="project-visits">${proj.visits}</span>
              </h3>
              <p class="project-genre" style="margin-bottom: 0;">${proj.genre}</p>
            </div>
          `;
          
          card.addEventListener('click', () => {
            if (typeof window.openProjectModal === 'function') {
              window.openProjectModal(proj.id);
            }
          });
          
          trackElem.appendChild(card);
        });
        
        // Independent hover pause controller
        trackElem.addEventListener('mouseenter', () => trackElem.classList.add('paused'));
        trackElem.addEventListener('mouseleave', () => trackElem.classList.remove('paused'));
      }
      
      // Split arrays pseudo-randomly for aesthetic variety
      const half1 = allProjects.filter((_, i) => i % 2 === 0);
      const half2 = allProjects.filter((_, i) => i % 2 !== 0);
      
      fillTrack(marqueeTrack1, half1);
      fillTrack(marqueeTrack2, half2);
    }
    
    // ==========================================
    // 5. TESTIMONIALS / REPUTATION LOGIC
    // ==========================================
    const testiGrid = document.getElementById('ui-testimonial-grid');
    const testiActionsContainer = document.getElementById('ui-testimonial-actions');
    
    if (testiGrid && CONFIG.testimonials) {
      let testiLimit = 6;
      let testiPage = 1;
      const tData = CONFIG.testimonials;
      
      function renderTestimonials() {
        testiGrid.innerHTML = '';
        
        let mode = 'all';
        let startIndex = 0;
        let endIndex = tData.length;
        
        if (tData.length > 12) {
          mode = 'pagination';
          startIndex = (testiPage - 1) * 6;
          endIndex = Math.min(startIndex + 6, tData.length);
        } else if (tData.length > 6) {
          mode = 'loadmore';
          endIndex = testiLimit;
        }

        const visibleData = tData.slice(startIndex, endIndex);
        
        visibleData.forEach(item => {
          // Generate Rating Stars HTML
          let starsHTML = '';
          for(let i=1; i<=5; i++) {
            if (i <= item.rating) {
              starsHTML += '<i class="fas fa-star"></i>';
            } else {
              starsHTML += '<i class="far fa-star" style="color: rgba(255,255,255,0.2);"></i>';
            }
          }
          
          // Define initials fallback
          const initials = item.name.replace(/[^a-zA-Z]/g, '').charAt(0) || '?';
          // Direct Image Validator - Fallback defined inline via onerror DOM event
          const isDirectImage = item.avatar && item.avatar.trim().length > 0 && item.avatar.startsWith('http');
          
          const avatarHTML = isDirectImage
            ? `<img src="${item.avatar}" alt="${item.name}" class="testi-avatar" 
                 onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <div class="testi-avatar-fallback" style="display:none;">${initials}</div>`
            : `<div class="testi-avatar-fallback">${initials}</div>`;
          
          const card = document.createElement('a');
          card.href = item.link || '#';
          card.target = "_blank";
          card.className = 'glass-panel testimonial-card';
          card.innerHTML = `
            <div class="testi-header">
              <div class="testi-profile">
                ${avatarHTML}
                <div class="testi-meta">
                  <span class="testi-name">${item.name}</span>
                  <span class="testi-title">${item.title}</span>
                </div>
              </div>
            </div>
            <p class="testi-text">"${item.text}"</p>
            <div class="testi-stars">
              ${starsHTML}
            </div>
          `;
          testiGrid.appendChild(card);
        });
        
        // Render Controls
        if (testiActionsContainer) {
          testiActionsContainer.innerHTML = '';
          
          if (mode === 'loadmore' && testiLimit === 6) {
            testiActionsContainer.style.display = 'block';
            testiActionsContainer.innerHTML = `<button class="btn-pill-show-more" id="btn-load-more-testimonials"><span class="btn-pill-text">Show More Voices</span> <i class="fas fa-arrow-right btn-pill-icon"></i></button>`;
            
            document.getElementById('btn-load-more-testimonials').addEventListener('click', () => {
              testiLimit = 12; 
              renderTestimonials();
            });
          } else if (mode === 'pagination') {
            testiActionsContainer.style.display = 'block';
            const totalPages = Math.ceil(tData.length / 6);
            let pageButtons = '';
            
            // Prev
            pageButtons += `<button class="page-btn" ${testiPage === 1 ? 'disabled' : ''} data-page="${testiPage - 1}"><i class="fas fa-chevron-left"></i></button>`;
            
            // Numbers
            for (let i = 1; i <= totalPages; i++) {
              pageButtons += `<button class="page-btn ${i === testiPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
            }
            
            // Next
            pageButtons += `<button class="page-btn" ${testiPage === totalPages ? 'disabled' : ''} data-page="${testiPage + 1}"><i class="fas fa-chevron-right"></i></button>`;
            
            testiActionsContainer.innerHTML = `<div class="pagination-controls" style="margin-top: 0;">${pageButtons}</div>`;
            
            testiActionsContainer.querySelectorAll('.page-btn:not(:disabled)').forEach(btn => {
              btn.addEventListener('click', (e) => {
                testiPage = parseInt(e.currentTarget.getAttribute('data-page'));
                renderTestimonials();
                document.getElementById('reputation').scrollIntoView({ behavior: 'smooth' });
              });
            });
          } else {
            testiActionsContainer.style.display = 'none';
          }
        }
      }
      
      renderTestimonials();
    }
    
    // ==========================================
    // 6. ACTIVE NAV SPY (Scroll Tracker)
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    // Exclusively target internal anchor links mapping to sections
    const hashLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav-item[href^="#"]');
    
    if (sections.length > 0 && hashLinks.length > 0) {
      const observerOptions = {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Trigger intersection exactly at the vertical center of the viewport
        threshold: 0
      };

      const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute('id');
            hashLinks.forEach(link => {
              link.classList.remove('active');
              if (link.getAttribute('href') === `#${currentId}`) {
                link.classList.add('active');
              }
            });
          }
        });
      }, observerOptions);

      sections.forEach(sec => navObserver.observe(sec));
    }
    
    // ==========================================
    // 7. SERVICES (RATE CARDS) LOGIC
    // ==========================================
    const pBoard = document.getElementById('ui-pricing-board');
    if (pBoard && CONFIG.services && CONFIG.services.length > 0) {
      pBoard.innerHTML = '';
      
      // Intelligent regional pricing detection based on client timezone/language
      let userRegion = 'default';
      try {
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const lang = navigator.language || navigator.userLanguage;
        // Geolocate strictly to ID locale
        if (tz === 'Asia/Jakarta' || tz === 'Asia/Makassar' || tz === 'Asia/Jayapura' || lang.startsWith('id')) {
          userRegion = 'ID';
        }
      } catch (e) {
        console.warn("Region detection failed", e);
      }
      
      CONFIG.services.forEach(svc => {
        // Render features as a list with custom bullets
        let featuresHTML = '';
        svc.features.forEach(feat => {
          featuresHTML += `
            <li class="pricing-feature-item">
              <span style="color: var(--primary); margin-right: 0.8rem; font-size: 0.9rem; margin-top: 2px;">▹</span>
              <span>${feat}</span>
            </li>
          `;
        });
        
        // Resolve boolean recommendation flag
        const isRecmpClass = svc.recommended ? ' recommended' : '';
        const badgeHTML = svc.recommended ? `<div class="recommended-badge"><i class="fas fa-star" style="margin-right:4px;"></i> Recommended</div>` : '';
        
        // Resolve CTA configuration
        const btnClass = svc.recommended ? 'btn-primary' : 'btn-outline';
        const finalBtnLabel = svc.btnLabel || (svc.recommended ? 'Request Quote' : 'Inquire Now');
        
        // Regional Price Evaluator
        let displayPrice = "";
        let priceSubscript = "";
        if (typeof svc.price === 'object') {
          // Extract localized price payload, fallback to default USD mapping
          displayPrice = svc.price[userRegion] || svc.price.default || "Price Not Available";
          if (userRegion === 'default') {
            priceSubscript = "USD";
          }
        } else {
          // String-primitive backward compatibility hook for older configs
          displayPrice = svc.price;
        }
        
        const priceHTML = priceSubscript 
            ? `<div class="pricing-price">${displayPrice} <small>${priceSubscript}</small></div>`
            : `<div class="pricing-price">${displayPrice}</div>`;
        
        // Assemble column architecture
        const col = document.createElement('div');
        col.className = `pricing-col${isRecmpClass}`;
        
        col.innerHTML = `
          ${badgeHTML}
          <div class="pricing-icon"><i class="${svc.icon}"></i></div>
          <h3 class="pricing-title">${svc.title}</h3>
          
          <ul class="pricing-features">
            ${featuresHTML}
          </ul>
          
          ${priceHTML}
          
          <a href="#contact" class="pricing-btn ${btnClass}">
            ${finalBtnLabel}
          </a>
        `;
        
        pBoard.appendChild(col);
      });
      
      // Mouse Hover Glow Effect Logic
      pBoard.addEventListener('mousemove', (e) => {
        const rect = pBoard.getBoundingClientRect();
        const x = e.clientX - rect.left; // Translate global X to container-relative coordinate
        const y = e.clientY - rect.top;  // Translate global Y to container-relative coordinate
        
        // Expose coordinates as CSS variables for dynamic radial-gradient rendering
        pBoard.style.setProperty('--mouse-x', `${x}px`);
        pBoard.style.setProperty('--mouse-y', `${y}px`);
      });
      
      // Glow fade-out relies natively on CSS opacity transitions
    }

    // 7.1 SERVICE INFO LINKS
    const sLinksDoc = document.getElementById('ui-service-info-links');
    if (sLinksDoc && CONFIG.serviceInfo && CONFIG.serviceInfo.length > 0) {
      sLinksDoc.innerHTML = '';
      CONFIG.serviceInfo.forEach(info => {
        const link = document.createElement('a');
        link.href = '#'; // Prevent jump
        link.className = 'service-info-link';
        link.textContent = info.text;
        
        link.addEventListener('click', (e) => {
          e.preventDefault();
          if (typeof window.openInfoModal === 'function') {
            window.openInfoModal(info);
          }
        });
        
        sLinksDoc.appendChild(link);
      });
    }

    // ==========================================
    // 8. INFO MODAL LOGIC (ToS, Payments, etc)
    // ==========================================
    const infoModal = document.getElementById('info-modal');
    const infoCloseBtn = document.getElementById('info-modal-close-btn');

    window.openInfoModal = function(infoObj) {
      if (!infoModal) return;
      
      const titleElem = document.getElementById('info-modal-title');
      const contentElem = document.getElementById('info-modal-content');
      
      if (titleElem) titleElem.textContent = infoObj.title || infoObj.text;
      if (contentElem) contentElem.innerHTML = infoObj.content || "<p>Information not available.</p>";
      
      infoModal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Stop background scrolling
    };

    if (infoCloseBtn && infoModal) {
      // Close on X button click
      infoCloseBtn.addEventListener('click', () => {
        infoModal.classList.remove('open');
        document.body.style.overflow = '';
      });
      
      // Close on clicking outside the modal panel overlay
      infoModal.addEventListener('click', (e) => {
        if (e.target === infoModal) {
          infoModal.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }
    
    // ==========================================
    // 9. CONTACT FORM LOGIC
    // ==========================================
    const contactForm = document.getElementById('premium-contact-form');
    const statusMsg = document.getElementById('contact-status-msg');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (contactForm && statusMsg && submitBtn) {
      contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // ReCAPTCHA Verification Request
        const captchaResponse = typeof grecaptcha !== 'undefined' ? grecaptcha.getResponse() : '';
        if (!captchaResponse) {
          statusMsg.textContent = 'Please complete the reCAPTCHA validation first.';
          statusMsg.className = 'form-status error';
          return;
        }

        // Impose UI loading state
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span>Sending...</span> <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;
        statusMsg.style.display = 'none';
        statusMsg.className = 'form-status';

        const formData = new FormData(contactForm);

        try {
          const response = await fetch('https://formspree.io/f/mldbznzv', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
          });

          if (response.ok) {
            statusMsg.textContent = 'Transmission sent successfully! I will reply shortly.';
            statusMsg.className = 'form-status success';
            contactForm.reset();
            if (typeof grecaptcha !== 'undefined') grecaptcha.reset(); // Flush captcha token state
          } else {
            const data = await response.json();
            if (Object.hasOwn(data, 'errors')) {
              statusMsg.textContent = data.errors.map(err => err.message).join(', ');
            } else {
              statusMsg.textContent = 'Oops! There was a problem sending your message.';
            }
            statusMsg.className = 'form-status error';
          }
        } catch (error) {
          statusMsg.textContent = 'Oops! Network error. Please try again later.';
          statusMsg.className = 'form-status error';
        }

        // Kembalikan Tombol ke State Semula
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
      });
    }

  }

});
