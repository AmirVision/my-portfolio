const navLinks = [
    {
        name: "نمونه‌کارها",
        link: "#work",
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
    { value: 3, suffix: "+", label: "سال تجربه" },
    { value: 20, suffix: "+", label: "مشتری راضی" },
    { value: 22, suffix: "+", label: "پروژه موفق" },
    { value: 90, suffix: "%", label: "وفاداری مشتری" },
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
        title: "تمرکز روی کیفیت",
        desc: "کار رو با دقت و توجه به جزئیات پیش می‌برم تا نتیجه نهایی بی‌نقص باشه.",
    },
    {
        imgPath: "/images/chat.png",
        title: "ارتباط شفاف",
        desc: "تو هر مرحله از پروژه در جریانت می‌ذارم، پس همیشه می‌دونی کار کجای راهه.",
    },
    {
        imgPath: "/images/time.png",
        title: "تحویل سر وقت",
        desc: "پروژه رو طبق زمان‌بندی و بدون افت کیفیت تحویل می‌دم.",
    },
];

const techStackIcons = [
    {
        name: "توسعه‌دهنده ری‌اکت",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "متخصص دواپس",
        modelPath: "/models/docker-logo2.glb",
        scale: 50,
        rotation: [0, 0, 0],
    },
    {
        name: "توسعه‌دهنده بک‌اند",
        modelPath: "/models/node-transformed-detailled-preview.glb",
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
        review: "امیررضا هم خلاق بود هم از نظر فنی قوی. عملکرد فرانت‌اند سایت ما رو حسابی بهتر کرد و حالا کاربرا خیلی سریع‌تر باهاش کار می‌کنن. کارش واقعاً برامون ارزشمند بود.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "توسعه‌دهنده فرانت‌اند",
        date: "ژانویه ۲۰۲۳ تا اکنون",
        responsibilities: [
            "توسعه و نگهداری بخش‌های مختلف رابط کاربری سایت Hostinger.",
            "همکاری نزدیک با تیم طراحی UI/UX برای ساختن یک تجربه کاربری روون.",
            "بهینه‌سازی اپلیکیشن‌های وب برای بیشترین سرعت و مقیاس‌پذیری.",
        ],
    },
    {
        review: "کارهایی که امیررضا تو پروژه‌های وب Docker انجام داد فوق‌العاده بود. هر جا به مشکل می‌خوردیم، با یه نگاه مسئله‌محور حلش می‌کرد.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/logo2.png",
        title: "توسعه‌دهنده فول‌استک",
        date: "ژوئن ۲۰۲۰ تا دسامبر ۲۰۲۳",
        responsibilities: [
            "رهبری توسعه اپلیکیشن‌های وب Docker با تمرکز روی مقیاس‌پذیری.",
            "همکاری با مهندس‌های بک‌اند برای یکپارچه‌سازی روون APIها با فرانت‌اند.",
            "مشارکت در پروژه‌های متن‌باز اکوسیستم Docker.",
        ],
    },
    {
        review: "کاری که امیررضا روی اپلیکیشن موبایل Appwrite انجام داد هم باکیفیت بود هم کاربردی. راه‌حل‌هاش تجربه موبایل ما رو بهتر کرد و دقیقاً به چیزی که برای محصولمون می‌خواستیم رسیدیم.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "توسعه‌دهنده React Native",
        date: "مارس ۲۰۱۹ تا مه ۲۰۲۰",
        responsibilities: [
            "ساخت اپلیکیشن‌های موبایل چندپلتفرمی با React Native و اتصالشون به سرویس‌های بک‌اند Appwrite.",
            "بهتر کردن عملکرد و تجربه کاربری اپلیکیشن با بهینه‌سازی کد و تست.",
            "هماهنگی با تیم محصول برای پیاده‌سازی ویژگی‌ها بر اساس بازخورد کاربرا.",
        ],
    },
];

