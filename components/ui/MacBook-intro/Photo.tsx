"use client";
import {motion} from "framer-motion";
import Image from "next/image";
import {useTheme} from "@/context/theme-context";

const Photo = () => {
    const { theme } = useTheme();
    const strokeColor = theme === "dark" ? "#00ff99" : "#16a34a";
    return (
        <div className="w-full h-full relative xl:pt-0 sm:pt-8">
            <motion.div
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {delay: 0.5, duration: 0.4, ease: "easeIn"},
                }}
                className="relative w-[300px] h-[300px] xl:w-[506px] xl:h-[506px] mx-auto"
            >
                <motion.div
                    initial={{opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: {delay: 1, duration: 0.4, ease: "easeInOut"},
                    }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-light dark:mix-blend-lighten absolute"
                >
                    <Image
                        priority
                        quality={100}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        src={theme === "dark" ? "/assets/raj-night.png" : "/assets/raj-light.png"}
                        alt="Rajat's headshot"
                        className="object-contain mb-8 scale-90"
                    />
                </motion.div>
                <motion.svg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg">
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke={strokeColor}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{strokeDasharray: "24 10 0 0"}}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
}
export default Photo;
