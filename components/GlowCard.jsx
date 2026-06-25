"use client"

import { useRef, useCallback } from "react";
import Image from "next/image";

const STAR_COUNT = 5;

const GlowCard = ({ card, index, children }) => {
    const cardRefs = useRef([]);

    const handleMouseMove = useCallback((index) => (e) => {
        const card = cardRefs.current[index];
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const mouseX = e.clientX - rect.left - rect.width / 2;
        const mouseY = e.clientY - rect.top - rect.height / 2;

        let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
        angle = (angle + 360) % 360;

        card.style.setProperty("--start", angle + 60);
    }, []);

    return (
        <div
            ref={(el) => {
                cardRefs.current[index] = el;
            }}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
            role="article"
        >
            {/* Glow effect */}
            <div className="glow" aria-hidden="true" />

            {/* Stars */}
            <div className="flex items-center gap-1 mb-5" aria-label="5 star rating">
                {Array.from({ length: STAR_COUNT }, (_, i) => (
                    <Image
                        key={i}
                        src="/images/star.webp"
                        alt=""
                        width={20}
                        height={20}
                        className="size-5"
                        aria-hidden="true"
                    />
                ))}
            </div>

            {/* Review text */}
            <div className="mb-5">
                <p className="text-white-50 text-lg leading-relaxed">
                    {card.review}
                </p>
            </div>

            {/* Children (author info) */}
            {children}
        </div>
    );
};

export default GlowCard;