import {socialImgs} from "@/constants/index.ts";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <a href="/">Visit My Blog</a>
                </div>
                <div className="socials">
                    {socialImgs.map(img => (
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath} alt={img.name} />
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center items-center md:items-start">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Amirreza Mohammadi. All rights reserved.

                    </p>
                </div>
            </div>
        </footer>
    )
}


export default Footer;
