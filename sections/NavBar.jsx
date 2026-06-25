"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    // اسکرول نرم به بخش مورد نظر، با احتساب ارتفاع نوار ثابت بالا
    const smoothScrollTo = useCallback((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const navHeight = 100; // ارتفاع تقریبی نوار بالا
        const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top, behavior: "smooth" });
    }, []);

    // روی صفحه اصلی اسکرول نرم انجام می‌دهیم؛ روی صفحات داخلی
    // اجازه می‌دهیم لینک به صفحه اصلی برود و خودش به بخش مورد نظر بپرد
    const handleNavClick = useCallback(
        (e, hash) => {
            if (!isHome) return; // بگذار مرورگر به مسیر /#... برود
            e.preventDefault();
            smoothScrollTo(hash.replace("#", ""));
        },
        [isHome, smoothScrollTo]
    );

    // روی صفحه اصلی href همان #hash است، روی بقیه صفحات /#hash می‌شود
    const hrefFor = (hash) => (isHome ? hash : `/${hash}`);

    return (
        <header
            className={`navbar font-koodak ${scrolled ? "scrolled" : "not-scrolled"}`}
            role="banner"
            dir="rtl"
        >
            <div className="inner">

                {/* Logo */}
                <a
                    href={hrefFor("#hero")}
                    onClick={(e) => handleNavClick(e, "#hero")}
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
                                    href={hrefFor(link)}
                                    onClick={(e) => handleNavClick(e, link)}
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
                    href={hrefFor("#contact")}
                    onClick={(e) => handleNavClick(e, "#contact")}
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