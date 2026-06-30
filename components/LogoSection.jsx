import Image from "next/image";
import { logoIconsList } from "@/lib/constants.ts";

const LogoIcon = ({ icon }) => {
    return (
        <div className="flex-none flex-center marquee-item">
            <Image
                src={icon.imgPath}
                alt={icon.name || "Partner logo"}
                width={200}
                height={80}
                className="h-auto w-auto"
                style={{ maxHeight: '100%', width: 'auto' }}
                loading="lazy"
            />
        </div>
    );
};

const LogoSection = () => {
    return (
        <section
            className="relative"
            aria-label="Technologies and partners"
        >
            <div className="gradient-edge pointer-events-none" aria-hidden="true" />
            <div className="gradient-edge pointer-events-none" aria-hidden="true" />

            <div className="marquee h-52">
                <div className="marquee-box md:gap-12 gap-5">
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={`first-${icon.name || index}`}
                            icon={icon}
                        />
                    ))}
                    {logoIconsList.map((icon, index) => (
                        <LogoIcon
                            key={`second-${icon.name || index}`}
                            icon={icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LogoSection;