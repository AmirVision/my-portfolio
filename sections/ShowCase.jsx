"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = {
    ryde: {
        slug: "ryde",
        title:
            "On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde",
        description:
            "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.",
        image: "/images/project1.png",
        alt: "Ryde App Interface",
    },

    library: {
        slug: "library-management-platform",
        title: "The Library Management Platform",
        image: "/images/project2.png",
        alt: "Library Management Platform",
        bgColor: "bg-[#FFEFDB]",
    },

    ycDirectory: {
        slug: "yc-directory",
        title: "YC Directory - A Startup Showcase App",
        image: "/images/project3.png",
        alt: "YC Directory App",
        bgColor: "bg-[#FFE7EB]",
    },
};

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
                    <h2>{project.title}</h2>

                    {featured && project.description && (
                        <p className="text-white-50 md:text-xl leading-relaxed">
                            {project.description}
                        </p>
                    )}
                </div>
            </Link>
        </article>
    );
}

export default function AppShowcase() {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        const cards = [
            rydeRef.current,
            libraryRef.current,
            ycDirectoryRef.current,
        ];

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
            aria-label="My projects"
        >
            <div className="w-full">
                <div className="showcase-layout">
                    <ProjectCard
                        project={projects.ryde}
                        cardRef={rydeRef}
                        featured={true}
                    />

                    <div className="project-list-wrapper overflow-hidden">
                        <ProjectCard
                            project={projects.library}
                            cardRef={libraryRef}
                        />

                        <ProjectCard
                            project={projects.ycDirectory}
                            cardRef={ycDirectoryRef}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}