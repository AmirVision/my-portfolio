import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";
import LightRays from "@/components/LightRays";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
    title: "Amirreza Mohammadi | 3D Developer Portfolio",
    description: "Full-stack developer specializing in 3D web experiences",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
        <body className="min-h-full flex flex-col bg-black text-white">

        <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none">
            <LightRays
                raysOrigin="top-center-offset"
                raysColor="#00000"
                raysSpeed={0.5}
                lightSpread={0.9}
                rayLength={1.2}
                followMouse={true}
                mouseInfluence={0.6}
                noiseAmount={0.0}
                distortion={0.01}
            />
        </div>

        {/* Content scrolls underneath */}
        <NavBar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
        </body>
        </html>
    );
}