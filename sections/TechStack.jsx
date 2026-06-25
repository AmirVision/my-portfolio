"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/Models/TechLogos/TechIconCardExperience.jsx";
import { techStackIcons } from "@/lib/constants.ts";

const TechStack = () => {
    // انیمیشن کارت‌های تکنولوژی در بخش مهارت‌ها
    useGSAP(() => {
        // این انیمیشن زمانی فعال می‌شود که کاربر به wrapper با id #skills اسکرول کند
        // انیمیشن از زمانی شروع می‌شود که بالای wrapper به مرکز صفحه برسد
        // انیمیشن با stagger اجرا می‌شود، یعنی هر کارت به ترتیب ظاهر می‌شود
        gsap.fromTo(
            ".tech-card",
            {
                // مقادیر اولیه
                y: 50,
                opacity: 0,
            },
            {
                // مقادیر نهایی
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });

    return (
        <div id="skills" className="flex-center section-padding" dir="rtl">
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
                                <div className="tech-icon-wrapper">
                                    <TechIconCardExperience model={techStackIcon} />
                                </div>
                                <div className="padding-x w-full">
                                    <p className="text-right">{techStackIcon.name}</p>
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