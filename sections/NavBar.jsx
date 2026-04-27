"use client"

import { useState, useEffect, useCallback } from "react";
import { navLinks } from "@/lib/constants.ts";
import Link from "next/link";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        setScrolled(window.scrollY > 10);
    }, []);

    useEffect(() => {
        // Use passive listener for better scroll performance
        window.addEventListener("scroll", handleScroll, { passive: true });
        // Check initial scroll position
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    return (
        <header
            className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
            role="banner"
        >
            <div className="inner">
                <Link
                    href="#hero"
                    className="logo"
                    aria-label="Go to homepage"
                    scroll={false}
                >
                    Amirreza Mohammadi
                </Link>

                <nav className="desktop" aria-label="Main navigation">
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
                        <span>Contact me</span>
                    </div>
                </Link>
            </div>
        </header>
    );
};

export default NavBar;