import { socialImgs } from "@/lib/constants.ts";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a
                        href="/"
                        className="hover:text-white/80 transition-colors duration-200"
                        aria-label="Visit my blog"
                    >
                        Visit My Blog
                    </a>
                </div>

                <div className="socials">
                    {socialImgs.map((img) => (
                        <a
                            className="icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            href={img.url}
                            key={img.url}
                            aria-label={img.name}
                        >
                            <Image
                                src={img.imgPath}
                                alt={img.name}
                                width={24}
                                height={24}
                                loading="lazy"
                            />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center md:items-start">
                    <p className="text-center md:text-end">
                        © {currentYear} Amirreza Mohammadi. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;