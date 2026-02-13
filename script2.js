const serviceDetails = {
    fr: {
        s1: {
            title: "Transport Urgent",
            desc: "Nous disposons d'ambulances de réanimation équipées de matériel de pointe (défibrillateurs, oxygène, moniteurs). Notre équipe est composée d'infirmiers et d'ambulanciers certifiés pour gérer les détresses respiratoires, cardiaques et traumatologiques. Intervention rapide 24h/24.",
            detail: "Équipement complet de réanimation à bord.",
            icon: "fa-truck-medical"
        },
        s2: {
            title: "Transport Non Urgent",
            desc: "Idéal pour les patients à mobilité réduite ou nécessitant une position allongée. Nous assurons les transferts confortables vers les centres de dialyse, les cabinets de radiologie, ou les retours à domicile après hospitalisation. Nos véhicules sont climatisés et désinfectés.",
            detail: "Aide au brancardage et accompagnement administratif inclus.",
            icon: "fa-wheelchair"
        },
        s3: {
            title: "Événementiel",
            desc: "Nous assurons la sécurité médicale de vos événements (matchs de foot, concerts, festivals, événements d'entreprise). Mise en place de postes de secours, présence d'ambulances prêtes à évacuer, et coordination avec les urgences locales pour une sécurité maximale.",
            detail: "Dispositif préventif de secours (DPS) sur mesure.",
            icon: "fa-calendar-check"
        },
        s4: {
            title: "Transport Spécialisé",
            desc: "Transport adapté aux cas complexes : transport en couveuse pour les nouveau-nés, transport bariatrique (personnes en surpoids), ou transport de patients sous assistance respiratoire. Nous adaptons nos véhicules et notre personnel selon la pathologie du patient.",
            detail: "Personnel spécialisé selon le besoin du patient.",
            icon: "fa-user-nurse"
        }
    },
    ar: {
        s1: {
            title: "نقل الحالات المستعجلة",
            desc: "لدينا سيارات إسعاف مجهزة بأحدث معدات الإنعاش (أجهزة إزالة الرجفان، الأكسجين، أجهزة المراقبة). يتكون فريقنا من ممرضين ومسعفين معتمدين للتعامل مع الضائقة التنفسية، القلبية والإصابات. تدخل سريع على مدار 24 ساعة.",
            detail: "تجهيزات إنعاش كاملة على متن السيارة.",
            icon: "fa-truck-medical"
        },
        s2: {
            title: "نقل الحالات غير المستعجلة",
            desc: "مثالي للمرضى ذوي القدرة المحدودة على الحركة أو الذين يحتاجون للاستلقاء. نضمن نقلاً مريحاً إلى مراكز تصفية الدم، عيادات الأشعة، أو العودة إلى المنزل بعد الاستشفاء. سياراتنا مكيفة ومعقمة.",
            detail: "مساعدة في النقل والمرافقة الإدارية مشمولة.",
            icon: "fa-wheelchair"
        },
        s3: {
            title: "تغطية الفعاليات",
            desc: "نضمن السلامة الطبية لفعالياتكم (مباريات كرة القدم، الحفلات الموسيقية، المهرجانات). وضع نقاط إسعاف، وجود سيارات إسعاف جاهزة للإخلاء، والتنسيق مع الطوارئ المحلية لضمان أقصى درجات الأمان.",
            detail: "نظام وقائي للإسعاف مصمم حسب الطلب.",
            icon: "fa-calendar-check"
        },
        s4: {
            title: "نقل طبي متخصص",
            desc: "نقل مكيف للحالات المعقدة: نقل حديثي الولادة في الحاضنات، نقل حالات السمنة المفرطة، أو نقل المرضى تحت التنفس الاصطناعي. نكيف سياراتنا وطاقمنا حسب حالة المريض.",
            detail: "طاقم متخصص حسب احتياجات المريض.",
            icon: "fa-user-nurse"
        }
    }
};

