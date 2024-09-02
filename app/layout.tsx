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
import ScriptComponent from '@/components/ui/ScriptComponent';

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
            <head> 
                <ScriptComponent />
            </head>
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
                        {/* <Script id="reb2b-script" strategy="afterInteractive">
                            {`!function(){var reb2b=window.reb2b=window.reb2b||[];if(reb2b.invoked)return;reb2b.invoked=true;reb2b.methods=["identify","collect"];reb2b.factory=function(method){return function(){var args=Array.prototype.slice.call(arguments);args.unshift(method);reb2b.push(args);return reb2b;};};for(var i=0;i<reb2b.methods.length;i++){var key=reb2b.methods[i];reb2b[key]=reb2b.factory(key);}reb2b.load=function(key){var script=document.createElement("script");script.type="text/javascript";script.async=true;script.src="https://s3-us-west-2.amazonaws.com/b2bjsstore/b/"+key+"/reb2b.js.gz";var first=document.getElementsByTagName("script")[0];first.parentNode.insertBefore(script,first);};reb2b.SNIPPET_VERSION="1.0.1";reb2b.load("QOQRJHY08M62");}();`}
                        </Script> */}
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    );
}
