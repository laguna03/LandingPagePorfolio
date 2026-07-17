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
        'hero.subtitle': 'Diseñamos y construimos landing pages de alta conversión para negocios que quieren crecer. Entrega rápida. Resultados reales. Diseño 100% personalizado.',
        'hero.btn1': 'Ver Nuestro Trabajo',
        'hero.btn2': 'Cotización Gratis',
        'hero.proof': 'clientes satisfechos',
        'stats.projects': 'Proyectos Entregados',
        'stats.satisfaction': 'Clientes Satisfechos',
        'stats.days_sym': 'días',
        'stats.delivery': 'Entrega Promedio',
        'stats.conversions': 'Más Conversiones',
        'services.tag': 'Lo Que Ofrecemos',
        'services.title': 'Todo Lo Que Necesitas Para',
        'services.title2': 'Convertir y Crecer',
        'services.subtitle': 'Cada landing page se construye con un solo objetivo en mente: convertir tus visitas en clientes reales.',
        'services.s1.title': 'Diseño de Alta Conversión',
        'services.s1.desc': 'Cada elemento está colocado estratégicamente para guiar al visitante a tomar acción. Sin relleno, solo resultados que mueven la aguja.',
        'services.s2.title': '100% Responsive (Móvil)',
        'services.s2.desc': 'Más del 70% del tráfico es móvil. Tu página se verá perfecta en cualquier dispositivo y tamaño de pantalla, garantizado.',
        'services.s3.title': 'Entrega en 3–5 Días Hábiles',
        'services.s3.desc': 'Sin esperas interminables. Tu landing page profesional lista y en vivo en tan solo 3 a 5 días hábiles desde que recibimos el depósito.',
        'services.s4.title': 'Optimizada para SEO',
        'services.s4.desc': 'Construida con código limpio y semántico bajo las mejores prácticas de SEO para que los motores de búsqueda puedan encontrarte fácilmente.',
        'services.s5.title': 'Diseño 100% Personalizado',
        'services.s5.desc': 'Cero plantillas. Cada página es diseñada desde cero, adaptada a tu marca, tu audiencia y tus objetivos de negocio.',
        'services.s6.title': 'Soporte Post-Lanzamiento',
        'services.s6.desc': 'El lanzamiento es solo el comienzo. Ofrecemos soporte continuo para que tu página siga funcionando al máximo nivel.',
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
        'portfolio.swipe': 'Desliza para ver más',
        'process.tag': 'Cómo Funciona',
        'process.title': 'Proceso Simple,',
        'process.title2': 'Resultados Extraordinarios',
        'process.subtitle': 'Cinco pasos claros desde cero hasta tu landing page en vivo que convierte.',
        'process.s1.title': 'Formulario del Cliente',
        'process.s1.desc': 'Llenas el formulario de información del negocio. Es obligatorio para iniciar — define todo: objetivos, servicios, estilo visual y más.',
        'process.s2.title': 'Depósito Inicial',
        'process.s2.desc': 'Una vez recibido el formulario completo, realizas el pago del 50% ($90). El tiempo de entrega comienza en ese momento.',
        'process.s3.title': 'Diseño y Desarrollo',
        'process.s3.desc': 'Diseñamos y programamos tu landing page desde cero en 3 a 5 días hábiles. Recibirás un preview para revisión antes del lanzamiento.',
        'process.s4.title': 'Revisiones y Ajustes',
        'process.s4.desc': 'Revisamos juntos, aplicamos los ajustes finales según la política de revisiones. Tu opinión es parte del proceso.',
        'process.s5.title': 'Pago Final y Lanzamiento',
        'process.s5.desc': 'Realizas el pago del segundo 50% ($90) y tu página sale en vivo. Listo para recibir clientes.',
        'testimonials.tag': 'Opiniones',
        'testimonials.title': 'Lo Que Dicen ',
        'testimonials.title2': 'Nuestros Clientes',
        'pricing.tag': 'Inversión',
        'pricing.title': 'Precio Simple y ',
        'pricing.title2': 'Transparente',
        'pricing.subtitle': 'Sin costos ocultos. Sin sorpresas. Solo resultados.',
        'pricing.badge': 'Landing Page Completa',
        'pricing.name': 'Tu Landing Page Profesional',
        'pricing.period': 'pago total (en 2 partes)',
        'pricing.split1': 'Al iniciar',
        'pricing.split2': 'Al entregar',
        'pricing.cta': 'Iniciar Proyecto',
        'contact.tag': 'Trabajemos Juntos',
        'contact.title': '¿Listo para una Landing Page Que',
        'contact.title2': 'Realmente Convierte?',
        'contact.subtitle': 'Cuéntanos sobre tu proyecto y te respondemos en menos de 24 horas con un plan personalizado.',
        'contact.perk1': 'Consulta gratuita',
        'contact.perk2': 'Cotización personalizada en 24h',
        'contact.perk3': 'Sin compromiso',
        'contact.f.name': 'Tu Nombre',
        'contact.f.name_ph': 'Juan Pérez',
        'contact.f.phone': 'WhatsApp / Teléfono',
        'contact.f.business': 'Nombre del Negocio',
        'contact.f.business_ph': 'Mi Negocio Increíble',
        'contact.f.email': 'Email',
        'contact.f.message': 'Cuéntanos sobre tu proyecto',
        'contact.f.message_ph': 'Describe tu negocio, tus objetivos y cualquier idea que tengas para tu landing page...',
        'contact.f.send': 'Enviar Mensaje',
        'contact.success': 'Mensaje enviado. Te respondemos en menos de 24 horas.',
        'footer.tagline': 'Landing pages de alta conversión para negocios que quieren crecer.',
        'footer.nav': 'Navegación',
        'footer.contact': 'Contáctanos',
        'footer.available': 'Disponible en todo el mundo',
        'footer.nav.work': 'Trabajos',
        'footer.nav.services': 'Servicios',
        'footer.nav.process': 'Proceso',
        'footer.nav.pricing': 'Precios',
        'footer.nav.contact': 'Contacto',
        'footer.rights': '© 2026 LAGVNSoftware. Todos los derechos reservados.',
        'footer.credit': 'Powered by LAGVNSoftware.',
        'hero.badge1': 'Tasa de conversión',
        'hero.badge2_num': '3-5 días',
        'hero.badge2': 'Tiempo de entrega',
        'portfolio.c2.desc': 'Página web personal para Luis, entrenador fitness, diseñada para atraer nuevos clientes y mostrar sus servicios de entrenamiento profesional.',
        'portfolio.c3.desc': 'Página de agencia inmobiliaria que triplicó las consultas de clientes calificados por semana.',
        'portfolio.c4.desc': 'Concepto de página SaaS enfocado en la claridad de funciones y una conversión sin fricción.',
        'portfolio.c5.desc': 'Concepto de marca de moda premium con visuales audaces y una experiencia de compra fluida.',
        'portfolio.c6.desc': 'Página de agencia creativa diseñada para captar atención y convertir visitantes en leads al instante.',
        'portfolio.c7.desc': 'Landing page para una plataforma de reseñas y recomendaciones de películas.',
        'testimonials.q1': '"LAGVNSoftware entregó una landing page increíble en solo 4 días. Nuestras reservas en línea aumentaron significativamente en la primera semana. ¡Valió cada centavo!"',
        'testimonials.q2': '"El diseño nos dejó sin palabras. Se ve exactamente como las grandes cadenas de gimnasios pero es 100% nuestro. Los registros han estado por las nubes desde que lanzamos."',
        'testimonials.q3': '"La página que LAGVNSoftware creó para MovieSquad es espectacular. El diseño es moderno, atractivo y ha recibido muchísimas visitas y comentarios positivos. ¡Totalmente recomendados!"',
        'testimonials.a1.role': 'Dueño, Caribe Industries Supply Corp.',
        'testimonials.a2.role': 'Entrenador, Vyron Training',
        'testimonials.a3.role': 'Creador, MovieSquad',
        'pricing.f1': 'Landing page de una sola sección',
        'pricing.f2': 'Diseño 100% personalizado',
        'pricing.f3': '100% responsive (móvil)',
        'pricing.f4': 'Formulario de contacto / leads',
        'pricing.f5': 'Botón de WhatsApp integrado',
        'pricing.f6': 'Optimización básica SEO',
        'pricing.f7': 'Entrega en 3 a 5 días hábiles',
        'pricing.f8': 'Revisiones incluidas',
        'pricing.c1.title': 'Formulario obligatorio',
        'pricing.c1.desc': 'El proyecto inicia una vez recibido el formulario de información completo y el depósito del 50%.',
        'pricing.c2.title': 'Tiempo de entrega',
        'pricing.c2.desc': '3 a 5 días hábiles contados desde la recepción del depósito y la información completa del cliente.',
        'pricing.c3.title': 'Revisiones y cambios',
        'pricing.c3.desc': 'Se aplica la política de revisiones acordada. Cambios mayores fuera del alcance pueden tener costo adicional.',
        'pricing.c4.title': 'Estructura de pago',
        'pricing.c4.desc': '50% al iniciar ($90) + 50% al entregar ($90). Sin costos ocultos.',
        'contact.f.sending': 'Enviando...',
        'site.title': 'LAGVNSoftware. | Landing Pages de Alta Conversión',
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
        'hero.subtitle': 'We design and build high-converting landing pages for ambitious businesses. Fast delivery. Real results. 100% custom design.',
        'hero.btn1': 'See Our Work',
        'hero.btn2': 'Get a Free Quote',
        'hero.proof': 'happy clients',
        'stats.projects': 'Projects Delivered',
        'stats.satisfaction': 'Client Satisfaction',
        'stats.days_sym': 'days',
        'stats.delivery': 'Avg. Delivery Time',
        'stats.conversions': 'More Conversions',
        'services.tag': 'What We Offer',
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
        'services.s6.desc': 'Launch is just the beginning. We offer ongoing support to keep your page performing at its absolute best.',
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
        'portfolio.swipe': 'Slide to see more',
        'process.tag': 'How It Works',
        'process.title': 'Simple Process,',
        'process.title2': 'Extraordinary Results',
        'process.subtitle': 'Five clear steps from zero to a live landing page that converts.',
        'process.s1.title': 'Client Form',
        'process.s1.desc': 'You fill out the business info form. It is required to start — it defines everything: goals, services, visual style and more.',
        'process.s2.title': 'Initial Deposit',
        'process.s2.desc': 'Once the completed form is received, you make the 50% payment ($90). Delivery time starts from that moment.',
        'process.s3.title': 'Design & Development',
        'process.s3.desc': 'We design and code your landing page from scratch in 3–5 business days. You will receive a preview to review before launch.',
        'process.s4.title': 'Revisions & Adjustments',
        'process.s4.desc': 'We review together, apply final adjustments per the revision policy. Your feedback is part of the process.',
        'process.s5.title': 'Final Payment & Launch',
        'process.s5.desc': 'You make the second 50% payment ($90) and your page goes live. Ready to receive clients.',
        'testimonials.tag': 'Testimonials',
        'testimonials.title': 'What Our ',
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
        'pricing.cta': 'Start Project',
        'contact.tag': "Let's Work Together",
        'contact.title': 'Ready for a Landing Page That',
        'contact.title2': 'Actually Converts?',
        'contact.subtitle': 'Tell us about your project and we will respond within 24 hours with a custom plan.',
        'contact.perk1': 'Free consultation',
        'contact.perk2': 'Custom quote in 24h',
        'contact.perk3': 'No commitment required',
        'contact.f.name': 'Your Name',
        'contact.f.name_ph': 'John Smith',
        'contact.f.phone': 'WhatsApp / Phone',
        'contact.f.business': 'Business Name',
        'contact.f.business_ph': 'My Awesome Business',
        'contact.f.email': 'Email',
        'contact.f.message': 'Tell us about your project',
        'contact.f.message_ph': 'Describe your business, goals, and any ideas you have for your landing page...',
        'contact.f.send': 'Send Message',
        'contact.success': 'Message sent. We will get back to you within 24 hours.',
        'footer.tagline': 'High-converting landing pages for businesses ready to grow.',
        'footer.nav': 'Quick Links',
        'footer.contact': 'Contact Us',
        'footer.available': 'Available worldwide',
        'footer.nav.work': 'Work',
        'footer.nav.services': 'Services',
        'footer.nav.process': 'Process',
        'footer.nav.pricing': 'Pricing',
        'footer.nav.contact': 'Contact',
        'footer.rights': '© 2026 LAGVNSoftware. All rights reserved.',
        'footer.credit': 'Powered by LAGVNSoftware.',
        'hero.badge1': 'Conversion rate',
        'hero.badge2_num': '3-5 days',
        'hero.badge2': 'Delivery time',
        'portfolio.c2.desc': 'Personal website for Luis, fitness trainer, designed to attract new clients and showcase his professional training services.',
        'portfolio.c3.desc': 'Real estate agency page that tripled qualified client inquiries per week.',
        'portfolio.c4.desc': 'SaaS landing page concept focused on feature clarity and frictionless conversion.',
        'portfolio.c5.desc': 'Premium fashion brand concept with bold visuals and a smooth shopping experience.',
        'portfolio.c6.desc': 'Creative agency page designed to capture attention and convert visitors into leads instantly.',
        'portfolio.c7.desc': 'Landing page for a movie review and recommendation platform.',
        'testimonials.q1': '"LAGVNSoftware delivered an incredible landing page in just 4 days. Our online bookings increased significantly in the first week. Worth every penny!"',
        'testimonials.q2': '"The design blew us away. It looks just like a major gym chain but it\'s 100% ours. Sign-ups have been through the roof since we launched."',
        'testimonials.q3': '"The page LAGVNSoftware created for MovieSquad is spectacular. The design is modern, attractive, and has received a huge amount of visits and positive feedback. Highly recommended!"',
        'testimonials.a1.role': 'Owner, Caribe Industries Supply Corp.',
        'testimonials.a2.role': 'Trainer, Vyron Training',
        'testimonials.a3.role': 'Creator, MovieSquad',
        'pricing.f1': 'Single-section landing page',
        'pricing.f2': '100% custom design',
        'pricing.f3': '100% mobile responsive',
        'pricing.f4': 'Contact / leads form',
        'pricing.f5': 'Integrated WhatsApp button',
        'pricing.f6': 'Basic SEO optimization',
        'pricing.f7': 'Delivery in 3–5 business days',
        'pricing.f8': 'Revisions included',
        'pricing.c1.title': 'Required form',
        'pricing.c1.desc': 'The project starts once the complete business info form and the 50% deposit are received.',
        'pricing.c2.title': 'Delivery time',
        'pricing.c2.desc': '3–5 business days counted from receipt of deposit and complete client information.',
        'pricing.c3.title': 'Revisions & changes',
        'pricing.c3.desc': 'The agreed revision policy applies. Major changes outside scope may have an additional cost.',
        'pricing.c4.title': 'Payment structure',
        'pricing.c4.desc': '50% to start ($90) + 50% on delivery ($90). No hidden fees.',
        'contact.f.sending': 'Sending...',
        'site.title': 'LAGVNSoftware. | High-Converting Landing Pages',
    }
};

