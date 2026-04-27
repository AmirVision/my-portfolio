"use client"

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// Project data — move to lib later if reused
const projects = {
    ryde: {
        title: "On-Demand Rides Made Simple with a Powerful, User-Friendly App called Ryde",
        description: "An app built with React Native, Expo, & TailwindCSS for a fast, user-friendly experience.",
        image: "/images/project1.png",
        alt: "Ryde App Interface",
    },
    library: {
        title: "The Library Management Platform",
        image: "/images/project2.png",
        alt: "Library Management Platform",
        bgColor: "bg-[#FFEFDB]",
    },
    ycDirectory: {
        title: "YC Directory - A Startup Showcase App",
        image: "/images/project3.png",
        alt: "YC Directory App",
        bgColor: "bg-[#FFE7EB]",
    },
};

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);

    useGSAP(() => {
        // Section fade in
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Staggered card animations
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
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
                    {/* Featured Project */}
                    <article
                        ref={rydeRef}
                        className="first-project-wrapper group cursor-pointer"
                    >
                        <div className="image-wrapper overflow-hidden rounded-xl">
                            <Image
                                src={projects.ryde.image}
                                alt={projects.ryde.alt}
                                width={800}
                                height={500}
                                priority
                                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="text-content">
                            <h2>{projects.ryde.title}</h2>
                            <p className="text-white-50 md:text-xl leading-relaxed">
                                {projects.ryde.description}
                            </p>
                        </div>
                    </article>

                    {/* Secondary Projects */}
                    <div className="project-list-wrapper overflow-hidden">
                        <article ref={libraryRef} className="project group cursor-pointer">
                            <div className={`image-wrapper ${projects.library.bgColor} overflow-hidden rounded-xl`}>
                                <Image
                                    src={projects.library.image}
                                    alt={projects.library.alt}
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h2>{projects.library.title}</h2>
                        </article>

                        <article ref={ycDirectoryRef} className="project group cursor-pointer">
                            <div className={`image-wrapper ${projects.ycDirectory.bgColor} overflow-hidden rounded-xl`}>
                                <Image
                                    src={projects.ycDirectory.image}
                                    alt={projects.ycDirectory.alt}
                                    width={600}
                                    height={400}
                                    loading="lazy"
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <h2>{projects.ycDirectory.title}</h2>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppShowcase;