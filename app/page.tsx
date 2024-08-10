import React from 'react';
import Intro from '@/components/ui/MacBook-intro/intro';
import DynamicPaddingWrapper from "@/components/ui/MacBook-intro/dynamicPaddingWrapper";
import About from "@/components/About";
import Projects from "@/components/proj";
import Skills from "@/components/Skills";
import Experience from "@/components/experience";
import Contact from "@/components/Contact";

export default function Home() {

    return (
        <main className="flex flex-col items-center px-4">
            <Intro/>
            <DynamicPaddingWrapper >
                <About />
            </DynamicPaddingWrapper>
            <Projects />
            <Skills />
            <Experience />
            <Contact />
        </main>
    );
}