// --- TRANSLATIONS (Base Text) ---
const translations = {
    fr: {
        loading: "CHARGEMENT...",
        brandName: "GHAITH",
        brandSub: "ASSISTANCE",
        navHome: "Accueil",
        navServices: "Services",
        navGallery: "Galerie",
        navContact: "Contact",
        navUrgence: "URGENCE",
        mobileCall: "APPELER 24/7",
        heroBadge: "DISPONIBLE MAINTENANT • 24H/24",
        heroTitle1: "Rapidité. Soin.",
        heroTitle2: "Confiance Totale.",
        heroDesc: "Ghaith Assistance vous accompagne dans tous vos transports sanitaires à Agadir et ses environs.",
        btnServices: "Nos Services",
        servSub: "Ce que nous faisons",
        servTitle: "Nos Services Médicaux",
        s1Title: "Transport des patients urgents",
        s1Desc: "Transporter les patients de leur domicile vers les hôpitaux ou inversement, avec un personnel médical qualifié.",
        s2Title: "Transport des patients non urgents",
        s2Desc: "Fournir des services de transport pour des patients stables, comme les emmener à des rendez-vous médicaux ou des traitements.",
        s3Title: "Services d'ambulance lors d'événements",
        s3Desc: "Mettre à disposition un personnel d’ambulance médicale pour les grandes manifestations et événements.",
        s4Title: "Transport médical spécialisé",
        s4Desc: "Transporter les patients nécessitant des soins particuliers, comme les cas critiques ou les patients à besoins spécifiques.",
        readMore: "En savoir plus",

        // Gallery
        gallerySub: "Notre Matériel",
        galleryTitle: "Notre Flotte & Équipement",
        galImg1: "Véhicules neufs et entretenus pour votre sécurité.",
        galImg2: "Intervention professionnelle et humaine.",
        galImg3: "Matériel de réanimation complet à bord.",

        reviewSub: "Témoignages",
        reviewTitle: "Ce que disent nos clients",
        rev1Text: "\"Service incroyable. L'équipe est arrivée en moins de 15 minutes. Très professionnels et rassurants.\"",
        rev2Text: "\"Merci pour votre gentillesse lors du transport de ma mère pour sa dialyse.\"",
        rev3Text: "\"Une ambulance propre et bien équipée. Je recommande vivement pour leur sérieux.\"",
        contactBoxTitle: "Contactez-nous",
        contactBoxDesc: "Envoyez-nous un message pour un devis ou une information. Pour les urgences, appelez directement.",
        formName: "Nom Complet",
        formPhone: "Téléphone",
        formMsg: "Message",
        formBtn: "Envoyer le message",
        footerDesc: "Votre partenaire santé de confiance. Disponible 7j/7 pour assurer votre sécurité.",
        linksTitle: "Liens Rapides",
        contactTitle: "Contact",
        location: "Tilila - Agadir",
        copyright: "Design Premium.",
        modalWhy: "POURQUOI NOUS CHOISIR ?",
        modalCall: "Appeler pour ce service"
    },
    ar: {
        loading: "جاري التحميل...",
        navHome: "الرئيسية",
        navServices: "خدماتنا",
        navGallery: "المعرض",
        navContact: "اتصل بنا",
        navUrgence: "طوارئ",
        mobileCall: "اتصل 24/7",
        heroBadge: "متوفر الآن • 24/24 ساعة",
        heroTitle1: "سرعة. رعاية.",
        heroTitle2: "ثقة تامة.",
        heroDesc: "إسعاف غيث ترافقكم في جميع تنقلاتكم الصحية في أكادير والنواحي.",
        btnServices: "خدماتنا",
        servSub: "ماذا نقدم",
        servTitle: "خدماتنا الطبية",
        s1Title: "نقل الحالات المستعجلة",
        s1Desc: "نقل المرضى من منازلهم إلى المستشفيات أو العكس، مع طاقم طبي مؤهل.",
        s2Title: "نقل الحالات غير المستعجلة",
        s2Desc: "توفير خدمات النقل للمرضى المستقرين، مثل نقلهم إلى المواعيد الطبية أو العلاجات.",
        s3Title: "تغطية الفعاليات والمهرجانات",
        s3Desc: "توفير طاقم إسعاف طبي للمناسبات الكبيرة والتظاهرات.",
        s4Title: "نقل طبي متخصص",
        s4Desc: "نقل المرضى الذين يحتاجون إلى رعاية خاصة، مثل الحالات الحرجة أو ذوي الاحتياجات الخاصة.",
        readMore: "اقرأ المزيد",

        // Gallery
        gallerySub: "معداتنا",
        galleryTitle: "أسطولنا وتجهيزاتنا",
        galImg1: "سيارات حديثة وصيانة دورية لسلامتكم.",
        galImg2: "تدخل مهني وإنساني.",
        galImg3: "معدات إنعاش متكاملة على متن السيارة.",

        reviewSub: "شهادات",
        reviewTitle: "ماذا يقول عملاؤنا",
        rev1Text: "\"خدمة ممتازة. وصل الفريق في أقل من 15 دقيقة. محترفون ومطمئنون للغاية.\"",
        rev2Text: "\"شكراً لكم على لطفكم أثناء نقل والدتي لموعد غسيل الكلى.\"",
        rev3Text: "\"سيارة إسعاف نظيفة ومجهزة جيداً. أوصي بهم بشدة لجديتهم.\"",
        contactBoxTitle: "تواصل معنا",
        contactBoxDesc: "أرسل لنا رسالة لطلب عرض أسعار أو معلومات. للطوارئ، اتصل مباشرة.",
        formName: "الاسم الكامل",
        formPhone: "الهاتف",
        formMsg: "الرسالة",
        formBtn: "إرسال الرسالة",
        footerDesc: "شريككم الصحي الموثوق. متاحون 7/7 أيام لضمان سلامتكم.",
        linksTitle: "روابط سريعة",
        contactTitle: "اتصل بنا",
        location: "تيليلا - أكادير",
        copyright: "تصميم متميز.",
        modalWhy: "لماذا تختارنا ؟",
        modalCall: "اتصل لهذا الخدمة"
    }
};

