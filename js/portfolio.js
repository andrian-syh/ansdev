document.addEventListener('DOMContentLoaded', () => {

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
      // Dynamic Genre Extraction from Project Data
      const uniqueGenres = ["All", ...new Set(pData.projects.map(p => p.genre))];

      uniqueGenres.forEach((filter) => {
        const btn = document.createElement('button');
        btn.className = 'filter-btn' + (filter === "All" ? ' active' : '');
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
              <span class="project-visits"><i class="fas fa-user" style="margin-right: 4px;"></i>${proj.visits}</span>
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
    // Exposed to window so dynamically created cards can call it
    window.openProjectModal = function (id) {
      const proj = pData.projects.find(p => p.id === id);
      if (!proj || !modal) return;

      document.getElementById('modal-img').src = proj.image;
      document.getElementById('modal-title').textContent = proj.title;
      document.getElementById('modal-duration').innerHTML = `<i class="far fa-calendar-alt"></i> ${proj.duration}`;
      document.getElementById('modal-desc').textContent = proj.description;

      const tagsContainer = document.getElementById('modal-tags');
      tagsContainer.innerHTML = '';
      proj.tags.forEach(tag => {
        const tSpan = document.createElement('span');
        tSpan.className = 'skill-badge';
        tSpan.textContent = tag;
        tagsContainer.appendChild(tSpan);
      });

      const contribul = document.getElementById('modal-contributions');
      contribul.innerHTML = '';
      proj.contributions.forEach(c => {
        const li = document.createElement('li');
        li.textContent = c;
        contribul.appendChild(li);
      });

      document.getElementById('modal-link').href = proj.link;

      // Populate Stats (Visits, Likes, Favorites)
      const statsContainer = document.getElementById('modal-stats');
      if (statsContainer) {
        statsContainer.innerHTML = `
          <div class="modal-stat-item" data-tooltip="Total Visits">
            <i class="fas fa-user"></i>
            <span>${proj.visits}</span>
          </div>
          <div class="modal-stat-item" data-tooltip="Total Likes">
            <i class="fas fa-thumbs-up"></i>
            <span>${proj.likes || '0'}</span>
          </div>
          <div class="modal-stat-item" data-tooltip="Total Favorites">
            <i class="fas fa-star"></i>
            <span>${proj.favorites || '0'}</span>
          </div>
        `;
      }

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
    // DOUBLE MARQUEE / CONVEYER BELT LOGIC (index.html)
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
                <span class="project-visits"><i class="fas fa-user" style="margin-right: 4px;"></i>${proj.visits}</span>
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
  }

});