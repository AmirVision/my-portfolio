import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// ─── Full project details ─────────────────────────────────────────────────────
// Add a new entry here whenever you add a project to AppShowcase.
// The key must match the `slug` field used in AppShowcase.jsx.
const projectData = {
    ryde: {
        title: "Ryde — On-Demand Rides Made Simple",
        tagline: "Book a ride in seconds, anywhere.",
        description:
            "Ryde is a full-featured ride-hailing mobile application built with React Native and Expo. It delivers a smooth, native experience on both iOS and Android, with real-time driver tracking, in-app payments, and ride history.",
        image: "/images/project1.png",
        alt: "Ryde App Interface",
        tags: ["React Native", "Expo", "TailwindCSS", "TypeScript", "Stripe", "Google Maps API"],
        year: "2024",
        role: "Full-Stack Mobile Developer",
        liveUrl: "https://yourapp.link/ryde",   // replace or remove
        repoUrl: "https://github.com/you/ryde", // replace or remove
        highlights: [
            "Real-time GPS tracking with sub-second updates using WebSockets",
            "Stripe-powered in-app payments with saved cards support",
            "Push notifications for ride status changes via Expo Notifications",
            "Optimised map rendering keeping frame rate above 60 fps",
            "Offline-first architecture with automatic data sync on reconnect",
        ],
        sections: [
            {
                heading: "The Problem",
                body: "Existing ride apps in the target market were slow, cluttered, and had poor offline support — a dealbreaker in areas with unstable connectivity.",
            },
            {
                heading: "The Approach",
                body: "I chose React Native + Expo for a single codebase that ships to both platforms, and paired it with a lightweight Node/Express backend for speed. TailwindCSS (via NativeWind) kept the design system consistent and easy to iterate on.",
            },
            {
                heading: "Results",
                body: "The beta launched to 500 users and achieved a 4.8 ★ App Store rating within the first month, with an average booking-to-confirmation time of under 8 seconds.",
            },
        ],
    },

    library: {
        title: "Library Management Platform",
        tagline: "A modern system for managing books, members, and loans.",
        description:
            "A full-stack web application that digitises library operations — cataloguing, member management, loan tracking, and overdue alerts — replacing spreadsheets with a clean, role-based dashboard.",
        image: "/images/project2.png",
        alt: "Library Management Platform",
        bgColor: "#FFEFDB",
        tags: ["Next.js", "PostgreSQL", "Prisma", "TailwindCSS", "NextAuth", "Vercel"],
        year: "2024",
        role: "Full-Stack Developer",
        liveUrl: "https://library.yourdomain.com",
        repoUrl: "https://github.com/you/library",
        highlights: [
            "Role-based access control for admins, librarians, and members",
            "Barcode scanning integration for fast book check-in / check-out",
            "Automated overdue email alerts via cron jobs",
            "Advanced search with filters by genre, author, and availability",
            "Audit log tracking every state change for accountability",
        ],
        sections: [
            {
                heading: "The Problem",
                body: "The client library was managing thousands of books and hundreds of active members through a patchwork of Excel files and paper forms, leading to frequent errors and lost records.",
            },
            {
                heading: "The Approach",
                body: "I built a Next.js App Router application backed by PostgreSQL (via Prisma ORM) and deployed to Vercel. NextAuth handled multi-role authentication, and a job queue managed scheduled email reminders.",
            },
            {
                heading: "Results",
                body: "Processing time for check-in/check-out dropped by 70%. Overdue rates fell by 45% in the first quarter after automated reminders launched.",
            },
        ],
    },

    "yc-directory": {
        title: "YC Directory — A Startup Showcase App",
        tagline: "Discover and share the startups shaping tomorrow.",
        description:
            "A community platform where founders submit their startups and visitors can browse, filter, and upvote projects. Inspired by Y Combinator's startup directory, built with Next.js and Sanity CMS.",
        image: "/images/project3.png",
        alt: "YC Directory App",
        bgColor: "#FFE7EB",
        tags: ["Next.js 15", "Sanity CMS", "TypeScript", "TailwindCSS", "Sentry", "Vercel"],
        year: "2024",
        role: "Front-End Developer",
        liveUrl: "https://yc-directory.yourdomain.com",
        repoUrl: "https://github.com/you/yc-directory",
        highlights: [
            "Sanity Studio for structured startup content with real-time preview",
            "Server-side search with full-text indexing via GROQ queries",
            "Partial Pre-Rendering (PPR) for near-instant page loads",
            "GitHub OAuth for frictionless sign-in",
            "Sentry integration for error monitoring and performance tracing",
        ],
        sections: [
            {
                heading: "The Problem",
                body: "Founders launching indie or early-stage startups had no single, clean place to get visibility without paying for ads or submitting to bloated product directories.",
            },
            {
                heading: "The Approach",
                body: "Sanity CMS gave editors full control over content without touching code. Next.js 15 App Router with Partial Pre-Rendering ensured pages felt instant even on slow connections.",
            },
            {
                heading: "Results",
                body: "Over 200 startups submitted within the first two weeks of launch. Average session duration was 4 min 20 sec, significantly above the industry average for directory sites.",
            },
        ],
    },
};