let currentLang = localStorage.getItem('lang') || 'es';

function applyTranslations(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.documentElement.lang = lang;
    if (t['site.title']) document.title = t['site.title'];
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

document.addEventListener('DOMContentLoaded', () => {

    applyTranslations(currentLang);

    document.getElementById('langToggle').addEventListener('click', () => {
        currentLang = currentLang === 'es' ? 'en' : 'es';
        localStorage.setItem('lang', currentLang);
        applyTranslations(currentLang);
    });

    function scaleIframes() {
        document.querySelectorAll('.iframe-card').forEach(card => {
            const iframe = card.querySelector('.site-iframe');
            if (!iframe) return;
            const scale = card.offsetWidth / 1280;
            iframe.style.transform = `scale(${scale})`;
            iframe.style.height = (card.offsetHeight / scale) + 'px';
        });
    }

    scaleIframes();
    window.addEventListener('resize', scaleIframes);

    document.querySelectorAll('.site-iframe').forEach(iframe => {
        const skeleton = iframe.previousElementSibling;
        iframe.addEventListener('load', () => {
            iframe.classList.add('loaded');
            if (skeleton && skeleton.classList.contains('iframe-skeleton')) {
                skeleton.classList.add('hidden');
            }
        });
    });

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

    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });

    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
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
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target;
        }
        requestAnimationFrame(update);
    }

    // -------------------------------------------
    // PORTFOLIO FILTER TABS (ELIMINADO)
    // -------------------------------------------

    const EMAILJS_SERVICE_ID          = 'service_2fjziv9';
    const EMAILJS_TEMPLATE_ID         = 'template_saxwave';
    const EMAILJS_WELCOME_TEMPLATE_ID = 'template_jeihdy5';

    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if (typeof emailjs === 'undefined') {
                alert('Error: EmailJS no se cargó. Verifica tu conexión a internet.');
                return;
            }

            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalHTML = submitBtn.innerHTML;

            const sendingLabel = translations[currentLang]['contact.f.sending'] || 'Enviando...';
            submitBtn.innerHTML = `
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="animation: spin 0.9s linear infinite">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                ${sendingLabel}
            `;
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.8';

            const formData = {
                from_name : contactForm.querySelector('[name="from_name"]').value.trim(),
                phone     : contactForm.querySelector('[name="phone"]').value.trim(),
                business  : contactForm.querySelector('[name="business"]').value.trim(),
                reply_to  : contactForm.querySelector('[name="reply_to"]').value.trim(),
                message   : contactForm.querySelector('[name="message"]').value.trim(),
            };

            const notifParams = {
                ...formData,
                to_email : 'lagvnsoftware@gmail.com',
                to_name  : 'LAGVNSoftware Team',
            };

            const welcomeParams = {
                ...formData,
                to_email : formData.reply_to,
                to_name  : formData.from_name,
            };

            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, notifParams)
                .then(() => {
                    if (formData.reply_to) {
                        return emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_WELCOME_TEMPLATE_ID, welcomeParams);
                    }
                    return Promise.resolve();
                })
                .then(() => {
                    const successMsg = translations[currentLang]['contact.success'] || 'Mensaje enviado. Te respondemos en menos de 24 horas.';
                    contactForm.innerHTML = `
                        <div class="form-success" style="display:block">
                        ${successMsg}
                        </div>
                    `;
                })
                .catch((error) => {
                    console.error('EmailJS full error:', JSON.stringify(error));
                    submitBtn.innerHTML = originalHTML;
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '';

                    const code   = error?.status ?? '';
                    const text   = error?.text ?? JSON.stringify(error);
                    const detail = `(${code}) ${text}`;

                    const prev = contactForm.querySelector('.form-error-msg');
                    if (prev) prev.remove();
                    const errDiv = document.createElement('p');
                    errDiv.className = 'form-error-msg';
                    errDiv.style.cssText = 'color:#ff4d4d;font-size:0.82rem;margin-top:10px;word-break:break-all;';
                    errDiv.textContent = '⚠️ ' + detail;
                    contactForm.appendChild(errDiv);
                });
        });
    }

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

    const style = document.createElement('style');
    style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
    document.head.appendChild(style);

});