const testimonials = [
    {
        name: "سارا محمدی",
        review:
            "راستش اولش یکم مردد بودم چون قبلاً با دو سه تا فریلنسر کار کرده بودیم و آخرش کار نیمه‌کاره مونده بود. ولی امیررضا واقعاً فرق داشت. سر وقت تحویل داد و هر سوالی هم داشتیم زود جواب می‌داد. سایتمون الان خیلی روون‌تر شده.",
        imgPath: "/images/photo (1).png",
    },
    {
        name: "علی رضایی",
        review:
            "وسط پروژه چند تا تغییر اضافه ازش خواستیم که اصلاً تو قرارداد نبود، بدون غر زدن انجام داد. آدم حرفه‌ایه و معلومه کارش رو بلده. حتماً برای پروژه بعدی هم میام سراغش.",
        imgPath: "/images/photo (1).png",
    },
    {
        name: "نگار حسینی",
        review:
            "ممنون امیررضا جان 🙏 سایت فروشگاهیمون عالی شد. مشتری‌ها هم بازخورد خیلی خوبی دادن، مخصوصاً از اینکه سرعت لود صفحه‌ها بالا رفته.",
        imgPath: "/images/photo (1).png",
    },
    {
        name: "محمد کریمی",
        review:
            "سایت قدیمیمون رو که سال‌ها بود دست نخورده بود کامل بازطراحی کرد. هم ظاهرش مدرن شد هم کار کردن باهاش راحت‌تر. کلاً تجربه خوبی بود.",
        imgPath: "/images/photo (1).png",
    },
    {
        name: "پریسا نوری",
        review:
            "کارش تو بک‌اند واقعاً قویه. برای سایت فروشمون یه راه‌حل درست‌وحسابی پیاده کرد و از وقتی راه افتاد فروش آنلاینمون قابل توجه بالا رفته. تنها چیزی که می‌گم اینه که زودتر باید پیداش می‌کردیم.",
        imgPath: "/images/photo (1).png",
    },
    {
        name: "رضا موسوی",
        review:
            "خواسته‌هامون رو خوب گرفت و چیزی تحویل داد که از انتظارمون بالاتر بود. هم فرانت هم بک رو تمیز کار می‌کنه. توصیه‌ش می‌کنم.",
        imgPath: "/images/photo (1).png",
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

type ProjectSection = {
    heading: string;
    body: string;
};

type Project = {
    slug: string;
    featured: boolean;
    cardTitle: string;
    cardDescription?: string;
    title: string;
    tagline: string;
    description: string;
    image: string;
    alt: string;
    tags: string[];
    year: string;
    role: string;
    highlights: string[];
    sections: ProjectSection[];
    // فیلدهای اختیاری که صفحه‌ی پروژه چک می‌کند
    bgColor?: string;
    liveUrl?: string;
    repoUrl?: string;
};

const PROJECTS: Record<string, Project> = {
    "tokan-nano-soren": {
        slug: "tokan-nano-soren",
        featured: false,

        cardTitle: "توکان نانو سورن، وب‌سایت اتوماسیون صنعتی",

        title: "توکان نانو سورن، برق صنعتی و اتوماسیون",
        tagline: "سایت شرکتی برای یک مجموعه فعال در حوزه برق صنعتی و اتوماسیون.",
        description:
            "یک وب‌سایت بازاریابی فارسی و راست‌به‌چپ برای شرکت خدمات برق صنعتی و اتوماسیون. این سایت خدمات، سابقه و پروژه‌های شرکت را با یک اسلایدر هیرو انیمیشنی، معرفی ویژگی‌ها و آمارهایی که هنگام اسکرول نمایش داده می‌شوند ارائه می‌کند؛ همه در قالب یک طراحی تاریک و هماهنگ با هویت برند.",
        image: "/images/p2.png",
        alt: "وب‌سایت خدمات صنعتی توکان نانو سورن",
        tags: ["Next.js", "React", "GSAP", "Tailwind CSS", "RTL"],
        year: "۲۰۲۴",
        role: "توسعه‌دهنده فرانت‌اند",
        highlights: [
            "چیدمان و تایپوگرافی کاملاً راست‌به‌چپ فارسی",
            "اسلایدر هیرو انیمیشنی برای خدمات و پروژه‌های اصلی",
            "انیمیشن نمایش آمار و کارت ویژگی‌ها هنگام اسکرول با GSAP",
            "کامپوننت‌های قابل استفاده مجدد برای خدمات و ویژگی‌ها با یک سیستم طراحی یکپارچه",
            "پالت رنگی تاریک با تأکید زرد در همه بخش‌ها",
        ],
        sections: [
            {
                heading: "مشکل",
                body: "شرکت به یک حضور آنلاین معتبر و امروزی نیاز داشت تا خدمات برق صنعتی و اتوماسیونش را معرفی کند و اعتماد مشتری‌های بالقوه را جلب کند.",
            },
            {
                heading: "رویکرد",
                body: "یک فرانت‌اند راست‌به‌چپ و واکنش‌گرا با Tailwind برای چیدمان و GSAP برای انیمیشن‌های ظریف اسکرول ساختم و از پالت تاریک و زرد استفاده کردم تا با فضای صنعتی برند هماهنگ باشد.",
            },
            {
                heading: "نتیجه",
                body: "یک سایت بازاریابی تمیز و سریع که خدمات، سال‌ها تجربه و سابقه پروژه‌های شرکت را شفاف منتقل می‌کند.",
            },
        ],
    },

    "modern-style": {
        slug: "modern-style",
        featured: true,

        cardTitle: "مدرن استایل، فروشگاه آنلاین با تم تاریک",

        title: "مدرن استایل، فروشگاه تجارت الکترونیک با تم تاریک",
        tagline: "فروشگاهی مدرن و شیک برای یک برند سبک زندگی.",
        description:
            "یک فروشگاه آنلاین راست‌به‌چپ با مرور دسته‌بندی‌ها، کاروسل محصولات برای پرفروش‌ها و پیشنهادهای ویژه، سبد خرید زنده و یک تم تاریک با لهجه گرادیانتی پرانرژی؛ طراحی‌شده تا روی دسکتاپ و موبایل حس پریمیوم بدهد.",
        image: "/images/p1.png",
        alt: "فروشگاه آنلاین مدرن استایل",
        tags: ["Next.js", "React", "Tailwind CSS", "RTL", "E-Commerce"],
        year: "۲۰۲۴",
        role: "توسعه‌دهنده فرانت‌اند",
        highlights: [
            "کاروسل افقی دسته‌بندی‌ها برای مرور سریع مجموعه‌ها",
            "ردیف‌های جدا برای پرفروش‌ها، پیشنهادهای ویژه و محصولات محبوب",
            "سبد خرید در هدر با شمارش زنده تعداد اقلام",
            "رابط کاربری تاریک با لهجه گرادیانت و حالت‌های هاور و ترنزیشن نرم",
            "چیدمان فارسی و واکنش‌گرا برای دسکتاپ و موبایل",
        ],
        sections: [
            {
                heading: "مشکل",
                body: "یک برند سبک زندگی می‌خواست فروشگاهی داشته باشد که مدرن و پریمیوم به نظر برسد، نه یک قالب معمولی، و مرور بین دسته‌بندی‌های مختلف محصول هم در آن راحت باشد.",
            },
            {
                heading: "رویکرد",
                body: "فروشگاه را روی یک کارت محصول قابل استفاده مجدد، کاروسل برای هر ردیف و یک تم تاریک با لهجه گرادیانت ساختم؛ همه با چیدمان راست‌به‌چپ.",
            },
            {
                heading: "نتیجه",
                body: "فروشگاهی که محصول‌ها را در مرکز توجه می‌گذارد، با ناوبری سریع بین دسته‌ها و ظاهری تمیز و هماهنگ با برند روی همه دستگاه‌ها.",
            },
        ],
    },

    "iphone-15-pro": {
        slug: "iphone-15-pro",
        featured: false,

        cardTitle: "بازسازی دقیق صفحه فرود iPhone 15 Pro اپل",
        cardDescription:
            "یک صفحه محصول جذاب با انیمیشن‌های اسکرول‌محور و نمایشگر سه‌بعدی ۳۶۰ درجه که از دسکتاپ تا موبایل کاملاً واکنش‌گراست.",

        title: "iPhone 15 Pro، بازسازی صفحه فرود اپل",
        tagline: "طراحی موشن در سطح اپل، بازسازی‌شده از صفر.",
        description:
            "بازسازی وفادارانه‌ی صفحه بازاریابی iPhone 15 Pro اپل با تمرکز روی روایت اسکرول‌محور. ترکیبی از یک هیرو انیمیشنی، یک بخش برجسته‌سازی، یک نمایشگر سه‌بعدی ۳۶۰ درجه تعاملی و یک طراحی تاریک دقیق که از دسکتاپ بزرگ تا موبایل خوب مقیاس می‌گیرد.",
        image: "/images/p3.png",
        alt: "بازسازی صفحه فرود iPhone 15 Pro",
        tags: ["React", "GSAP", "ScrollTrigger", "Three.js", "Tailwind CSS"],
        year: "۲۰۲۴",
        role: "توسعه‌دهنده فرانت‌اند",
        highlights: [
            "انیمیشن‌های مبتنی بر تایم‌لاین که با اسکرول فعال می‌شوند، ساخته‌شده با GSAP و ScrollTrigger",
            "نمایشگر سه‌بعدی ۳۶۰ درجه تعاملی برای بخش «نگاه نزدیک‌تر»",
            "بخش برجسته‌سازی انیمیشنی، الهام‌گرفته از دموی دکمه Action اپل",
            "رابط کاربری تاریک با دقت پیکسلی، هماهنگ با تایپوگرافی و فاصله‌گذاری اپل",
            "چیدمان کاملاً واکنش‌گرا از دسکتاپ بزرگ تا موبایل",
        ],
        sections: [
            {
                heading: "هدف",
                body: "صفحه‌های محصول اپل استاندارد بالایی در موشن و ظرافت دارند، برای همین صفحه iPhone 15 Pro را بازسازی کردم تا مهارت انیمیشن و چیدمانم را برابر یک نمونه‌ی درجه‌یک محک بزنم.",
            },
            {
                heading: "رویکرد",
                body: "روایت را با GSAP و ScrollTrigger پیش بردم، چرخش محصول را با یک نمایشگر سه‌بعدی سبک مدیریت کردم و با Tailwind فاصله‌گذاری و تایپوگرافی دقیق اپل را در همه نقاط شکست بازسازی کردم.",
            },
            {
                heading: "نتیجه",
                body: "یک نتیجه‌ی بصری بسیار نزدیک به نمونه اصلی که در همه نقاط شکست روان می‌ماند؛ نمایشی قوی از موشن اسکرول‌محور، کار سه‌بعدی و طراحی واکنش‌گرا.",
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
    testimonials,
    socialImgs,
    techStackIcons,
    navLinks,
    PROJECTS,
    FEATURED_PROJECT,
    OTHER_PROJECTS,
};