"use client"

import dynamic from "next/dynamic";
import { counterItems } from "@/lib/constants.ts";

// Lazy load CountUp — it's below the fold
const CountUp = dynamic(() => import("react-countup"), {
    loading: () => <span>0</span>,
    ssr: false,
});

const AnimatedCounter = () => {
    return (
        <section
            id="counter"
            className="padding-x-lg xl:mt-0 mt-32"
            aria-label="Statistics"
        >
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item) => (
                    <div
                        key={item.label}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center items-center text-center hover:bg-zinc-800 transition-colors duration-300"
                    >
                        <div className="counter-number text-white text-5xl font-bold mb-2">
                            <CountUp
                                suffix={item.suffix}
                                end={item.value}
                                duration={2.5}
                                enableScrollSpy
                                scrollSpyOnce
                            />
                        </div>
                        <p className="text-white-50 text-lg">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AnimatedCounter;