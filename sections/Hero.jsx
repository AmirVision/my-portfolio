"use client";

import { useRef } from "react";
import { words } from "@/lib/constants.ts";
import Button from "@/components/Button";
import HeroExperience from "@/components/Models/HeroModels/HeroExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import dynamic from "next/dynamic";

const AnimatedCounter = dynamic(() => import("@/components/AnimatedCounter"), {
    loading: () => <div className="h-32" />,
});

const Hero = () => {
    const heroRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            ".hero-text h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    }, { scope: heroRef });

    return (
        <section
            id="hero"
            ref={heroRef}
            className="relative overflow-hidden"
            aria-label="بخش اصلی"
            dir="rtl"
        >
            {/* پس‌زمینه */}
            <div className="absolute z-10 top-0 right-0">
                <Image
                    src="/images/bg.png"
                    alt=""
                    width={1920}
                    height={1080}
                    priority
                    className="w-auto h-auto"
                    style={{ width: "auto", height: "auto" }}
                />
            </div>

            <div className="hero-layout">
                {/* سمت چپ (RTL): مدل سه‌بعدی */}
                <figure aria-label="مدل سه‌بعدی اتاق">
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>

                {/* سمت راست (RTL): محتوای هیرو */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>
                                تبدیل
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                            <span
                                                key={`${word.text}-${index}`}
                                                className="flex items-center md:gap-3 gap-1 pb-2 flex-row-reverse"
                                            >
                                                <Image
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    width={48}
                                                    height={48}
                                                    className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                                />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>به پروژه‌های واقعی</h1>
                            <h1>که نتیجه می‌دهند</h1>
                        </div>

                        <p className="text-white-50 md:text-xl relative z-10 max-w-lg text-right">
                            سلام، من امیررضام، توسعه‌دهنده‌ای مقیم ایران که عاشق کدنویسی‌ام.
                            <br />
                            خوشحال می‌شم باهاتون همکاری کنم — تماس بگیرید.
                        </p>

                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="مشاهده کارهایم"
                        />
                    </div>
                </header>
            </div>

            <AnimatedCounter />
        </section>
    );
};

export default Hero;