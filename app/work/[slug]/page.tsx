import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PROJECTS } from "@/lib/constants";

// ─── Static params (optional but recommended for static export / ISR) ─────────
export async function generateStaticParams() {
    return Object.keys(PROJECTS).map((slug) => ({ slug }));
}

// ─── Metadata ────────────────────────────────────────────────────────────────
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const project = PROJECTS[slug];
    if (!project) return {};
    return {
        title: project.title,
        description: project.description,
    };
}

// ─── Page Component ──────────────────────────────────────────────────────────
export default async function ProjectPage({ params }) {
    const { slug } = await params;
    const project = PROJECTS[slug];

    if (!project) notFound();

    return (
        <main className="min-h-screen bg-[#0a0a0a] text-white" dir="rtl">

            {/* ── ناوبری بازگشت ── */}
            <div className="max-w-5xl mx-auto px-6 pt-10">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200 group"
                >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                    بازگشت به پروژه‌ها
                </Link>
            </div>

            {/* ── معرفی ── */}
            <header className="max-w-5xl mx-auto px-6 pt-12 pb-10">
                <p className="text-sm font-medium text-white/40 mb-4">
                    {project.year} &nbsp;·&nbsp; {project.role}
                </p>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
                    {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-3xl">
                    {project.description}
                </p>
            </header>

            {/* ── تصویر کاور ── */}
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

            {/* ── ردیف برچسب‌ها ── */}
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

            {/* ── لینک‌ها ── */}
            <div className="max-w-5xl mx-auto px-6 mt-8 flex flex-wrap gap-4">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-colors duration-200"
                    >
                        مشاهده‌ی نسخه‌ی زنده
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
                        کد منبع
                        <span aria-hidden>↗</span>
                    </a>
                )}
            </div>

            {/* ── جداکننده ── */}
            <div className="max-w-5xl mx-auto px-6 mt-16">
                <hr className="border-white/10" />
            </div>

            {/* ── ویژگی‌های کلیدی ── */}
            <section className="max-w-5xl mx-auto px-6 mt-16">
                <h2 className="text-2xl font-bold mb-8">ویژگی‌های کلیدی</h2>
                <ul className="grid sm:grid-cols-2 gap-4">
                    {project.highlights.map((item, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.04] border border-white/[0.08]"
                        >
              <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs text-white/60">
                {(i + 1).toLocaleString("fa-IR")}
              </span>
                            <span className="text-sm text-white/75 leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── بخش‌های روایت ── */}
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