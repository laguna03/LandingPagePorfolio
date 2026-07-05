/* =============================================
   LANDING PAGE PORTFOLIO — script.js
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------------------
       NAVBAR — scroll effect + mobile menu
    ------------------------------------------- */
    const navbar  = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    /* -------------------------------------------
       SCROLL REVEAL
    ------------------------------------------- */
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                // Stagger cards inside a grid
                const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
                const index = siblings.indexOf(entry.target);
                const delay = index * 80;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, delay);
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => revealObserver.observe(el));

    /* -------------------------------------------
       ANIMATED STAT COUNTERS
    ------------------------------------------- */
    const statNums = document.querySelectorAll('.stat-num');

    const countObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                countObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    statNums.forEach(el => countObserver.observe(el));

    function animateCounter(el) {
        const target = parseInt(el.dataset.target, 10);
        const duration = 1800;
        const start = performance.now();

        function update(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }
        requestAnimationFrame(update);
    }

    /* -------------------------------------------
       PORTFOLIO FILTER TABS
    ------------------------------------------- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const cards   = document.querySelectorAll('.portfolio-card');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active tab
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            cards.forEach(card => {
                if (filter === 'all' || card.dataset.filter === filter) {
                    card.classList.remove('hidden');
                    // Re-trigger reveal animation
                    card.classList.remove('visible');
                    setTimeout(() => card.classList.add('visible'), 30);
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });

    /* -------------------------------------------
       CONTACT FORM — simple UX feedback
    ------------------------------------------- */
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;

            // Loading state
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.9s linear infinite">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Enviando...
            `;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';

            // Simulate send (replace with your backend / Formspree / EmailJS)
            setTimeout(() => {
                contactForm.innerHTML = `
                    <div class="form-success" style="display:block">
                        🎉 ¡Mensaje enviado! Te respondo en menos de 24 horas.
                    </div>
                `;
            }, 1800);
        });
    }

    /* -------------------------------------------
       SMOOTH ANCHOR LINKS (offset for fixed nav)
    ------------------------------------------- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            const navHeight = navbar.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 16;
            window.scrollTo({ top, behavior: 'smooth' });
        });
    });

    /* -------------------------------------------
       ACTIVE NAV LINK HIGHLIGHTING on scroll
    ------------------------------------------- */
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links .nav-link:not(.nav-cta)');

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navAnchors.forEach(a => {
                    a.style.color = '';
                    if (a.getAttribute('href') === `#${entry.target.id}`) {
                        a.style.color = 'var(--text-main)';
                    }
                });
            }
        });
    }, { threshold: 0.4 });

    sections.forEach(s => sectionObserver.observe(s));

    /* -------------------------------------------
       CURSOR GLOW (subtle, on desktop only)
    ------------------------------------------- */
    if (window.innerWidth > 768) {
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed;
            width: 280px;
            height: 280px;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle, rgba(124,77,255,0.07) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            transition: left 0.12s ease, top 0.12s ease;
            z-index: 0;
            will-change: left, top;
        `;
        document.body.appendChild(glow);

        document.addEventListener('mousemove', e => {
            glow.style.left = e.clientX + 'px';
            glow.style.top  = e.clientY + 'px';
        });
    }

    /* -------------------------------------------
       SPIN KEYFRAME (for loader icon)
    ------------------------------------------- */
    const style = document.createElement('style');
    style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
    document.head.appendChild(style);

});