let currentLang = 'fr';

// --- MODAL FUNCTIONS ---
function openModal(serviceId) {
    const modal = document.getElementById('serviceModal');
    const data = serviceDetails[currentLang][serviceId];

    if (data) {
        // Populate Modal
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalDesc').innerText = data.desc;
        document.getElementById('modalDetail').innerText = data.detail;

        // Icon Logic
        const iconContainer = document.getElementById('modalIconContainer');
        iconContainer.innerHTML = `<i class="fa-solid ${data.icon}"></i>`;

        // Show Modal
        modal.classList.remove('hidden');
        modal.classList.add('flex');
    }
}

function closeModal(event) {
    // Close if clicked on overlay or close button (not content)
    const modal = document.getElementById('serviceModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// --- LANGUAGE & GENERAL FUNCTIONS ---
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    updateContent();
}

function updateContent() {
    const html = document.documentElement;
    const body = document.body;
    const langBtnText = document.getElementById('lang-btn-text');
    const mobileLangBtnText = document.getElementById('mobile-lang-btn-text');
    const elements = document.querySelectorAll('[data-key]');

    if (currentLang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
        body.classList.remove('font-fr');
        body.classList.add('font-ar');
        langBtnText.innerText = 'FR';
        mobileLangBtnText.innerText = 'FR';
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'fr');
        body.classList.remove('font-ar');
        body.classList.add('font-fr');
        langBtnText.innerText = 'العربية';
        mobileLangBtnText.innerText = 'العربية';
    }

    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
        }
    });
}

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
});

const navbar = document.getElementById('navbar');
const navText = document.getElementById('nav-text-1');
const navLinks = document.querySelectorAll('.nav-link');
const mobileBtn = document.getElementById('mobile-btn');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.remove('bg-transparent', 'py-4');
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-2');
        navText.classList.remove('text-white');
        navText.classList.add('text-slate-800');
        mobileBtn.classList.remove('text-white');
        mobileBtn.classList.add('text-slate-800');
        navLinks.forEach(link => { link.classList.remove('text-white'); link.classList.add('text-slate-700'); });
    } else {
        navbar.classList.add('bg-transparent', 'py-4');
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md', 'py-2');
        navText.classList.add('text-white');
        navText.classList.remove('text-slate-800');
        mobileBtn.classList.add('text-white');
        mobileBtn.classList.remove('text-slate-800');
        navLinks.forEach(link => { link.classList.add('text-white'); link.classList.remove('text-slate-700'); });
    }
});

const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('active');
    });
}, { threshold: 0.1 });
revealElements.forEach(el => revealOnScroll.observe(el));

const mobileMenu = document.getElementById('mobile-menu');
mobileBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
});