document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // SERVICES (RATE CARDS) LOGIC
  // ==========================================
  const pBoard = document.getElementById('ui-pricing-board');
  if (pBoard && typeof CONFIG !== 'undefined' && CONFIG.services && CONFIG.services.length > 0) {
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
  if (sLinksDoc && typeof CONFIG !== 'undefined' && CONFIG.serviceInfo && CONFIG.serviceInfo.length > 0) {
    sLinksDoc.innerHTML = '';
    CONFIG.serviceInfo.forEach(info => {
      const link = document.createElement('a');
      link.href = '#'; // Prevent jump
      link.className = 'service-info-link';
      link.textContent = info.text;

      link.addEventListener('click', (e) => {
        e.preventDefault();
        // Uses the globally exposed function from info-modal.js
        if (typeof window.openInfoModal === 'function') {
          window.openInfoModal(info);
        }
      });

      sLinksDoc.appendChild(link);
    });
  }

});
