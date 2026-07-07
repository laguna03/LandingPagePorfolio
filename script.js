/* =============================================
   LANDING PAGE PORTFOLIO — script.js
   ============================================= */

/* -------------------------------------------
   TRANSLATIONS
------------------------------------------- */
const translations = {
    es: {
        'nav.work': 'Trabajos',
        'nav.services': 'Servicios',
        'nav.process': 'Proceso',
        'nav.pricing': 'Precios',
        'nav.cta': 'Iniciar Proyecto',
        'hero.title1': 'Landing Pages Que',
        'hero.title2': 'Convierten Visitas',
        'hero.title3': 'en Clientes',
        'hero.subtitle': 'Diseño y construyo landing pages de alta conversión para negocios que quieren crecer. Entrega rápida. Resultados reales. Diseño 100% personalizado.',
        'hero.btn1': 'Ver Mi Trabajo',
        'hero.btn2': 'Cotización Gratis',
        'hero.proof': 'clientes satisfechos',
        'stats.projects': 'Proyectos Entregados',
        'stats.satisfaction': 'Clientes Satisfechos',
        'stats.days_sym': 'días',
        'stats.delivery': 'Entrega Promedio',
        'stats.conversions': 'Más Conversiones',
        'services.tag': 'Lo Que Ofrezco',
        'services.title': 'Todo Lo Que Necesitas Para',
        'services.title2': 'Convertir y Crecer',
        'services.subtitle': 'Cada landing page se construye con un solo objetivo en mente: convertir tus visitas en clientes reales.',
        'services.s1.title': 'Diseño de Alta Conversión',
        'services.s1.desc': 'Cada elemento está colocado estratégicamente para guiar al visitante a tomar acción. Sin relleno, solo resultados que mueven la aguja.',
        'services.s2.title': '100% Responsive (Móvil)',
        'services.s2.desc': 'Más del 70% del tráfico es móvil. Tu página se verá perfecta en cualquier dispositivo y tamaño de pantalla, garantizado.',
        'services.s3.title': 'Entrega en 3–5 Días Hábiles',
        'services.s3.desc': 'Sin esperas interminables. Tu landing page profesional lista y en vivo en tan solo 3 a 5 días hábiles desde que recibo el depósito.',
        'services.s4.title': 'Optimizada para SEO',
        'services.s4.desc': 'Construida con código limpio y semántico bajo las mejores prácticas de SEO para que los motores de búsqueda puedan encontrarte fácilmente.',
        'services.s5.title': 'Diseño 100% Personalizado',
        'services.s5.desc': 'Cero plantillas. Cada página es diseñada desde cero, adaptada a tu marca, tu audiencia y tus objetivos de negocio.',
        'services.s6.title': 'Soporte Post-Lanzamiento',
        'services.s6.desc': 'El lanzamiento es solo el comienzo. Ofrezco soporte continuo para que tu página siga funcionando al máximo nivel.',
        'portfolio.tag': 'Mi Trabajo',
        'portfolio.title': 'Diseños Que ',
        'portfolio.title2': 'Hablan Por Sí Solos',
        'portfolio.subtitle': 'Una combinación de proyectos reales para clientes y diseños de ejemplo — cada uno construido para impresionar y convertir.',
        'portfolio.tab.all': 'Todo',
        'portfolio.tab.real': 'Proyectos Reales',
        'portfolio.tab.example': 'Diseños de Ejemplo',
        'portfolio.viewproject': 'Ver Proyecto',
        'portfolio.viewdesign': 'Ver Diseño',
        'portfolio.realbadge': 'Negocio Real',
        'portfolio.examplebadge': 'Diseño de Ejemplo',
        'process.tag': 'Cómo Funciona',
        'process.title': 'Proceso Simple,',
        'process.title2': 'Resultados Extraordinarios',
        'process.subtitle': 'Cinco pasos claros desde cero hasta tu landing page en vivo que convierte.',
        'process.s1.title': 'Formulario del Cliente',
        'process.s1.desc': 'Llenas el formulario de información del negocio. Es obligatorio para iniciar — define todo: objetivos, servicios, estilo visual y más.',
        'process.s2.title': 'Depósito Inicial',
        'process.s2.desc': 'Una vez recibido el formulario completo, realizas el pago del 50% ($90). El tiempo de entrega comienza en ese momento.',
        'process.s3.title': 'Diseño y Desarrollo',
        'process.s3.desc': 'Diseño y programo tu landing page desde cero en 3 a 5 días hábiles. Recibirás un preview para revisión antes del lanzamiento.',
        'process.s4.title': 'Revisiones y Ajustes',
        'process.s4.desc': 'Revisamos juntos, aplicamos los ajustes finales según la política de revisiones. Tu opinión es parte del proceso.',
        'process.s5.title': 'Pago Final y Lanzamiento',
        'process.s5.desc': 'Realizas el pago del segundo 50% ($90) y tu página sale en vivo. Listo para recibir clientes.',
        'testimonials.tag': 'Opiniones',
        'testimonials.title': 'Lo Que Dicen ',
        'testimonials.title2': 'Mis Clientes',
        'pricing.tag': 'Inversión',
        'pricing.title': 'Precio Simple y ',
        'pricing.title2': 'Transparente',
        'pricing.subtitle': 'Sin costos ocultos. Sin sorpresas. Solo resultados.',
        'pricing.badge': 'Landing Page Completa',
        'pricing.name': 'Tu Landing Page Profesional',
        'pricing.period': 'pago total (en 2 partes)',
        'pricing.split1': 'Al iniciar',
        'pricing.split2': 'Al entregar',
        'pricing.cta': 'Iniciar Mi Proyecto',
        'contact.tag': 'Trabajemos Juntos',
        'contact.title': '¿Listo para una Landing Page Que',
        'contact.title2': 'Realmente Convierte?',
        'contact.subtitle': 'Cuéntame sobre tu proyecto y te respondo en menos de 24 horas con un plan personalizado.',
        'contact.perk1': 'Consulta gratuita',
        'contact.perk2': 'Cotización personalizada en 24h',
        'contact.perk3': 'Sin compromiso',
        'contact.f.name': 'Tu Nombre',
        'contact.f.name_ph': 'Juan Pérez',
        'contact.f.phone': 'WhatsApp / Teléfono',
        'contact.f.business': 'Nombre del Negocio',
        'contact.f.business_ph': 'Mi Negocio Increíble',
        'contact.f.email': 'Email (opcional)',
        'contact.f.message': 'Cuéntame sobre tu proyecto',
        'contact.f.message_ph': 'Describe tu negocio, tus objetivos y cualquier idea que tengas para tu landing page...',
        'contact.f.send': 'Enviar Mensaje',
        'contact.success': 'Mensaje enviado. Te respondo en menos de 24 horas.',
        'footer.tagline': 'Landing pages de alta conversión para negocios que quieren crecer.',
        'footer.nav': 'Navegación',
        'footer.contact': 'Contáctame',
        'footer.available': 'Disponible en todo el mundo',
    },
    en: {
        'nav.work': 'Work',
        'nav.services': 'Services',
        'nav.process': 'Process',
        'nav.pricing': 'Pricing',
        'nav.cta': 'Start a Project',
        'hero.title1': 'Landing Pages That',
        'hero.title2': 'Turn Visitors Into',
        'hero.title3': 'Customers',
        'hero.subtitle': 'I design and build high-converting landing pages for ambitious businesses. Fast delivery. Real results. 100% custom design.',
        'hero.btn1': 'See My Work',
        'hero.btn2': 'Get a Free Quote',
        'hero.proof': 'happy clients',
        'stats.projects': 'Projects Delivered',
        'stats.satisfaction': 'Client Satisfaction',
        'stats.days_sym': 'days',
        'stats.delivery': 'Avg. Delivery Time',
        'stats.conversions': 'More Conversions',
        'services.tag': 'What I Offer',
        'services.title': 'Everything You Need To',
        'services.title2': 'Convert & Grow',
        'services.subtitle': 'Every landing page is built with one goal in mind: turning your visitors into real paying customers.',
        'services.s1.title': 'High-Converting Design',
        'services.s1.desc': 'Every element is strategically placed to guide visitors toward action. No fluff, just results that move the needle.',
        'services.s2.title': '100% Mobile Responsive',
        'services.s2.desc': 'Over 70% of traffic is mobile. Your page will look flawless on every device and screen size, guaranteed.',
        'services.s3.title': '3–5 Business Day Delivery',
        'services.s3.desc': 'No lengthy waiting periods. Your professional landing page live in as little as 3–5 business days from deposit.',
        'services.s4.title': 'SEO Optimized',
        'services.s4.desc': 'Built with clean, semantic code and best SEO practices so search engines can find and rank you easily.',
        'services.s5.title': '100% Custom Design',
        'services.s5.desc': 'Zero templates. Every page is designed from scratch, tailored to your brand, audience, and business goals.',
        'services.s6.title': 'Post-Launch Support',
        'services.s6.desc': 'Launch is just the beginning. I offer ongoing support to keep your page performing at its absolute best.',
        'portfolio.tag': 'My Work',
        'portfolio.title': 'Designs That ',
        'portfolio.title2': 'Speak for Themselves',
        'portfolio.subtitle': 'A mix of real client projects and example concepts — each one built to impress and convert.',
        'portfolio.tab.all': 'All Work',
        'portfolio.tab.real': 'Real Projects',
        'portfolio.tab.example': 'Example Designs',
        'portfolio.viewproject': 'View Project',
        'portfolio.viewdesign': 'View Design',
        'portfolio.realbadge': 'Real Business',
        'portfolio.examplebadge': 'Example Design',
        'process.tag': 'How It Works',
        'process.title': 'Simple Process,',
        'process.title2': 'Extraordinary Results',
        'process.subtitle': 'Five clear steps from zero to a live landing page that converts.',
        'process.s1.title': 'Client Form',
        'process.s1.desc': 'You fill out the business info form. It is required to start — it defines everything: goals, services, visual style and more.',
        'process.s2.title': 'Initial Deposit',
        'process.s2.desc': 'Once the completed form is received, you make the 50% payment ($90). Delivery time starts from that moment.',
        'process.s3.title': 'Design & Development',
        'process.s3.desc': 'I design and code your landing page from scratch in 3–5 business days. You will receive a preview to review before launch.',
        'process.s4.title': 'Revisions & Adjustments',
        'process.s4.desc': 'We review together, apply final adjustments per the revision policy. Your feedback is part of the process.',
        'process.s5.title': 'Final Payment & Launch',
        'process.s5.desc': 'You make the second 50% payment ($90) and your page goes live. Ready to receive clients.',
        'testimonials.tag': 'Testimonials',
        'testimonials.title': 'What My ',
        'testimonials.title2': 'Clients Say',
        'pricing.tag': 'Investment',
        'pricing.title': 'Simple, Transparent ',
        'pricing.title2': 'Pricing',
        'pricing.subtitle': 'No hidden fees. No surprises. Just results.',
        'pricing.badge': 'Full Landing Page',
        'pricing.name': 'Your Professional Landing Page',
        'pricing.period': 'total (paid in 2 parts)',
        'pricing.split1': 'To start',
        'pricing.split2': 'On delivery',
        'pricing.cta': 'Start My Project',
        'contact.tag': "Let's Work Together",
        'contact.title': 'Ready for a Landing Page That',
        'contact.title2': 'Actually Converts?',
        'contact.subtitle': 'Tell me about your project and I will respond within 24 hours with a custom plan.',
        'contact.perk1': 'Free consultation',
        'contact.perk2': 'Custom quote in 24h',
        'contact.perk3': 'No commitment required',
        'contact.f.name': 'Your Name',
        'contact.f.name_ph': 'John Smith',
        'contact.f.phone': 'WhatsApp / Phone',
        'contact.f.business': 'Business Name',
        'contact.f.business_ph': 'My Awesome Business',
        'contact.f.email': 'Email (optional)',
        'contact.f.message': 'Tell me about your project',
        'contact.f.message_ph': 'Describe your business, goals, and any ideas you have for your landing page...',
        'contact.f.send': 'Send Message',
        'contact.success': 'Message sent. I will get back to you within 24 hours.',
        'footer.tagline': 'High-converting landing pages for businesses ready to grow.',
        'footer.nav': 'Quick Links',
        'footer.contact': 'Get In Touch',
        'footer.available': 'Available worldwide',
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
    const t = translations[lang];
    // Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    // html lang attribute
    document.documentElement.lang = lang;
    // Toggle button state
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    /* -------------------------------------------
       LANGUAGE TOGGLE
    ------------------------------------------- */
    applyTranslations(currentLang);

    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    });

    /* -------------------------------------------
       IFRAME PREVIEWS — scale to fit card
    ------------------------------------------- */
    function scaleIframes() {
        document.querySelectorAll('.iframe-card').forEach(card => {
            const iframe = card.querySelector('.site-iframe');
            if (!iframe) return;
            // Scale based on card width vs iframe rendered width (1280px)
            const scale = card.offsetWidth / 1280;
            iframe.style.transform = `scale(${scale})`;
            // Set iframe height so scaled content fills the card height
            iframe.style.height = (card.offsetHeight / scale) + 'px';
        });
    }

    scaleIframes();
    window.addEventListener('resize', scaleIframes);

    // Hide skeleton and show iframe once loaded
    document.querySelectorAll('.site-iframe').forEach(iframe => {
        const skeleton = iframe.previousElementSibling;
        iframe.addEventListener('load', () => {
            iframe.classList.add('loaded');
            if (skeleton && skeleton.classList.contains('iframe-skeleton')) {
                skeleton.classList.add('hidden');
            }
        });
    });

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
