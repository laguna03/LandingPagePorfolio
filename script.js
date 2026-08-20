/* =============================================
   LANDING PAGE PORTFOLIO — script.js
   (con Liquid Glass 3D + lazy loading)
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
        'hero.title1': 'Soluciones Digitales Que',
        'hero.title2': 'Convierten Visitas',
        'hero.title3': 'en Clientes',
        'hero.subtitle': 'Diseñamos y construimos soluciones web de alta conversión para negocios que quieren crecer. Landing pages, catálogos, tiendas online y más. Diseño 100% personalizado.',
        'hero.btn1': 'Ver Nuestro Trabajo',
        'hero.btn2': 'Cotización Gratis',
        'stats.projects': 'Proyectos Entregados',
        'stats.satisfaction': 'Clientes Satisfechos',
        'stats.days_sym': 'días',
        'stats.delivery': 'Entrega Promedio',
        'stats.conversions': 'Más Conversiones',
        'mobile.swipe': 'Desliza para ver más',
        'web.tag': 'Más Allá de las Landing Pages',
        'web.title': 'Soluciones Web ',
        'web.title2': 'Completas',
        'web.subtitle': 'Desde un catálogo digital hasta una tienda online profesional. Creamos la plataforma digital que tu negocio necesita.',
        'web.card1.title': 'Tiendas Online (E-commerce)',
        'web.card1.desc': 'Creamos tiendas virtuales completas. Carrito de compras, pasarelas de pago y gestión de inventario para que vendas 24/7.',
        'web.card2.title': 'Catálogos Digitales',
        'web.card2.desc': 'Muestra tus productos de forma elegante y organizada. Perfecto para negocios B2B o marcas que quieren exhibir su portafolio.',
        'web.card3.title': 'Portales y Plataformas Web',
        'web.card3.desc': 'Sistemas web personalizados, paneles de administración, áreas de miembros y portales internos para gestionar tu negocio.',
        'web.card4.title': 'Mantenimiento y Soporte',
        'web.card4.desc': 'El lanzamiento es solo el comienzo. Ofrecemos soporte continuo, actualizaciones de seguridad y mejoras para tu sitio web.',
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
        'portfolio.subtitle': 'Landing pages, tiendas online, catálogos y sistemas web — cada uno construido para impresionar y convertir.',
        'portfolio.tab.all': 'Todo',
        'portfolio.tab.real': 'Proyectos Reales',
        'portfolio.tab.example': 'Diseños de Ejemplo',
        'portfolio.category.landing': 'Landing Pages',
        'portfolio.category.ecommerce': 'Tiendas Online & Catálogos',
        'portfolio.category.systems': 'Sistemas Web & POS',
        'portfolio.viewproject': 'Ver Proyecto',
        'portfolio.viewdesign': 'Ver Diseño',
        'portfolio.realbadge': 'Negocio Real',
        'portfolio.examplebadge': 'Diseño de Ejemplo',
        'portfolio.swipe': 'Desliza para ver más',
        'portfolio.c1.title': 'Caribe Industries Supply Corp.',
        'portfolio.c1.desc': 'Distribuidora industrial en Puerto Rico especializada en materiales eléctricos, plomería, iluminación y ferretería de alto rendimiento.',
        'portfolio.c2.title': 'Vyron Training',
        'portfolio.c2.desc': 'Página web personal para Luis, entrenador fitness, diseñada para atraer nuevos clientes y mostrar sus servicios de entrenamiento profesional.',
        'portfolio.c7.title': 'MovieSquad',
        'portfolio.c7.desc': 'Landing page para una plataforma de reseñas y recomendaciones de películas.',
        'portfolio.c8.title': 'Tienda Online',
        'portfolio.c8.desc': 'Solución completa de e-commerce con pasarela de pago y carrito de compras.',
        'portfolio.c9.title': 'Catálogo Digital',
        'portfolio.c9.desc': 'Sistema de catálogo con filtros inteligentes y gestión de productos optimizada.',
        'portfolio.c10.title': 'Sistema Web POS',
        'portfolio.c10.desc': 'Panel de administración, control de inventario y gestión de ventas en tiempo real.',
        'portfolio.c3.title': 'Sunset Realty Group',
        'portfolio.c3.desc': 'Página de agencia inmobiliaria que triplicó las consultas de clientes calificados por semana.',
        'portfolio.c4.title': 'Flowbase SaaS',
        'portfolio.c4.desc': 'Concepto de página SaaS enfocado en la claridad de funciones y una conversión sin fricción.',
        'portfolio.c5.title': 'Luxe Boutique',
        'portfolio.c5.desc': 'Concepto de marca de moda premium con visuales audaces y una experiencia de compra fluida.',
        'portfolio.c6.title': 'Spark Creative Agency',
        'portfolio.c6.desc': 'Página de agencia creativa diseñada para captar atención y convertir visitantes en leads al instante.',
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
        'pricing.badge': 'Oferta Landing Page',
        'pricing.name': 'Tu Landing Page Profesional',
        'pricing.period': 'pago total (en 2 partes)',
        'pricing.split1': 'Al iniciar',
        'pricing.split2': 'Al entregar',
        'pricing.cta': 'Iniciar Proyecto',
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
        'contact.tag': 'Trabajemos Juntos',
        'contact.title': '¿Listo para tu',
        'contact.title2': 'próximo proyecto web?',
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
        'contact.f.message_ph': 'Describe tu negocio, tus objetivos y cualquier idea que tengas para tu proyecto web...',
        'contact.f.send': 'Enviar Mensaje',
        'contact.success': 'Mensaje enviado. Te respondemos en menos de 24 horas.',
        'footer.tagline': 'Soluciones web de alta conversión para negocios que quieren crecer.',
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
        'testimonials.q1': '"LAGVNSoftware entregó una landing page increíble en solo 4 días. Nuestras reservas en línea aumentaron significativamente en la primera semana. ¡Valió cada centavo!"',
        'testimonials.q2': '"El diseño nos dejó sin palabras. Se ve exactamente como las grandes cadenas de gimnasios pero es 100% nuestro. Los registros han estado por las nubes desde que lanzamos."',
        'testimonials.q3': '"La página que LAGVNSoftware creó para MovieSquad es espectacular. El diseño es moderno, atractivo y ha recibido muchísimas visitas y comentarios positivos. ¡Totalmente recomendados!"',
        'testimonials.a1.role': 'Dueño, Caribe Industries Supply Corp.',
        'testimonials.a2.role': 'Entrenador, Vyron Training',
        'testimonials.a3.role': 'Creador, MovieSquad',
        'contact.f.sending': 'Enviando...',
        'site.title': 'LAGVNSoftware. | Soluciones Web de Alta Conversión',
    },
    en: {
        'nav.work': 'Work',
        'nav.services': 'Services',
        'nav.process': 'Process',
        'nav.pricing': 'Pricing',
        'nav.cta': 'Start a Project',
        'hero.title1': 'Digital Solutions That',
        'hero.title2': 'Turn Visitors Into',
        'hero.title3': 'Customers',
        'hero.subtitle': 'We design and build high-converting web solutions for ambitious businesses. Landing pages, catalogs, online stores, and more. 100% custom design.',
        'hero.btn1': 'See Our Work',
        'hero.btn2': 'Get a Free Quote',
        'stats.projects': 'Projects Delivered',
        'stats.satisfaction': 'Client Satisfaction',
        'stats.days_sym': 'days',
        'stats.delivery': 'Avg. Delivery Time',
        'stats.conversions': 'More Conversions',
        'mobile.swipe': 'Swipe to see more',
        'web.tag': 'Beyond Landing Pages',
        'web.title': 'Complete Web ',
        'web.title2': 'Solutions',
        'web.subtitle': 'From digital catalogs to professional online stores. We build the digital platform your business needs.',
        'web.card1.title': 'Online Stores (E-commerce)',
        'web.card1.desc': 'We create complete virtual stores. Shopping carts, payment gateways, and inventory management for 24/7 sales.',
        'web.card2.title': 'Digital Catalogs',
        'web.card2.desc': 'Showcase your products elegantly and organized. Perfect for B2B businesses or brands displaying their portfolio.',
        'web.card3.title': 'Portals & Web Platforms',
        'web.card3.desc': 'Custom web systems, admin panels, member areas, and internal portals to manage your business.',
        'web.card4.title': 'Maintenance & Support',
        'web.card4.desc': 'Launch is just the beginning. We offer ongoing support, security updates, and improvements for your website.',
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
        'portfolio.subtitle': 'Landing pages, online stores, catalogs, and web systems — each built to impress and convert.',
        'portfolio.tab.all': 'All Work',
        'portfolio.tab.real': 'Real Projects',
        'portfolio.tab.example': 'Example Designs',
        'portfolio.category.landing': 'Landing Pages',
        'portfolio.category.ecommerce': 'Online Stores & Catalogs',
        'portfolio.category.systems': 'Web Systems & POS',
        'portfolio.viewproject': 'View Project',
        'portfolio.viewdesign': 'View Design',
        'portfolio.realbadge': 'Real Business',
        'portfolio.examplebadge': 'Example Design',
        'portfolio.swipe': 'Slide to see more',
        'portfolio.c1.title': 'Caribe Industries Supply Corp.',
        'portfolio.c1.desc': 'Industrial distributor in Puerto Rico specializing in electrical materials, plumbing, lighting, and high-performance hardware.',
        'portfolio.c2.title': 'Vyron Training',
        'portfolio.c2.desc': 'Personal website for Luis, fitness trainer, designed to attract new clients and showcase his professional training services.',
        'portfolio.c7.title': 'MovieSquad',
        'portfolio.c7.desc': 'Landing page for a movie review and recommendation platform.',
        'portfolio.c8.title': 'Online Store',
        'portfolio.c8.desc': 'Complete e-commerce solution with payment gateway and shopping cart.',
        'portfolio.c9.title': 'Digital Catalog',
        'portfolio.c9.desc': 'Catalog system with smart filters and optimized product management.',
        'portfolio.c10.title': 'POS Web System',
        'portfolio.c10.desc': 'Admin panel, inventory control, and real-time sales management.',
        'portfolio.c3.title': 'Sunset Realty Group',
        'portfolio.c3.desc': 'Real estate agency page that tripled qualified client inquiries per week.',
        'portfolio.c4.title': 'Flowbase SaaS',
        'portfolio.c4.desc': 'SaaS landing page concept focused on feature clarity and frictionless conversion.',
        'portfolio.c5.title': 'Luxe Boutique',
        'portfolio.c5.desc': 'Premium fashion brand concept with bold visuals and a smooth shopping experience.',
        'portfolio.c6.title': 'Spark Creative Agency',
        'portfolio.c6.desc': 'Creative agency page designed to capture attention and convert visitors into leads instantly.',
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
        'pricing.badge': 'Landing Page Offer',
        'pricing.name': 'Your Professional Landing Page',
        'pricing.period': 'total (paid in 2 parts)',
        'pricing.split1': 'To start',
        'pricing.split2': 'On delivery',
        'pricing.cta': 'Start Project',
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
        'contact.tag': "Let's Work Together",
        'contact.title': 'Ready for your',
        'contact.title2': 'next web project?',
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
        'contact.f.message_ph': 'Describe your business, goals, and any ideas you have for your web project...',
        'contact.f.send': 'Send Message',
        'contact.success': 'Message sent. We will get back to you within 24 hours.',
        'footer.tagline': 'High-converting web solutions for businesses ready to grow.',
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
        'testimonials.q1': '"LAGVNSoftware delivered an incredible landing page in just 4 days. Our online bookings increased significantly in the first week. Worth every penny!"',
        'testimonials.q2': '"The design blew us away. It looks just like a major gym chain but it\'s 100% ours. Sign-ups have been through the roof since we launched."',
        'testimonials.q3': '"The page LAGVNSoftware created for MovieSquad is spectacular. The design is modern, attractive, and has received a huge amount of visits and positive feedback. Highly recommended!"',
        'testimonials.a1.role': 'Owner, Caribe Industries Supply Corp.',
        'testimonials.a2.role': 'Trainer, Vyron Training',
        'testimonials.a3.role': 'Creator, MovieSquad',
        'contact.f.sending': 'Sending...',
        'site.title': 'LAGVNSoftware. | High-Converting Web Solutions',
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

/* -------------------------------------------
   TODA LA LÓGICA SE EJECUTA CUANDO EL DOM ESTÁ LISTO
------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {

    const scrollHintTargets = ['.testimonials-grid'];
    scrollHintTargets.forEach(selector => {
        const target = document.querySelector(selector);
        if (!target) return;
        const hint = document.createElement('div');
        hint.className = 'mobile-scroll-hint';
        hint.dataset.i18n = 'mobile.swipe';
        target.before(hint);
    });

    const mobileCarousels = [
        '.testimonials-grid',
        '.portfolio-category-wrapper'
    ].map(selector => document.querySelector(selector)).filter(Boolean);

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const carouselStates = new Map();
        const carouselObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                carouselStates.get(entry.target).visible = entry.isIntersecting;
            });
        }, { threshold: 0.35 });

        mobileCarousels.forEach(carousel => {
            carouselStates.set(carousel, { direction: 1, pauseUntil: 0, autoScrollingUntil: 0, visible: false });
            carouselObserver.observe(carousel);
            carousel.addEventListener('pointerdown', () => {
                const state = carouselStates.get(carousel);
                state.pauseUntil = Infinity;
                carousel.classList.remove('auto-scrolling');
            });
            ['pointerup', 'pointercancel', 'pointerleave'].forEach(eventName => {
                carousel.addEventListener(eventName, () => {
                    carouselStates.get(carousel).pauseUntil = performance.now() + 1200;
                });
            });
            carousel.addEventListener('scroll', () => {
                const state = carouselStates.get(carousel);
                if (performance.now() > state.autoScrollingUntil) state.pauseUntil = performance.now() + 1200;
            }, { passive: true });
        });

        let previousFrame = performance.now();
        function autoScrollCarousels(now) {
            const elapsed = Math.min(now - previousFrame, 50);
            previousFrame = now;
            const isMobile = window.matchMedia('(max-width: 768px)').matches;

            if (isMobile && !document.hidden) {
                carouselStates.forEach((state, carousel) => {
                    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
                    if (!state.visible || now < state.pauseUntil || maxScroll <= 0) {
                        carousel.classList.remove('auto-scrolling');
                        return;
                    }

                    const next = carousel.scrollLeft + state.direction * elapsed * 0.012;
                    carousel.classList.add('auto-scrolling');
                    state.autoScrollingUntil = now + 100;
                    carousel.scrollLeft = Math.max(0, Math.min(maxScroll, next));

                    if (carousel.scrollLeft >= maxScroll - 1) state.direction = -1;
                    if (carousel.scrollLeft <= 1) state.direction = 1;
                });
            }
            requestAnimationFrame(autoScrollCarousels);
        }
        requestAnimationFrame(autoScrollCarousels);
    }

    // ---- Aplicar traducciones ----
    applyTranslations(currentLang);

    // ---- Language toggle ----
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('lang', currentLang);
            applyTranslations(currentLang);
        });
    }

    // ---- Navbar ----
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

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

    // ---- Scroll reveal ----
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

    // ---- Stats counter ----
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

    // ---- Lazy loading for iframes ----
    const lazyIframes = document.querySelectorAll('.lazy-iframe');
    const iframeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                const card = iframe.closest('.card-preview');
                const src = card?.dataset.iframeSrc;
                if (src) {
                    iframe.src = src;
                    const skeleton = card.querySelector('.iframe-skeleton');
                    if (skeleton) {
                        iframe.addEventListener('load', () => {
                            skeleton.classList.add('hidden');
                            iframe.classList.add('loaded');
                            // Escalar después de cargar
                            const scale = card.offsetWidth / 1280;
                            iframe.style.transform = `scale(${scale})`;
                            iframe.style.height = (card.offsetHeight / scale) + 'px';
                        });
                    }
                }
                iframeObserver.unobserve(iframe);
            }
        });
    }, { rootMargin: '200px' });
    lazyIframes.forEach(iframe => iframeObserver.observe(iframe));

    // ---- Iframe scaling (para los ya cargados) ----
    function scaleIframes() {
        document.querySelectorAll('.iframe-card .site-iframe.loaded').forEach(iframe => {
            const card = iframe.closest('.iframe-card');
            if (!card) return;
            const scale = card.offsetWidth / 1280;
            iframe.style.transform = `scale(${scale})`;
            iframe.style.height = (card.offsetHeight / scale) + 'px';
        });
    }
    scaleIframes();
    window.addEventListener('resize', scaleIframes);

    // ---- EmailJS ----
    const EMAILJS_SERVICE_ID = 'service_2fjziv9';
    const EMAILJS_TEMPLATE_ID = 'template_saxwave';
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
                from_name: contactForm.querySelector('[name="from_name"]').value.trim(),
                phone: contactForm.querySelector('[name="phone"]').value.trim(),
                business: contactForm.querySelector('[name="business"]').value.trim(),
                reply_to: contactForm.querySelector('[name="reply_to"]').value.trim(),
                message: contactForm.querySelector('[name="message"]').value.trim(),
            };

            const notifParams = {
                ...formData,
                to_email: 'lagvnsoftware@gmail.com',
                to_name: 'LAGVNSoftware Team',
            };
            const welcomeParams = {
                ...formData,
                to_email: formData.reply_to,
                to_name: formData.from_name,
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
                    const code = error?.status ?? '';
                    const text = error?.text ?? JSON.stringify(error);
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

    // ---- Smooth scroll ----
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

    // ---- Active nav link highlight ----
    const sections = document.querySelectorAll('section[id]');
    const navAnchors = document.querySelectorAll('.nav-links .nav-link:not(.nav-cta)');
    const sectionObserver2 = new IntersectionObserver((entries) => {
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
    sections.forEach(s => sectionObserver2.observe(s));

    // ---- Mouse glow (desktop only) ----
    if (window.innerWidth > 768) {
        const glow = document.createElement('div');
        glow.style.cssText = `
            position: fixed;
            width: 280px;
            height: 280px;
            border-radius: 50%;
            pointer-events: none;
            background: radial-gradient(circle, rgba(26,107,255,0.07) 0%, transparent 70%);
            transform: translate(-50%, -50%);
            transition: left 0.12s ease, top 0.12s ease;
            z-index: 0;
            will-change: left, top;
        `;
        document.body.appendChild(glow);
        document.addEventListener('mousemove', e => {
            glow.style.left = e.clientX + 'px';
            glow.style.top = e.clientY + 'px';
        });
    }

    // ---- CSS animation for spinner ----
    const style = document.createElement('style');
    style.textContent = `@keyframes spin { to { transform: rotate(360deg); } }`;
    document.head.appendChild(style);

    // ============================================================
    //  THREE.JS 3D BACKGROUND (solo si THREE está definido)
    // ============================================================
    if (typeof THREE !== 'undefined') {
        (function() {
            'use strict';

            const container = document.getElementById('bg-container');
            if (!container) return;
            const canvas = document.createElement('canvas');
            container.prepend(canvas);

            const scene = new THREE.Scene();
            scene.background = new THREE.Color(0x0b0b1a);
            scene.fog = new THREE.Fog(0x0b0b1a, 8, 20);

            const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.set(0, 2, 8);
            camera.lookAt(0, 0, 0);

            const renderer = new THREE.WebGLRenderer({
                canvas: canvas,
                antialias: true,
                alpha: false
            });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            renderer.toneMapping = THREE.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 1.2;

            // ---- Lights ----
            const ambient = new THREE.AmbientLight(0x1a2a4a, 0.5);
            scene.add(ambient);

            const keyLight = new THREE.DirectionalLight(0x8ab4ff, 1.0);
            keyLight.position.set(4, 6, 4);
            keyLight.castShadow = true;
            keyLight.shadow.mapSize.width = 1024;
            keyLight.shadow.mapSize.height = 1024;
            scene.add(keyLight);

            const fillLight = new THREE.DirectionalLight(0x1A6BFF, 0.6);
            fillLight.position.set(-4, 2, -3);
            scene.add(fillLight);

            const rimLight = new THREE.DirectionalLight(0xfe3280, 0.3);
            rimLight.position.set(-2, -3, 5);
            scene.add(rimLight);

            const pointLight = new THREE.PointLight(0x1A6BFF, 0.8, 12);
            pointLight.position.set(0, 0, 4);
            scene.add(pointLight);

            // ---- Main Objects ----
            const knotGeo = new THREE.TorusKnotGeometry(1.2, 0.4, 180, 24);
            const knotMat = new THREE.MeshPhysicalMaterial({
                color: 0x1A6BFF,
                metalness: 0.3,
                roughness: 0.2,
                clearcoat: 0.8,
                clearcoatRoughness: 0.3,
                emissive: 0x0a2a5a,
                emissiveIntensity: 0.3,
                envMapIntensity: 1.2,
                wireframe: false,
            });
            const knot = new THREE.Mesh(knotGeo, knotMat);
            knot.castShadow = true;
            knot.receiveShadow = true;
            knot.position.y = 0.4;
            scene.add(knot);

            const coreGeo = new THREE.SphereGeometry(0.45, 32, 32);
            const coreMat = new THREE.MeshPhysicalMaterial({
                color: 0xfe3280,
                emissive: 0xfe3280,
                emissiveIntensity: 0.4,
                transparent: true,
                opacity: 0.25,
                roughness: 0.1,
                metalness: 0.0,
            });
            const core = new THREE.Mesh(coreGeo, coreMat);
            core.position.y = 0.4;
            scene.add(core);

            const wireGeo = new THREE.TorusKnotGeometry(1.25, 0.45, 120, 16);
            const wireMat = new THREE.MeshBasicMaterial({
                color: 0x80AFFF,
                wireframe: true,
                transparent: true,
                opacity: 0.12,
            });
            const wire = new THREE.Mesh(wireGeo, wireMat);
            wire.position.y = 0.4;
            scene.add(wire);

            // ---- Particles ----
            const particleCount = 1800;
            const positions = new Float32Array(particleCount * 3);
            const colors = new Float32Array(particleCount * 3);
            const sizes = new Float32Array(particleCount);

            for (let i = 0; i < particleCount; i++) {
                const radius = 2.5 + Math.random() * 4.5;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(2 * Math.random() - 1);

                positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
                positions[i * 3 + 1] = radius * Math.cos(phi) * 0.6 + 0.4;
                positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

                const c = new THREE.Color().setHSL(0.6 + Math.random() * 0.2, 0.8, 0.5 + Math.random() * 0.3);
                colors[i * 3] = c.r;
                colors[i * 3 + 1] = c.g;
                colors[i * 3 + 2] = c.b;

                sizes[i] = 0.02 + Math.random() * 0.06;
            }

            const particleGeo = new THREE.BufferGeometry();
            particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
            particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
            particleGeo.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

            const particleMat = new THREE.PointsMaterial({
                size: 0.06,
                vertexColors: true,
                transparent: true,
                opacity: 0.7,
                blending: THREE.AdditiveBlending,
                depthWrite: false,
                sizeAttenuation: true,
            });
            const particles = new THREE.Points(particleGeo, particleMat);
            scene.add(particles);

            // ---- Floating rings ----
            const rings = [];
            for (let i = 0; i < 5; i++) {
                const rGeo = new THREE.TorusGeometry(1.8 + i * 0.6, 0.015, 16, 80);
                const rMat = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color().setHSL(0.6 + i * 0.03, 0.8, 0.5),
                    transparent: true,
                    opacity: 0.15 - i * 0.02,
                    emissive: new THREE.Color().setHSL(0.6 + i * 0.03, 0.8, 0.3),
                    emissiveIntensity: 0.2,
                    roughness: 0.3,
                    metalness: 0.7,
                });
                const ring = new THREE.Mesh(rGeo, rMat);
                ring.position.y = 0.4 + Math.sin(i * 1.2) * 0.6;
                ring.rotation.x = Math.PI * 0.3 + i * 0.2;
                ring.rotation.z = i * 0.4;
                scene.add(ring);
                rings.push(ring);
            }

            // ---- Orbiting dots ----
            const dotGroup = new THREE.Group();
            const dotCount = 50;
            for (let i = 0; i < dotCount; i++) {
                const dGeo = new THREE.SphereGeometry(0.035, 6, 6);
                const dMat = new THREE.MeshPhysicalMaterial({
                    color: new THREE.Color().setHSL(0.6 + Math.random() * 0.15, 0.9, 0.6),
                    emissive: new THREE.Color().setHSL(0.6 + Math.random() * 0.15, 0.9, 0.3),
                    emissiveIntensity: 0.5,
                });
                const dot = new THREE.Mesh(dGeo, dMat);
                const angle = (i / dotCount) * Math.PI * 2;
                const rad = 2.0 + Math.random() * 0.8;
                dot.position.set(Math.cos(angle) * rad, 0.4 + Math.sin(angle * 2) * 0.5, Math.sin(angle) * rad);
                dot.userData = { angle, rad, speed: 0.6 + Math.random() * 0.4 };
                dotGroup.add(dot);
            }
            scene.add(dotGroup);

            // ---- Scroll → Time ----
            const TOTAL_DURATION = 16;
            let currentTime = 0;
            let targetTime = 0;

            function updateTimeFromScroll() {
                const scrollY = window.scrollY;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;
                targetTime = progress * TOTAL_DURATION;
            }

            // ---- Animation loop ----
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);

                const delta = clock.getDelta();
                currentTime += (targetTime - currentTime) * Math.min(1, delta * 4);
                currentTime = Math.max(0, Math.min(TOTAL_DURATION, currentTime));

                const t = currentTime / TOTAL_DURATION;

                knot.rotation.x = t * Math.PI * 4;
                knot.rotation.y = t * Math.PI * 6;
                knot.rotation.z = t * Math.PI * 2;
                const pulse = 1 + 0.08 * Math.sin(t * Math.PI * 6);
                knot.scale.set(pulse, pulse, pulse);
                const hue1 = 0.58 + t * 0.15;
                const hue2 = 0.62 + t * 0.1;
                knotMat.color.setHSL(hue1 % 1, 0.7, 0.5);
                knotMat.emissive.setHSL(hue2 % 1, 0.8, 0.2);
                knotMat.emissiveIntensity = 0.2 + 0.4 * Math.sin(t * Math.PI * 3);

                core.scale.setScalar(1 + 0.15 * Math.sin(t * Math.PI * 5));
                coreMat.emissiveIntensity = 0.3 + 0.4 * Math.sin(t * Math.PI * 4 + 1);

                wire.rotation.x = t * Math.PI * 5 + 0.5;
                wire.rotation.y = t * Math.PI * 7 + 1.2;

                particles.rotation.y = t * 0.8;
                particles.rotation.x = 0.1 * Math.sin(t * 0.6);
                const particlePos = particles.geometry.attributes.position;
                const array = particlePos.array;
                for (let i = 0; i < particleCount; i++) {
                    const i3 = i * 3;
                    const baseX = array[i3];
                    const baseZ = array[i3 + 2];
                    const angleOffset = t * 0.15;
                    const rad = Math.sqrt(baseX * baseX + baseZ * baseZ);
                    const ang = Math.atan2(baseZ, baseX) + angleOffset * 0.1;
                    array[i3] = rad * Math.cos(ang);
                    array[i3 + 2] = rad * Math.sin(ang);
                    array[i3 + 1] += 0.001 * Math.sin(t * 2 + i * 0.01);
                }
                particlePos.needsUpdate = true;

                rings.forEach((ring, idx) => {
                    ring.rotation.y += delta * (0.2 + idx * 0.05);
                    ring.rotation.x = Math.PI * 0.3 + idx * 0.2 + 0.15 * Math.sin(t * 0.8 + idx);
                    const op = 0.08 + 0.1 * (0.5 + 0.5 * Math.sin(t * 1.2 + idx * 0.7));
                    ring.material.opacity = Math.min(op, 0.2);
                });

                dotGroup.children.forEach((dot, i) => {
                    const data = dot.userData;
                    const newAngle = data.angle + delta * data.speed * 0.4 + t * 0.05;
                    const rad = data.rad + 0.15 * Math.sin(t * 1.5 + i * 0.3);
                    dot.position.x = Math.cos(newAngle) * rad;
                    dot.position.z = Math.sin(newAngle) * rad;
                    dot.position.y = 0.4 + Math.sin(newAngle * 2 + t * 0.8) * 0.5;
                    const s = 0.8 + 0.4 * (0.5 + 0.5 * Math.sin(t * 2 + i * 0.5));
                    dot.scale.setScalar(s);
                });

                const camRadius = 8;
                const camAngle = t * 0.15;
                const camY = 2 + 0.5 * Math.sin(t * 0.4);
                camera.position.x = camRadius * Math.sin(camAngle) * 0.6;
                camera.position.z = camRadius * Math.cos(camAngle) * 0.6 + 2;
                camera.position.y = camY;
                camera.lookAt(0, 0.4 + 0.2 * Math.sin(t * 0.3), 0);

                const lHue = 0.58 + t * 0.15;
                pointLight.color.setHSL(lHue % 1, 0.8, 0.5);
                pointLight.intensity = 0.6 + 0.5 * (0.5 + 0.5 * Math.sin(t * 2.5));

                renderer.render(scene, camera);
            }

            // ---- Resize & Scroll ----
            function onResize() {
                const w = window.innerWidth;
                const h = window.innerHeight;
                camera.aspect = w / h;
                camera.updateProjectionMatrix();
                renderer.setSize(w, h);
            }
            window.addEventListener('resize', onResize);

            const progressBar = document.getElementById('scroll-progress');

            function onScroll() {
                updateTimeFromScroll();
                const scrollY = window.scrollY;
                const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
                const pct = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;
                if (progressBar) progressBar.style.width = Math.min(pct, 100) + '%';
            }
            window.addEventListener('scroll', onScroll, { passive: true });
            window.addEventListener('resize', onScroll, { passive: true });

            // ---- Init ----
            updateTimeFromScroll();
            currentTime = targetTime;
            onScroll();
            animate();

            console.log('🚀 Liquid Glass 3D · Scroll to play 16s');
        })();
    } else {
        console.warn('⚠️ Three.js no está disponible. El fondo 3D no se mostrará.');
        // Mostrar un fallback visual (opcional)
        const container = document.getElementById('bg-container');
        if (container) {
            container.style.background = 'radial-gradient(ellipse at center, #0a1a3a, #060A14)';
        }
    }

});