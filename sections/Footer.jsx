import { socialImgs } from "@/lib/constants";
import Image from "next/image";

const Footer = () => {
    // سال جاری با ارقام فارسی (بدون جداکننده‌ی هزارگان)
    const currentYear = new Date()
        .getFullYear()
        .toLocaleString("fa-IR", { useGrouping: false });

    return (
        <footer className="footer" dir="rtl">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a
                        href="/"
                        className="hover:text-white/80 transition-colors duration-200"
                        aria-label="مشاهده‌ی وبلاگ من"
                    >
                        مشاهده‌ی وبلاگ من
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
                    <p className="text-center md:text-start">
                        © {currentYear} امیررضا محمدی. تمامی حقوق محفوظ است.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;