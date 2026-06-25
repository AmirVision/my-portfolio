"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/lib/constants";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // اسکرول نرم با احتساب ارتفاع نوار ثابت بالا
    const scrollToSection = useCallback((e, href) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const el = document.getElementById(id);
        if (!el) return;

        const navHeight = 100; // ارتفاع تقریبی نوار بالا
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
    }, []);

    return (
        <header
            className={`navbar font-koodak ${scrolled ? "scrolled" : "not-scrolled"}`}
            role="banner"
            dir="rtl"
        >
            <div className="inner">

                {/* Logo */}
                <a
                    href="#hero"
                    onClick={(e) => scrollToSection(e, "#hero")}
                    className="logo"
                    aria-label="رفتن به خانه"
                >
                    امیررضا محمدی
                </a>

                <nav className="desktop" aria-label="ناوبری اصلی">
                    <ul role="list">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a
                                    href={link}
                                    onClick={(e) => scrollToSection(e, link)}
                                    className="hover:text-white/80 transition-colors"
                                >
                                    <span>{name}</span>
                                    <span className="underline" aria-hidden="true" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Contact Button */}
                <a
                    href="#contact"
                    onClick={(e) => scrollToSection(e, "#contact")}
                    className="contact-btn group"
                >
                    <div className="inner">
                        <span>تماس با من</span>
                    </div>
                </a>

            </div>
        </header>
    );
};

export default NavBar;