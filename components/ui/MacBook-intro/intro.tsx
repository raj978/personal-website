"use client";
import ScrollDownIndicator from "@/components/ui/MacBook-intro/scroll-arrow";
import {GitHubLogo, LinkedInLogo, ResumeDownloadIcon} from "@/components/ui/MacBook-intro/badges";
import {MacbookScroll} from "@/components/ui/MacBook-intro/macbook";
import React, {useEffect, useState} from "react";
import Hero from "@/components/Hero";
import {LinkPreview} from "@/components/ui/link-preview";
import {resumeUrl} from "@/lib/data";

export default function Intro() {
    const [screenWidth, setScreenWidth] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setScreenWidth(window.innerWidth);

            const handleResize = () => {
                setScreenWidth(window.innerWidth);
            };

            window.addEventListener("resize", handleResize);
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);

    if (screenWidth < 768) {
        return(
            <div>
                <Hero />
            </div>
        );
    }
    return (
        <MacbookScroll
            title={
                <div className="flex">
                    <span>Welcome <br/> Scroll Down to start Exploring!</span>
                    <ScrollDownIndicator/>

                </div>
            }
            badges={[
                <LinkPreview url="https://github.com/raj978">
                    <GitHubLogo className="h-8 w-8"/>
                </LinkPreview>,
                <LinkPreview url="https://linkedin.com/in/rajat-mahesh-gupta">
                    <LinkedInLogo className="h-8 w-8"/>
                </LinkPreview>,
                <LinkPreview url={resumeUrl}>
                    <ResumeDownloadIcon className="h-8 w-8"/>
                </LinkPreview>,
            ]}
        />
    );
}

