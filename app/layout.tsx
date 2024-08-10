import type { Metadata } from "next";
import {JetBrains_Mono} from "next/font/google";
import "./globals.css";
import ThemeContextProvider from "@/context/theme-context";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ui/theme-switch";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
    variable: "--font-jetbrainsMono",
});
export const metadata: Metadata = {
  title: "Rajat's Personal Portfolio",
  description: "Rajat Gupta is a full-stack developer with 6 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${jetbrainsMono.variable} bg-gray-50 text-gray-950 relative pt-20 xl:pt-0 sm:pt-20 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Analytics />
                        <SpeedInsights />
                        <Toaster position="bottom-center" />
                        <ThemeSwitch />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
