const navLinks = [
    {
        name: "کارها",
        link: "#work",
    },
    {
        name: "تجربه",
        link: "#experience",
    },
    {
        name: "مهارت‌ها",
        link: "#skills",
    },
    {
        name: "نظرات",
        link: "#testimonials",
    },
];

const words = [
    { text: "ایده‌ها", imgPath: "/images/ideas.svg" },
    { text: "مفاهیم", imgPath: "/images/concepts.svg" },
    { text: "طراحی‌ها", imgPath: "/images/designs.svg" },
    { text: "کد", imgPath: "/images/code.svg" },
    { text: "ایده‌ها", imgPath: "/images/ideas.svg" },
    { text: "مفاهیم", imgPath: "/images/concepts.svg" },
    { text: "طراحی‌ها", imgPath: "/images/designs.svg" },
    { text: "کد", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 3, suffix: "+", label: "سال‌ها تجربه" },
    { value: 20, suffix: "+", label: "مشتریان راضی" },
    { value: 22, suffix: "+", label: "پروژه‌های تکمیل‌شده" },
    { value: 90, suffix: "%", label: "نرخ حفظ مشتری" },
];

const logoIconsList = [
    { imgPath: "/images/logos/company-logo-1.png" },
    { imgPath: "/images/logos/company-logo-2.png" },
    { imgPath: "/images/logos/company-logo-3.png" },
    { imgPath: "/images/logos/company-logo-4.png" },
    { imgPath: "/images/logos/company-logo-5.png" },
    { imgPath: "/images/logos/company-logo-6.png" },
    { imgPath: "/images/logos/company-logo-7.png" },
    { imgPath: "/images/logos/company-logo-8.png" },
    { imgPath: "/images/logos/company-logo-9.png" },
    { imgPath: "/images/logos/company-logo-10.png" },
    { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "تمرکز بر کیفیت",
        desc: "ارائه نتایج با کیفیت بالا با توجه به جزئیات.",
    },
    {
        imgPath: "/images/chat.png",
        title: "ارتباط قابل اعتماد",
        desc: "اطلاع‌رسانی در هر مرحله برای تضمین شفافیت و وضوح.",
    },
    {
        imgPath: "/images/time.png",
        title: "تحویل به‌موقع",
        desc: "اطمینان از تکمیل پروژه‌ها طبق برنامه، با کیفیت و دقت.",
    },
];

const techStackIcons = [
    {
        name: "توسعه‌دهنده React",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "توسعه‌دهنده Python",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "توسعه‌دهنده Backend",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "توسعه‌دهنده تعاملی",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "مدیر پروژه",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "امیررضا خلاقیت و تخصص فنی را به تیم آورد و عملکرد فرانت‌اند ما را به طور قابل توجهی بهبود بخشید. کار او در ارائه تجربیات سریع‌تر بسیار ارزشمند بوده است.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "توسعه‌دهنده فرانت‌اند",
        date: "ژانویه ۲۰۲۳ - اکنون",
        responsibilities: [
            "توسعه و نگهداری ویژگی‌های رابط کاربری وب‌سایت Hostinger.",
            "همکاری نزدیک با طراحان UI/UX برای اطمینان از تجربه‌های کاربری روان.",
            "بهینه‌سازی برنامه‌های وب برای حداکثر سرعت و مقیاس‌پذیری.",
        ],
    },
    {
        review: "مشارکت‌های امیررضا در برنامه‌های وب Docker استثنایی بوده است. او با ذهنیت حل مسئله به چالش‌ها می‌پردازد.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "توسعه‌دهنده فول‌استک",
        date: "ژوئن ۲۰۲۰ - دسامبر ۲۰۲۳",
        responsibilities: [
            "رهبری توسعه برنامه‌های وب Docker با تمرکز بر مقیاس‌پذیری.",
            "همکاری با مهندسان بک‌اند برای یکپارچه‌سازی روان APIها با فرانت‌اند.",
            "مشارکت در پروژه‌های متن‌باز مورد استفاده در اکوسیستم Docker.",
        ],
    },
    {
        review: "کار امیررضا روی اپلیکیشن موبایل Appwrite سطح بالایی از کیفیت و کارایی را به همراه داشت. او راه‌حل‌هایی ارائه داد که تجربه موبایل ما را بهبود بخشید و به اهداف محصول ما رسید.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "توسعه‌دهنده React Native",
        date: "مارس ۲۰۱۹ - مه ۲۰۲۰",
        responsibilities: [
            "ساخت اپلیکیشن‌های موبایل چندپلتفرمی با React Native و یکپارچه‌سازی با سرویس‌های بک‌اند Appwrite.",
            "بهبود عملکرد اپلیکیشن و تجربه کاربری از طریق بهینه‌سازی کد و تست.",
            "هماهنگی با تیم محصول برای پیاده‌سازی ویژگی‌ها بر اساس بازخورد.",
        ],
    },
];

