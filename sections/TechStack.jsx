"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/Models/TechLogos/TechIconCardExperience.jsx";
import { techStackIcons } from "@/lib/constants.ts";

const LazyTechIcon = ({ model }) => {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    io.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    return (
        <div ref={ref} className="tech-icon-wrapper">
            {visible && <TechIconCardExperience model={model} />}
        </div>
    );
};

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: { trigger: "#skills", start: "top center" },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding font-koodak" dir="rtl">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="چگونه می‌توانم کمک کنم و مهارت‌های کلیدی من"
                    sub="🤝 آنچه به میز می‌آورم"
                />
                <div className="tech-grid">
                    {techStackIcons.map((techStackIcon) => (
                        <div
                            key={techStackIcon.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <LazyTechIcon model={techStackIcon} />
                                <div className="padding-x w-full">
                                    <p className="text-center">{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;