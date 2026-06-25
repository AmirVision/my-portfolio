"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { FEATURED_PROJECT, OTHER_PROJECTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

/* Up-left arrow = "forward" in RTL */
function Arrow({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
            aria-hidden="true"
        >
            <path d="M17 17 7 7" />
            <path d="M7 17V7h10" />
        </svg>
    );
}

function ProjectCard({ project, cardRef, featured = false }) {
    const title = project.cardTitle ?? project.title;

    /* ---------- Featured: full-bleed hero with text over the image ---------- */
    if (featured) {
        return (
            <article ref={cardRef} className="group lg:col-span-2">
                <Link
                    href={`/work/${project.slug}`}
                    className="block rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                    <div className="relative min-h-[440px] overflow-hidden rounded-3xl border border-white/10 transition-all duration-500 group-hover:border-white/25 group-hover:shadow-2xl group-hover:shadow-black/50 md:min-h-[520px]">
                        <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            sizes="100vw"
                            priority
                            className={`object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04] ${project.bgColor || ""}`}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-7 md:p-12">
                            {project.category && (
                                <span className="w-fit rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
                                    {project.category}
                                </span>
                            )}

                            <h2 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl">
                                {title}
                            </h2>

                            {project.cardDescription && (
                                <p className="max-w-2xl leading-relaxed text-white/70 md:text-xl">
                                    {project.cardDescription}
                                </p>
                            )}

                            <span className="mt-1 inline-flex items-center gap-2 text-base font-medium text-white/85 transition-colors group-hover:text-white">
                                مشاهده پروژه
                                <Arrow className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                            </span>
                        </div>
                    </div>
                </Link>
            </article>
        );
    }

    /* ---------- Standard: image on top, text below ---------- */
    return (
        <article ref={cardRef} className="group">
            <Link
                href={`/work/${project.slug}`}
                className="block h-full rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
                <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:bg-white/[0.06] group-hover:shadow-2xl group-hover:shadow-black/40">
                    <div className={`relative aspect-[16/11] overflow-hidden ${project.bgColor || ""}`}>
                        <Image
                            src={project.image}
                            alt={project.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            loading="lazy"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </div>

                    <div className="flex flex-1 flex-col gap-3 p-6">
                        {project.category && (
                            <span className="text-xs text-white/50">{project.category}</span>
                        )}

                        <h3 className="text-xl font-bold text-white md:text-2xl">
                            {title}
                        </h3>

                        <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                            مشاهده پروژه
                            <Arrow className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
                        </span>
                    </div>
                </div>
            </Link>
        </article>
    );
}

export default function AppShowcase() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const featuredRef = useRef(null);
    const listRefs = useRef([]);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        // Animations only run when the user hasn't requested reduced motion.
        mm.add("(prefers-reduced-motion: no-preference)", () => {
            gsap.fromTo(
                headingRef.current,
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top bottom-=80",
                    },
                }
            );

            const cards = [featuredRef.current, ...listRefs.current].filter(Boolean);

            cards.forEach((card, index) => {
                gsap.fromTo(
                    card,
                    { y: 60, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        delay: index * 0.08,
                        scrollTrigger: {
                            trigger: card,
                            start: "top bottom-=100",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        });

        return () => mm.revert();
    }, []);

    return (
        <section
            id="work"
            ref={sectionRef}
            className="app-showcase font-koodak"
            aria-label="پروژه‌های من"
            dir="rtl"
        >
            <div className="mx-auto w-full max-w-7xl px-5 py-20 md:px-8 md:py-28">
                <div ref={headingRef} className="mb-12 md:mb-16">
                    <p className="mb-3 text-sm text-white/50">نمونه کارها</p>
                    <h2 className="text-3xl font-bold text-white md:text-5xl">
                        پروژه‌های من
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <ProjectCard
                        project={FEATURED_PROJECT}
                        cardRef={featuredRef}
                        featured
                    />

                    {OTHER_PROJECTS.map((project, i) => (
                        <ProjectCard
                            key={project.slug}
                            project={project}
                            cardRef={(el) => (listRefs.current[i] = el)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}