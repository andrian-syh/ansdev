document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggler
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    function setTheme(theme) {
        if (theme === 'dark') {
            body.classList.add('dark-theme');
            themeIcon.classList.remove('fa-moon'); 
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'dark');
        } else { 
            body.classList.remove('dark-theme');
            themeIcon.classList.remove('fa-sun'); 
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'light');
        }
    }
    themeToggleBtn.addEventListener('click', () => {
        body.classList.contains('dark-theme') ? setTheme('light') : setTheme('dark');
    });
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (prefersDark) {
        setTheme('dark');
    } else {
        setTheme('light'); 
    }

    // Mobile Menu Toggle
    const menuToggleBtn = document.getElementById('menu-toggle-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = menuToggleBtn.querySelector('i');
    menuToggleBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuIcon.classList.toggle('fa-bars');
        menuIcon.classList.toggle('fa-times');
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.remove('fa-times');
                menuIcon.classList.add('fa-bars');
            }
        });
    });
    
    // Active Nav Link Highlighting on Scroll
    const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
    const sections = document.querySelectorAll('main section[id]'); 
    const headerHeight = document.querySelector('header').offsetHeight;
    function changeNavActiveState() {
        let currentSectionId = '';
        let fromTop = window.scrollY + headerHeight + 50; 
        sections.forEach(section => {
            if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop) {
                currentSectionId = section.getAttribute('id');
            }
        });
        let activeLinkFound = false;
        navAnchors.forEach(anchor => {
            anchor.classList.remove('active');
            if (anchor.getAttribute('href') === `#${currentSectionId}`) {
                anchor.classList.add('active');
                activeLinkFound = true;
            }
        });
        if (!activeLinkFound && window.scrollY < sections[0]?.offsetTop - headerHeight) {
             const homeLink = document.querySelector('.nav-links a[href="#hero"]');
             if (homeLink) { homeLink.classList.add('active'); }
        }
    }
    window.addEventListener('scroll', changeNavActiveState);
    changeNavActiveState(); 

    // Update Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) { currentYearSpan.textContent = new Date().getFullYear(); }

    // Typed Text Effect
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");
    const textArray = ["Roblox Game Developer", "Luau Scripter"]; 
    const typingDelay = 75;
    const erasingDelay = 50;
    const newTextDelay = 1500; 
    let textArrayIndex = 0;
    let charIndex = 0;
    function type() {
        if (typedTextSpan && charIndex < textArray[textArrayIndex].length) {
            if(cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingDelay);
        } else {
            if(cursorSpan) cursorSpan.classList.remove("typing");
            setTimeout(erase, newTextDelay);
        }
    }
    function erase() {
        if (typedTextSpan && charIndex > 0) {
            if(cursorSpan && !cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
            typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
            charIndex--;
            setTimeout(erase, erasingDelay);
        } else {
            if(cursorSpan) cursorSpan.classList.remove("typing");
            textArrayIndex++;
            if(textArrayIndex>=textArray.length) textArrayIndex=0;
            if (typedTextSpan) setTimeout(type, typingDelay + 1100); 
        }
    }
    if (textArray.length && typedTextSpan) { setTimeout(type, newTextDelay + 250); }

    // Formspree Form Submission
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method, body: data, headers: {'Accept': 'application/json'}
        }).then(response => {
            formStatus.style.display = 'block'; 
            if (response.ok) {
                formStatus.textContent = "Thanks for your message! I'll get back to you soon.";
                formStatus.className = 'form-status-message success';
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.textContent = "Oops! There was a problem submitting your form.";
                    }
                    formStatus.className = 'form-status-message error';
                }).catch(() => { 
                    formStatus.textContent = "Oops! There was a problem submitting your form. Invalid response from server.";
                    formStatus.className = 'form-status-message error';
                });
            }
        }).catch(error => {
            formStatus.style.display = 'block'; 
            formStatus.textContent = "Oops! There was a problem submitting your form. Network error.";
            formStatus.className = 'form-status-message error';
        });
    }
    if (form) { form.addEventListener("submit", handleSubmit); }

    // Portfolio Filter Logic
    const filtersContainer = document.getElementById('dynamic-portfolio-filters-container');
    const projectCardsNodeList = document.querySelectorAll('.projects-grid .project-card');
    const projectsGrid = document.querySelector('.projects-grid');
    const viewMoreBtn = document.getElementById('view-more-projects-btn');
 
    const MAX_BUTTON_FILTERS = 5;
    const ITEMS_PER_PAGE = 6;
    let currentFilter = 'all';
    let currentlyDisplayedItems = 0;
    let allProjectCardsArray = Array.from(projectCardsNodeList);

    if (filtersContainer && allProjectCardsArray.length > 0) {
    const allGenres = new Set();
    allProjectCardsArray.forEach(card => {
        const genre = card.dataset.primaryGenre;
        if (genre) {
            allGenres.add(genre.trim());
        }
    });
    const uniqueGenres = Array.from(allGenres).sort();

    function displayItems() {
        let count = 0;
        let displayedInThisBatch = 0;
         
        allProjectCardsArray.forEach(card => {
            if (card.style.display !== 'none') {
                card.style.display = 'none';
            }
        });

        const filteredCards = allProjectCardsArray.filter(card => {
            const cardGenre = card.dataset.primaryGenre;
            return currentFilter === 'all' || cardGenre === currentFilter;
         });

        filteredCards.forEach((card, index) => {
            if (index < currentlyDisplayedItems) {
                card.style.display = 'flex';
                count++;
            }
        });
         
        if (count < filteredCards.length) {
            viewMoreBtn.style.display = 'inline-block';
        } else {
            viewMoreBtn.style.display = 'none';
        }
    }

    function applyFilter(filterValue) {
        currentFilter = filterValue;
        currentlyDisplayedItems = ITEMS_PER_PAGE;
        displayItems();
    }
     
    function updateSelectArrowColor(selectElement, currentTheme) {
        const arrowColor = currentTheme === 'dark' ? 'c9d1d9' : '212529';
        const newArrowSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23${arrowColor}' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`;
        selectElement.style.backgroundImage = newArrowSvg;
    }

    filtersContainer.innerHTML = ''; 
    if (uniqueGenres.length <= MAX_BUTTON_FILTERS && uniqueGenres.length > 0) {
        const allButton = document.createElement('button');
        allButton.classList.add('filter-btn', 'active');
        allButton.dataset.filter = 'all';
        allButton.textContent = 'All';
        allButton.addEventListener('click', () => {
            document.querySelectorAll('.portfolio-filters .filter-btn').forEach(btn => btn.classList.remove('active'));
            allButton.classList.add('active');
            applyFilter('all');
        });
        filtersContainer.appendChild(allButton);

        uniqueGenres.forEach(genre => {
            const button = document.createElement('button');
            button.classList.add('filter-btn');
            button.dataset.filter = genre;
            button.textContent = genre; 
            button.addEventListener('click', () => {
                document.querySelectorAll('.portfolio-filters .filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyFilter(genre);
            });
            filtersContainer.appendChild(button);
        });
     } else if (uniqueGenres.length > MAX_BUTTON_FILTERS) {
        const select = document.createElement('select');
        select.classList.add('portfolio-filter-select');
        const allOption = document.createElement('option');
        allOption.value = 'all';
        allOption.textContent = 'All Genres';
        select.appendChild(allOption);
        uniqueGenres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            select.appendChild(option);
        });
        select.addEventListener('change', (event) => {
            applyFilter(event.target.value);
        });
        filtersContainer.appendChild(select);
        const currentTheme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
        updateSelectArrowColor(select, currentTheme);
    } else {
        filtersContainer.style.display = 'none';
    }

    if (viewMoreBtn) {
        viewMoreBtn.addEventListener('click', () => {
            currentlyDisplayedItems += ITEMS_PER_PAGE;
            displayItems();
        });
    }

    applyFilter('all');
    } else if (projectCardsNodeList.length > 0) {
    currentlyDisplayedItems = ITEMS_PER_PAGE;
    displayItems();
    if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', () => {
                currentlyDisplayedItems += ITEMS_PER_PAGE;
                displayItems();
            });
        }
     }
});