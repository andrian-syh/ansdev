document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // TESTIMONIALS / REPUTATION LOGIC
  // ==========================================
  const testiGrid = document.getElementById('ui-testimonial-grid');
  const testiActionsContainer = document.getElementById('ui-testimonial-actions');

  if (testiGrid && typeof CONFIG !== 'undefined' && CONFIG.testimonials) {
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
        for (let i = 1; i <= 5; i++) {
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

});