// ─── Static params (optional but recommended for static export / ISR) ─────────
export async function generateStaticParams() {
    return Object.keys(projectData).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = projectData[slug];
    if (!project) return {};
    return {
        title: project.title,
        description: project.description,
    };
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = projectData[slug];

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white">

            {/* ── Back navigation ── */}
            <div className="max-w-5xl mx-auto px-6 pt-10">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                >
                    <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
                    Back to projects
                </Link>
            </div>

            {/* ── Hero ── */}
            <header className="max-w-5xl mx-auto px-6 pt-12 pb-10">
                <p className="text-sm font-medium uppercase tracking-widest text-white/40 mb-4">
                    {project.year} &nbsp;·&nbsp; {project.role}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                    {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
                    {project.description}
                </p>
            </header>

            {/* ── Cover image ── */}
            <div
                className="w-full max-w-5xl mx-auto px-6"
                style={project.bgColor ? { backgroundColor: project.bgColor, borderRadius: "1rem", padding: "2rem" } : {}}
            >
                <div className="overflow-hidden rounded-2xl">
                    <Image
                        src={project.image}
                        alt={project.alt}
                        width={1200}
                        height={750}
                        priority
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>

            {/* ── Meta row ── */}
            <div className="max-w-5xl mx-auto px-6 mt-12">
                <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-white/70"
                        >
              {tag}
            </span>
                    ))}
                </div>
            </div>

            {/* ── Links ── */}
            <div className="max-w-5xl mx-auto px-6 mt-8 flex flex-wrap gap-4">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
                    >
                        View Live
                        <span aria-hidden>↗</span>
                    </a>
                )}
                {project.repoUrl && (
                    <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-sm font-semibold hover:bg-white/5 transition-colors duration-200"
                    >
                        Source Code
                        <span aria-hidden>↗</span>
                    </a>
                )}
            </div>

            {/* ── Divider ── */}
            <div className="max-w-5xl mx-auto px-6 mt-16">
                <hr className="border-white/10" />
            </div>

            {/* ── Highlights ── */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold mb-8">Key Highlights</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                    {project.highlights.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]"
                        >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60">
                {i + 1}
              </span>
                            <span className="text-sm text-white/75 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── Story sections ── */}
            <section className="max-w-5xl mx-auto px-6 mt-16 pb-24 space-y-14">
                {project.sections.map((s) => (
                    <div key={s.heading}>
                        <h2 className="text-2xl font-bold mb-4">{s.heading}</h2>
                        <p className="text-white/60 leading-relaxed max-w-3xl">{s.body}</p>
                    </div>
                ))}
            </section>

        </main>
    );
}
