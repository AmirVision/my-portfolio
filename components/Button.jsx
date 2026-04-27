"use client"

import Image from "next/image";

const SCROLL_OFFSET_RATIO = 0.15;
const TARGET_ID = "counter";

const Button = ({ text, className, id }) => {
    const handleClick = (e) => {
        e.preventDefault();

        if (!id) return;

        const target = document.getElementById(TARGET_ID);
        if (!target) return;

        const offset = window.innerHeight * SCROLL_OFFSET_RATIO;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;

        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <a
            onClick={handleClick}
            href={`#${id}`}
            className={`${className ?? ""} cta-wrapper`}
            aria-label={text}
        >
            <div className="cta-button group">
                <div className="bg-circle" aria-hidden="true" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <Image
                        src="/images/arrow-down.svg"
                        alt=""
                        width={20}
                        height={20}
                        aria-hidden="true"
                    />
                </div>
            </div>
        </a>
    );
};

export default Button;