"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { FEATURED_PROJECT, OTHER_PROJECTS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

function ProjectCard({ project, cardRef, featured = false }) {
    return (
        <article
            ref={cardRef}
            className={featured ? "first-project-wrapper" : "project"}
        >
            <Link
                href={`/work/${project.slug}`}
                className="group block h-full cursor-pointer"
            >
                <div
                    className={`image-wrapper overflow-hidden rounded-xl ${
                        project.bgColor || ""
                    }`}
                >
                    <Image
                        src={project.image}
                        alt={project.alt}
                        width={featured ? 800 : 600}
                        height={featured ? 500 : 400}
                        priority={featured}
                        loading={featured ? undefined : "lazy"}
                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                <div className={featured ? "text-content" : ""}>
                    <h2>{project.cardTitle ?? project.title}</h2>

                    {featured && project.cardDescription && (
                        <p className="text-white-50 md:text-xl leading-relaxed">
                            {project.cardDescription}
                        </p>
                    )}
                </div>
            </Link>
        </article>
    );
}

export default function AppShowcase() {
    const sectionRef = useRef(null);
    const featuredRef = useRef(null);
    const listRefs = useRef([]);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [featuredRef.current, ...listRefs.current];

        cards.forEach((card, index) => {
            if (!card) return;

            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    return (
        <section
            id="work"
            ref={sectionRef}
            className="app-showcase"
            aria-label="پروژه‌های من"
            dir="rtl"
        >
            <div className="w-full">
                <div className="showcase-layout">
                    <ProjectCard
                        project={FEATURED_PROJECT}
                        cardRef={featuredRef}
                        featured={true}
                    />

                    <div className="project-list-wrapper overflow-hidden">
                        {OTHER_PROJECTS.map((project, i) => (
                            <ProjectCard
                                key={project.slug}
                                project={project}
                                cardRef={(el) => (listRefs.current[i] = el)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}