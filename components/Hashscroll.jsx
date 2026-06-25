"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const NAV_HEIGHT = 100; // همان مقداری که در NavBar استفاده شده

// بعد از باز شدن صفحه، اگر URL شامل #بخش باشد، به آن بخش اسکرول می‌کند.
// منتظر می‌ماند تا المنت مورد نظر واقعاً در صفحه ساخته شود تا اسکرول درست بنشیند.
export default function HashScroll() {
    const pathname = usePathname();

    useEffect(() => {
        const { hash } = window.location;
        if (!hash) return;

        const id = decodeURIComponent(hash.slice(1));
        let raf;
        let settle;
        let tries = 0;

        const scrollToTarget = (behavior) => {
            const el = document.getElementById(id);
            if (!el) return false;
            const top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
            window.scrollTo({ top, behavior });
            return true;
        };

        const waitForEl = () => {
            if (scrollToTarget("smooth")) {
                // یک تصحیح نهایی بعد از چیده‌شدن کامل صفحه (لود تصاویر و ...)
                settle = setTimeout(() => scrollToTarget("auto"), 350);
                return;
            }
            if (tries++ < 60) raf = requestAnimationFrame(waitForEl);
        };

        raf = requestAnimationFrame(waitForEl);

        return () => {
            cancelAnimationFrame(raf);
            clearTimeout(settle);
        };
    }, [pathname]);

    return null;
}