const expLogos = [
    { name: "logo1", imgPath: "/images/logo1.png" },
    { name: "logo2", imgPath: "/images/logo2.png" },
    { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
    {
        name: "استر هاوارد",
        mentions: "@estherhoward",
        review:
            "نمی‌توانم به اندازه کافی از امیررضا تعریف کنم. او توانست نیازمندی‌های پیچیده پروژه ما را به یک وب‌سایت روان و کاربردی تبدیل کند. توانایی‌های حل مسئله او استثنایی است.",
        imgPath: "/images/client1.png",
    },
    {
        name: "وید وارن",
        mentions: "@wadewarren",
        review:
            "کار با امیررضا تجربه‌ای فوق‌العاده بود. او وب‌سایت قدیمی ما را به یک پلتفرم مدرن و کاربرپسند تبدیل کرد. توجه به جزئیات و تعهد به کیفیت او بی‌نظیر است. برای هر پروژه توسعه وب به شدت توصیه می‌شود.",
        imgPath: "/images/client3.png",
    },
    {
        name: "گای هاوکینز",
        mentions: "@guyhawkins",
        review:
            "همکاری با امیررضا یک لذت مطلق بود. حرفه‌ای بودن، وقت‌شناسی و تعهد او به ارائه نتایج استثنایی در طول پروژه ما مشهود بود. اشتیاق امیررضا به هر جنبه‌ای از توسعه واقعاً برجسته است. اگر می‌خواهید وب‌سایت و برند خود را ارتقا دهید، امیررضا شریک ایده‌آل است.",
        imgPath: "/images/client2.png",
    },
    {
        name: "ماروین مک‌کینی",
        mentions: "@marvinmckinney",
        review:
            "امیررضا کار کردن با او لذت‌بخش بود. او وب‌سایت قدیمی ما را به یک پلتفرم تازه و بصری تبدیل کرد که هم مدرن است و هم آسان برای پیمایش. کار فوق‌العاده‌ای بود.",
        imgPath: "/images/client5.png",
    },
    {
        name: "فلوید مایلز",
        mentions: "@floydmiles",
        review:
            "تخصص امیررضا در توسعه وب واقعاً تحسین‌برانگیز است. او یک راه‌حل قوی و مقیاس‌پذیر برای سایت تجارت الکترونیک ما ارائه داد و فروش آنلاین ما از زمان راه‌اندازی به طور قابل توجهی افزایش یافته است. او یک حرفه‌ای واقعی است!",
        imgPath: "/images/client4.png",
    },
    {
        name: "آلبرت فلورز",
        mentions: "@albertflores",
        review:
            "امیررضا کار کردن با او لذت‌بخش بود. او نیازمندی‌های ما را به خوبی درک کرد و وب‌سایتی ارائه داد که از انتظارات ما فراتر رفت. مهارت‌های او در هر دو توسعه فرانت‌اند و بک‌اند درجه اول است.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "اینستاگرام",
        imgPath: "/images/insta.png",
        url: "https://localhost:4000"
    },
    {
        name: "فیسبوک",
        imgPath: "/images/fb.png",
        url: "https://localhost:5000"
    },
    {
        name: "ایکس",
        imgPath: "/images/x.png",
        url: "https://localhost:6000"
    },
    {
        name: "لینکدین",
        imgPath: "/images/linkedin.png",
        url: "https://localhost:7000"
    },
];

const PROJECTS = {
    "tokan-nano-soren": {
        slug: "tokan-nano-soren",
        featured: false,

        cardTitle: "توکان نانو سورن — وب‌سایت اتوماسیون صنعتی",

        title: "توکان نانو سورن — برق صنعتی و اتوماسیون",
        tagline: "یک سایت شرکتی برای یک شرکت برق صنعتی و اتوماسیون.",
        description:
            "یک وب‌سایت بازاریابی فارسی راست‌به‌چپ برای یک شرکت خدمات برق صنعتی و اتوماسیون. این سایت خدمات، تجربه و پروژه‌های شرکت را از طریق یک اسلایدر قهرمانی انیمیشنی، نکات برجسته ویژگی‌ها و آمارهای نمایش‌یافته با اسکرول، همه در یک طراحی تاریک و برند‌محور ارائه می‌دهد.",
        image: "/images/p2.png",
        alt: "وب‌سایت خدمات صنعتی توکان نانو سورن",
        tags: ["Next.js", "React", "GSAP", "Tailwind CSS", "RTL"],
        year: "۲۰۲۴",
        role: "توسعه‌دهنده فرانت‌اند",
        highlights: [
            "طرح‌بندی و تایپوگرافی کامل راست‌به‌چپ (RTL) فارسی",
            "اسلایدر قهرمانی انیمیشنی برای خدمات و پروژه‌های کلیدی",
            "انیمیشن‌های نمایش با اسکرول روی آمار و کارت‌های ویژگی (GSAP)",
            "کامپوننت‌های قابل استفاده مجدد برای سرویس و ویژگی با یک سیستم طراحی ثابت",
            "پالت برند تاریک با لهجه زرد در تمام بخش‌ها",
        ],
        sections: [
            {
                heading: "مشکل",
                body: "شرکت نیاز به یک حضور وب معتبر و مدرن داشت تا خدمات برق صنعتی و اتوماسیون خود را ارائه دهد و اعتماد مشتریان بالقوه را جلب کند.",
            },
            {
                heading: "رویکرد",
                body: "من یک فرانت‌اند RTL واکنش‌گرا با Tailwind برای طرح‌بندی و GSAP برای انیمیشن‌های ظریف اسکرول ساختم و از پالت تاریک و زرد برای مطابقت با برند صنعتی استفاده کردم.",
            },
            {
                heading: "نتیجه",
                body: "یک سایت بازاریابی صیقلی و سریع‌بارگذاری که خدمات، سال‌ها تجربه و سابقه پروژه شرکت را به وضوح منتقل می‌کند.",
            },
        ],
    },

    "modern-style": {
        slug: "modern-style",
        featured: true,

        cardTitle: "مدرن استایل — فروشگاه آنلاین تاریک",

        title: "مدرن استایل — فروشگاه تجارت الکترونیک با تم تاریک",
        tagline: "یک فروشگاه مدرن و شیک برای یک برند سبک زندگی مدرن.",
        description:
            "یک فروشگاه آنلاین راست‌به‌چپ با مرور دسته‌بندی، کاروسل‌های محصول برای پرفروش‌ترین‌ها و پیشنهادات ویژه، سبد خرید زنده و یک تم تاریک با لهجه گرادیانت پرانرژی — طراحی‌شده برای احساس پرمیوم در هر دو دسکتاپ و موبایل.",
        image: "/images/p1.png",
        alt: "فروشگاه آنلاین مدرن استایل",
        tags: ["Next.js", "React", "Tailwind CSS", "RTL", "E-Commerce"],
        year: "۲۰۲۴",
        role: "توسعه‌دهنده فرانت‌اند",
        highlights: [
            "کاروسل دسته‌بندی افقی برای مرور سریع در مجموعه‌ها",
            "ردیف‌های اختصاصی برای پرفروش‌ترین‌ها، پیشنهادات ویژه و محصولات محبوب",
            "سبد خرید هدر با شمارش زنده اقلام",
            "رابط کاربری تاریک با لهجه گرادیانت و حالت‌های هاور و انتقال روان",
            "طرح‌بندی فارسی (RTL) واکنش‌گرا برای دسکتاپ و موبایل",
        ],
        sections: [
            {
                heading: "مشکل",
                body: "یک برند سبک زندگی می‌خواست یک فروشگاه آنلاین داشته باشد که مدرن و پرمیوم به نظر برسد نه یک قالب معمولی، با مرور آسان در دسته‌بندی‌های محصول متعدد.",
            },
            {
                heading: "رویکرد",
                body: "من فروشگاه را بر اساس یک سیستم کارت محصول قابل استفاده مجدد، کاروسل‌ها برای هر ردیف تجاری و یک تم تاریک با لهجه گرادیانت ساختم، همه با طرح‌بندی RTL.",
            },
            {
                heading: "نتیجه",
                body: "یک فروشگاه که محصولات را در مرکز توجه قرار می‌دهد با ناوبری سریع دسته‌بندی و ظاهری صیقلی و متناسب با برند در همه دستگاه‌ها.",
            },
        ],
    },

    "iphone-15-pro": {
        slug: "iphone-15-pro",
        featured: false,

        cardTitle: "بازسازی دقیق صفحه فرود iPhone 15 Pro اپل",
        cardDescription:
            "یک صفحه محصول غوطه‌ور با حرکت اسکرول‌محور و یک نمایشگر محصول ۳۶۰ درجه تعاملی — کاملاً واکنش‌گرا از دسکتاپ تا موبایل.",

        title: "iPhone 15 Pro — بازسازی صفحه فرود اپل",
        tagline: "طراحی حرکت با کیفیت اپل، از صفر بازسازی‌شده.",
        description:
            "یک بازسازی وفادارانه از صفحه بازاریابی iPhone 15 Pro اپل، با تمرکز بر داستان‌گویی اسکرول‌محور. ترکیبی از یک هیرو انیمیشنی، یک رول برجسته‌سازی، یک نمایشگر محصول ۳۶۰ درجه تعاملی و یک طرح‌بندی تاریک دقیق که از دسکتاپ بزرگ تا موبایل به خوبی مقیاس می‌گیرد.",
        image: "/images/p3.png",
        alt: "بازسازی صفحه فرود iPhone 15 Pro",
        tags: ["React", "GSAP", "ScrollTrigger", "Three.js", "Tailwind CSS"],
        year: "۲۰۲۴",
        role: "توسعه‌دهنده فرانت‌اند",
        highlights: [
            "انیمیشن‌های خط زمانی فعال‌شده با اسکرول ساخته‌شده با GSAP + ScrollTrigger",
            "نمایشگر محصول ۳۶۰ درجه تعاملی برای بخش 'نگاه دقیق‌تر'",
            "رول برجسته‌سازی انیمیشنی که دمو دکمه اکشن اپل را منعکس می‌کند",
            "رابط کاربری تاریک با دقت پیکسلی مطابق تایپوگرافی و فاصله‌گذاری اپل",
            "طرح‌بندی کاملاً واکنش‌گرا از دسکتاپ بزرگ تا موبایل",
        ],
        sections: [
            {
                heading: "هدف",
                body: "صفحات محصول اپل استانداردی بالا در حرکت و صیقل تعیین می‌کنند، بنابراین صفحه iPhone 15 Pro را بازسازی کردم تا مهارت‌های انیمیشن و طرح‌بندی خود را در برابر یک مرجع بهترین در کلاس آزمایش کنم.",
            },
            {
                heading: "رویکرد",
                body: "داستان‌گویی را با GSAP و ScrollTrigger هدایت کردم، چرخش محصول را با یک نمایشگر سه‌بعدی سبک مدیریت کردم و از Tailwind برای مطابقت با فاصله‌گذاری و تایپوگرافی دقیق اپل در هر نقطه شکست استفاده کردم.",
            },
            {
                heading: "نتیجه",
                body: "یک مطابقت بصری نزدیک با اصل که در تمام نقاط شکست روان می‌ماند — یک نمایش قوی از حرکت اسکرول‌محور، سه‌بعدی و طراحی واکنش‌گرا.",
            },
        ],
    },
};

const PROJECT_LIST = Object.values(PROJECTS);
const FEATURED_PROJECT = PROJECT_LIST.find((p) => p.featured);
const OTHER_PROJECTS = PROJECT_LIST.filter((p) => !p.featured);

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    navLinks,
    PROJECTS,
    FEATURED_PROJECT,
    OTHER_PROJECTS,
};