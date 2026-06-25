import { abilities } from "@/lib/constants.ts";
import Image from "next/image";

const FeatureCards = () => {
    return (
        <section
            className="w-full padding-x-lg"
            aria-label="توانایی‌ها و مهارت‌های من"
            dir="rtl"
        >
            <div className="mx-auto grid-3-cols">
                {abilities.map(({ imgPath, title, desc }) => (
                    <div
                        key={title}
                        className="card-border rounded-xl p-8 flex flex-col gap-4 hover:border-white/20 transition-colors duration-300"
                    >
                        <div className="size-14 flex items-center justify-center rounded-full bg-white/5">
                            <Image
                                src={imgPath}
                                alt={title}
                                width={32}
                                height={32}
                                loading="lazy"
                                className="size-8 object-contain"
                            />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2 text-right">
                            {title}
                        </h3>
                        <p className="text-white-50 text-lg leading-relaxed text-right">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeatureCards;