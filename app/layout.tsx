import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/sections/NavBar";
import Footer from "@/sections/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const koodak = localFont({
    src: "../public/fonts/B Koodak Bold_0.ttf", // path relative to this file
    variable: "--font-koodak",
});

export const metadata: Metadata = {
    title: "امیررضا محمدی | پورتفولیو توسعه‌دهنده سه‌بعدی",
    description: "توسعه‌دهنده فول‌استک متخصص در تجربیات وب سه‌بعدی",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html
            lang="fa"
            dir="rtl"
            className={`h-full antialiased ${koodak.variable}`}
            suppressHydrationWarning
        >
        <body className="min-h-full flex flex-col bg-black text-white">

        <div className="absolute top-0 left-0 w-full h-screen z-0 pointer-events-none" />

        <NavBar />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
        <Analytics />
        </body>
        </html>
    );
}