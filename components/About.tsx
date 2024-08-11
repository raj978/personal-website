"use client";
import React, {useEffect, useState} from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/ui/sectionHead";
import {useInView} from "react-intersection-observer";
import {LinkPreview} from "@/components/ui/link-preview";
import HighlightedText from "./ui/text-highlight";

export default function About() {
    const { ref } = useSectionInView("About");

    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [animationStep, setAnimationStep] = useState(0);
    useEffect(() => {
        if (inView) {
            const timers: NodeJS.Timeout[] = [];
            for (let i = 1; i <= 4; i++) {
                timers.push(setTimeout(() => setAnimationStep(i), i * 800));
            }
            return () => timers.forEach(timer => clearTimeout(timer));
        }
    }, [inView]);
    return (
        <motion.section
            ref={(node) => {
                ref(node);
                inViewRef(node);
            }}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{opacity: 0, y: 100}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.175}}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                Hey! I'm a student at the {" "}
                <HighlightedText animationStep={animationStep} step={1} lightColor="#A8E6A1" darkColor="#006400">
                    University of California, Davis
                </HighlightedText>
                {" "} pursuing a Bachelor's of Science (B.S)
                in {" "}
                <span className="font-medium relative">
                    <HighlightedText animationStep={animationStep} step={2} lightColor="#A8E6A1" darkColor="#006400">
                        Computer Science and Engineering
                    </HighlightedText>
                </span>, with an emphasis on Statistics
                and Machine Learning. Currently, I am a Machine Learning Intern at {" "}
                <span className="font-bold"><LinkPreview url="https://skyhighsecurity.com">Skyhigh Secrity</LinkPreview></span>.{" "} Here,
                I am developing and integrating an asynchronous ML model
                with a big data pipeline, utilizing powerful tools such as Hadoop and Apache Spark.
            </p>
            <p>
                Ever since being introduced to computers, I've worked on technology
                fields such as Robotics, CyberSecurity, IoT and Software Development.{" "}
                <span className="italic">My favorite part of programming</span> is {" "}
                <HighlightedText animationStep={animationStep} step={3} lightColor="#BBDEFB" darkColor="#5A9BD5">
                    the problem-solving aspect
                </HighlightedText>
                . I {" "}
                <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                React, Next.js, Node.js, and MongoDB
                </span>
                . Along with building things, I am always looking to
                learn and stay updated with new technologies.
            </p>
            <p>
                I am passionate about {" "}
                <HighlightedText animationStep={animationStep} step={4} lightColor="#FFCDD2" darkColor="#C2185B">
                    entrepreneurship
                </HighlightedText> and have been recognized as a {" "}
                <span className="font-medium">
                Keller Pathway Fellow
                </span>
                {" "} at UC Davis. This fellowship has provided me with the opportunity to develop my entrepreneurial
                skills and work on innovative projects.
            </p>
        </motion.section>
    );
}
