import Hero from "@/sections/Hero";
import ShowCaseSection from "@/sections/ShowCase";
import LogoSection from "@/components/LogoSection";
import FeatureCards from "@/sections/FeatureCards";
import TechStack from "@/sections/TechStack";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";
import HashScroll from "@/components/Hashscroll";

export default function Home() {
    return (
        <>
            <HashScroll />
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeatureCards />
            <TechStack />
            <Testimonials />
            <Contact />
        </>
    );
}