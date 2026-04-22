document.addEventListener('DOMContentLoaded', () => {

  // ============================================
  // NAVBAR SCROLL LOGIC
  // ============================================
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ============================================
  // MOBILE NAV TOGGLE LOGIC
  // ============================================
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

  // ============================================
  // SET CURRENT YEAR IN FOOTER
  // ============================================
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
  // ACTIVE NAV SPY
  // ============================================
  const sections = document.querySelectorAll('section[id]');
  // Exclusively target internal anchor links mapping to sections
  const hashLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-nav-item[href^="#"]');
  const allHashLinks = document.querySelectorAll('a[href^="#"]');

  // Prevent URL hash update and scroll smoothly
  allHashLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });

        // Remove hash from URL if it's currently present
        if (window.location.hash) {
          history.replaceState(null, null, window.location.pathname + window.location.search);
        }
      }
    });
  });

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

});