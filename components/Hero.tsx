"use client";
import React from 'react';
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import {FlipWords} from "@/components/ui/MacBook-intro/flip-words";
import {FiDownload} from "react-icons/fi";
import Socials from "@/components/ui/Socials";
import {BsArrowRight} from "react-icons/bs";
import Link from 'next/link';
import Photo from "@/components/ui/MacBook-intro/Photo";
import {LinkPreview} from "@/components/ui/link-preview";
import {resumeUrl} from "@/lib/data";

const Hero = () => {
    const { ref } = useSectionInView("Home", 0.5);
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
    const words = ["Full-Stack-Developer", "Project-Manager", "Low-Latency-Developer", "Entrepreneur", "Controls-Engineer", "Open-Source-Contributor"];
    return (
        <section
            ref={ref}
            id="home"
            className="h-full scroll-mt-[100rem]">
            <div className="container mx-auto h-full">
                <div className="flex items-center justify-center flex-col xl:flex-row  xl:pb-24">
                    {/*Text*/}
                    <div className="text-center xl:text-left pt-8 xl:mr-8 order-2 xl:order-none">
                        <FlipWords words={words} />
                        <h1 className="h1 mb-6">Hello I'm <br /> <span className="text-green-600 dark:text-accent">Rajat Gupta</span></h1>
                        <p className="max-w-[500px] mb-9">
                            I am passionate about solving important problems that drive real-world impact.
                        </p>
                        {/*Button and Socials*/}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <LinkPreview url={resumeUrl}>
                                <button
                                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-5 focus:ring-offset-slate-50 sm:mb-0 xl:mb-8">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#D1B3FF_25%,#B299FF_50%,#937FFF_75%,#393BB2_100%)] z-[-10]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-8 py-1 text-md font-medium hover:text-slate-200 text-accent backdrop-blur-3xl z-10">
                                        RESUME
                                        <FiDownload className="ml-3 text-xl"/>
                                    </span>
                                </button>
                            </LinkPreview>
                            <div className="mb-8 sm:mb-0 xl:mb-0">
                                <Socials containerStyles="flex gap-6 mb-8" iconStyles="w-9 h-9 border-green-600 dark:border-accent border rounded-full flex justify-center items-center text-green-600 dark:text-accent text-base hover:bg-accent dark:hover:bg-slate-200 hover:text-primary dark:hover:text-primary dark:hover:border-primary hover:transition-all duration-500"/>
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row items-center">
                            <Link
                                href="#contact"
                                className="group bg-gray-900 dark:bg-gray-700 text-white px-7 py-3 flex  items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:hover:bg-gray-500 active:scale-105 transition max-w-[230px]"
                                onClick={() => {
                                    setActiveSection("Contact");
                                    setTimeOfLastClick(Date.now());
                                }}
                            >
                                Contact me here{" "}
                                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                            </Link>
                        </div>
                    </div>
                    {/*Photo*/}
                    <div className="order-1 xl:order-none pb-8 xl:mb-0"><Photo /></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
