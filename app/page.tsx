import Hero from "@/sections/Hero";
import ShowCaseSection from "@/sections/ShowCase";
import LogoSection from "@/components/LogoSection";
import FeatureCards from "@/sections/FeatureCards";
import ExperienceSection from "@/sections/Experience";
import TechStack from "@/sections/TechStack";
import Testimonials from "@/sections/Testimonials";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <>
            <Hero />
            <ShowCaseSection />
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <Contact />
        </>
    );
}