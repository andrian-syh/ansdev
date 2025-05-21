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
        // Update select arrow color if portfolio select exists
        const portfolioSelect = document.querySelector('.portfolio-filter-select');
        if (portfolioSelect) {
            updateSelectArrowColor(portfolioSelect, theme);
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

    // Hero Stats Counter Animation
    const statItems = document.querySelectorAll('.hero-stats .stat-item h3');

    function formatNumberWithCommas(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function animateValue(element, start, end, duration, suffix = '', prefix = '') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            let currentValue = Math.floor(progress * (end - start) + start);
         
            element.textContent = prefix + formatNumberWithCommas(currentValue) + suffix;

            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                element.textContent = prefix + formatNumberWithCommas(end) + suffix;
            }
        };
        window.requestAnimationFrame(step);
    }

    function parseStatValue(valueString) {
        let numericValue = 0;
        let suffix = '';
        let prefix = '';

        if (valueString.endsWith('%')) {
            numericValue = Math.min(parseFloat(valueString.replace('%', '')), 100);
            suffix = '%';
        } else if (valueString.endsWith('B+')) {
            numericValue = parseFloat(valueString.replace('B+', ''));
            suffix = 'B+';
        } else if (valueString.endsWith('M+')) {
            numericValue = parseFloat(valueString.replace('M+', ''));
            suffix = 'M+';
        } else if (valueString.endsWith('K+')) {
            numericValue = parseFloat(valueString.replace('K+', ''));
            suffix = 'K+';
        } else if (valueString.endsWith('+')) {
            numericValue = parseFloat(valueString.replace('+', ''));
            suffix = '+';
        } else {
            numericValue = parseFloat(valueString);
            suffix = '';
        }
        return { numericValue, suffix, prefix };
    }

    const animateStat = (element) => {
        const targetValueString = element.dataset.targetValue || element.textContent;
        element.dataset.targetValue = targetValueString;

        const { numericValue, suffix, prefix: initialPrefix } = parseStatValue(targetValueString);
        let duration = 1250;

        if (suffix === 'K+' || suffix === 'M+' || suffix === 'B+') {
            let currentAnimatedValue = 0;
            let stages = [];

            if (suffix === 'K+') {
                stages.push({ end: numericValue, suffixInternal: 'K+', durationPart: duration });
            } else if (suffix === 'M+') {
                if (numericValue > 0 || targetValueString.startsWith("0M+")) {
                    if (numericValue > 0) stages.push({ end: 999, suffixInternal: 'K+', durationPart: 700 });
                }
                stages.push({ end: numericValue, suffixInternal: 'M+', durationPart: duration });
            } else if (suffix === 'B+') {
                if (numericValue > 0 || targetValueString.startsWith("0B+")) {
                    if (numericValue > 0) stages.push({ end: 999, suffixInternal: 'K+', durationPart: 500 });
                    if (numericValue > 0) stages.push({ end: 999, suffixInternal: 'M+', durationPart: 700 });
                }
                stages.push({ end: numericValue, suffixInternal: 'B+', durationPart: duration });
            }
         
            let stageIndex = 0;
            function runStage() {
                if (stageIndex < stages.length) {
                    const stage = stages[stageIndex];
                    let startVal = 0;
                    if (stageIndex > 0 && stages[stageIndex-1].suffixInternal !== stage.suffixInternal) {
                        startVal = (stage.suffixInternal === 'K+' && stages[stageIndex-1].suffixInternal === '') ? 0 : 1;
                        if (stage.end === 0 && (stage.suffixInternal === 'M+' || stage.suffixInternal === 'B+')) startVal = 0;
                    } else if (stageIndex > 0) {
                        startVal = stages[stageIndex-1].end;
                    }
                 
                    animateValue(element, startVal, stage.end, stage.durationPart, stage.suffixInternal, initialPrefix);
                    setTimeout(() => {
                        stageIndex++;
                        runStage();
                    }, stage.durationPart + 25);
                }
            }
            runStage();

        } else {
            animateValue(element, 0, numericValue, duration, suffix, initialPrefix);
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStat(entry.target);
                observerInstance.unobserve(entry.target);
            }
        });
    }, observerOptions);

    statItems.forEach(item => {
        observer.observe(item);
    });

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

    function updateSelectArrowColor(selectElement, currentTheme) {
        const themeSuffix = currentTheme === 'dark' ? 'c9d1d9' : '212529';
        const newArrowSvg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23${themeSuffix}' class='bi bi-chevron-down' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`;
        selectElement.style.backgroundImage = newArrowSvg;
    }

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
            let displayedCount = 0;
            
            const filteredCards = allProjectCardsArray.filter(card => {
                const cardGenre = card.dataset.primaryGenre;
                return currentFilter === 'all' || cardGenre === currentFilter;
            });

            allProjectCardsArray.forEach(card => {
                if (card.style.display !== 'none') { 
                    card.style.display = 'none';
                }
            });

            filteredCards.forEach((card, index) => {
                if (index < currentlyDisplayedItems) {
                    card.style.display = 'flex'; 
                    displayedCount++;
                }
            });
            
            if (displayedCount < filteredCards.length) {
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
    } else if (allProjectCardsArray.length > 0) { 
        currentlyDisplayedItems = ITEMS_PER_PAGE;
        function displayInitialItemsWithoutFilter() {
            allProjectCardsArray.forEach((card, index) => {
                if (index < currentlyDisplayedItems) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            if (currentlyDisplayedItems < allProjectCardsArray.length) {
                if(viewMoreBtn) viewMoreBtn.style.display = 'inline-block';
            } else {
                if(viewMoreBtn) viewMoreBtn.style.display = 'none';
            }
        }
        displayInitialItemsWithoutFilter();

        if (viewMoreBtn) {
            viewMoreBtn.addEventListener('click', () => {
                currentlyDisplayedItems += ITEMS_PER_PAGE;
                displayInitialItemsWithoutFilter();
            });
        }
    }

    // Portfolio Content Toggle Logic
    const contentToggleButtons = document.querySelectorAll('.btn-toggle-content');

    contentToggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const contentDiv = button.nextElementSibling;

            if (contentDiv && contentDiv.classList.contains('toggleable-content')) {
                button.classList.toggle('active');
                contentDiv.classList.toggle('expanded');
            }
        });
    });

    // Formspree Form Submission
    const form = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');
    async function handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        const recaptchaResponse = grecaptcha.getResponse();
        if (recaptchaResponse.length === 0) {
            formStatus.style.display = 'block';
            formStatus.textContent = "Please verify you are not a robot.";
            formStatus.className = 'form-status-message error';
            const recaptchaWidget = document.querySelector('.g-recaptcha');
            if (recaptchaWidget) {
                recaptchaWidget.style.border = '1px solid red';
                setTimeout(() => {
                     if(recaptchaWidget) recaptchaWidget.style.border = 'none';
                }, 2000);
            }
            return;
        }

        formStatus.style.display = 'block';
        formStatus.textContent = "Sending your message...";
        formStatus.className = 'form-status-message info';

        fetch(event.target.action, {
            method: form.method, body: data, headers: {'Accept': 'application/json'}
        }).then(response => {
            formStatus.style.display = 'block'; 
            if (response.ok) {
                formStatus.textContent = "Thanks for your message! I'll get back to you soon.";
                formStatus.className = 'form-status-message success';
                form.reset();
                grecaptcha.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        formStatus.textContent = data["errors"].map(error => error["message"]).join(", ");
                    } else {
                        formStatus.textContent = "Oops! There was a problem submitting your form.";
                    }
                    formStatus.className = 'form-status-message error';
                    grecaptcha.reset();
                }).catch(() => { 
                    formStatus.textContent = "Oops! There was a problem submitting your form. Invalid response from server.";
                    formStatus.className = 'form-status-message error';
                    grecaptcha.reset();
                });
            }
        }).catch(error => {
            formStatus.style.display = 'block'; 
            formStatus.textContent = "Oops! There was a problem submitting your form. Network error.";
            formStatus.className = 'form-status-message error';
            grecaptcha.reset();
        });
    }
    if (form) { form.addEventListener("submit", handleSubmit); }

    // Update Copyright Year
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) { currentYearSpan.textContent = new Date().getFullYear(); }

    // Custom Tooltip Logic
    const tooltipElement = document.getElementById('custom-tooltip');
    const tooltipTriggers = document.querySelectorAll('.btn-play-project'); 
    const arrowHeight = 6; 
    const tooltipOffsetFromElement = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--tooltip-offset')) || 8;

    let activeTooltipTrigger = null; 

    function hideTooltip(currentTrigger) {
        if (!tooltipElement || !currentTrigger) return;

        tooltipElement.classList.remove('visible');
        tooltipElement.setAttribute('aria-hidden', 'true');
        
        const storedTitle = currentTrigger.getAttribute('data-tooltip-title');
        if (storedTitle) {
            currentTrigger.setAttribute('title', storedTitle); 
        }
        if (activeTooltipTrigger === currentTrigger) {
            activeTooltipTrigger = null; 
        }
    }

    tooltipTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', (event) => {
            if (!tooltipElement) return;

            let title = trigger.getAttribute('data-tooltip-title');
            if (!title && trigger.hasAttribute('title')) {
                title = trigger.getAttribute('title');
                trigger.setAttribute('data-tooltip-title', title);
                trigger.removeAttribute('title');
            } else if (!title && !trigger.hasAttribute('title')) {
                return;
            }
            
            tooltipElement.textContent = title;
            tooltipElement.style.display = 'block'; 

            const triggerRect = trigger.getBoundingClientRect();
            const tooltipRect = tooltipElement.getBoundingClientRect(); 
            
            let top, left;
            tooltipElement.classList.remove('tooltip-below'); 

            if ((triggerRect.top - tooltipRect.height - arrowHeight - tooltipOffsetFromElement) > 0) {
                top = triggerRect.top - tooltipRect.height - arrowHeight - tooltipOffsetFromElement + window.scrollY;
            } else { 
                top = triggerRect.bottom + arrowHeight + tooltipOffsetFromElement + window.scrollY;
                tooltipElement.classList.add('tooltip-below');
            }

            left = triggerRect.left + (triggerRect.width / 2) - (tooltipRect.width / 2) + window.scrollX;

            if (left < 0) left = 5;
            else if (left + tooltipRect.width > window.innerWidth) left = window.innerWidth - tooltipRect.width - 5;
            
            tooltipElement.style.top = `${top}px`;
            tooltipElement.style.left = `${left}px`;
            
            tooltipElement.classList.add('visible');
            tooltipElement.setAttribute('aria-hidden', 'false');
            activeTooltipTrigger = trigger; 
        });

        trigger.addEventListener('mouseleave', () => {
            hideTooltip(trigger);
        });
        
        trigger.addEventListener('focus', () => {
            trigger.dispatchEvent(new MouseEvent('mouseenter', { bubbles: true }));
        });

        trigger.addEventListener('blur', (event) => {
             if (!tooltipElement || !event.relatedTarget || !tooltipElement.contains(event.relatedTarget)) {
                hideTooltip(trigger);
            }
        });

        trigger.addEventListener('click', () => {
            hideTooltip(trigger); 
        });
    });

    document.addEventListener('click', function(event) {
        if (activeTooltipTrigger && tooltipElement && tooltipElement.classList.contains('visible')) {
            if (!activeTooltipTrigger.contains(event.target) && !tooltipElement.contains(event.target)) {
                hideTooltip(activeTooltipTrigger);
            }
        }
    });

    // Hide tooltip if window loses focus or tab becomes hidden
    window.addEventListener('blur', () => {
        if (activeTooltipTrigger) {
            hideTooltip(activeTooltipTrigger);
        }
    });

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden' && activeTooltipTrigger) {
            hideTooltip(activeTooltipTrigger);
        }
    });
});
