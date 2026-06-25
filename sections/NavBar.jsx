"use client";

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/lib/constants";
import Link from "next/link";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        // شنونده‌ی passive برای کارایی بهتر اسکرول
        window.addEventListener("scroll", handleScroll, { passive: true });
        // بررسی موقعیت اولیه‌ی اسکرول
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <header
            className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
            role="banner"
            dir="rtl"
        >
            <div className="inner">
                <Link
                    href="#hero"
                    className="logo"
                    aria-label="رفتن به خانه"
                    scroll={false}
                >
                    امیررضا محمدی
                </Link>

                <nav className="desktop" aria-label="ناوبری اصلی">
                    <ul role="list">
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <Link
                                    href={link}
                                    scroll={false}
                                    className="hover:text-white/80 transition-colors"
                                >
                                    <span>{name}</span>
                                    <span className="underline" aria-hidden="true" />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link
                    href="#contact"
                    className="contact-btn group"
                    scroll={false}
                >
                    <div className="inner">
                        <span>تماس با من</span>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default NavBar;