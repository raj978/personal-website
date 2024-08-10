import React from "react";
import {FaFileAlt} from "react-icons/fa";
import LectureScribe from "../public/assets/aggieScribe.jpg";
import PureChart from "../public/assets/pureChart.jpg";
import ProductTrack from "../public/assets/productTrack.png";
import shimmerBtn from "@/components/ui/MacBook-intro/shimmer-btn";


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Machine Learning Intern",
        location: "Skyhigh Security",
        description:
            "Currently working on a Machine Learning model running asynchronously with the CASB big data pipeline",
        icon: React.createElement("img", { src:"/assets/skyhigh.png", alt: "Skyhigh Logo", style: { objectFit: "scale-down" ,height: "100%", width: "100%", overflow: "hidden" } }),
        date: "2024",
        button: "",
    },
    {
        title: "Open Source Developer",
        location: "CodeLab@UCDavis",
        description:[
            "-> Built Espresso, an Interactive learning tool inspired by the likes of Anki and Quizlet",
            " -> Contributed 2K+ lines of Ruby code to the PureChart Rails gem, which allows for customizing charts on Rails",
        ],
        icon: React.createElement("img", { src:"/assets/codelab.png", alt: "Codelab Logo", style: { objectFit: "contain" ,height: "100%", width: "100%", overflow: "hidden" } }),
        date: "2024 - Present",
        button: "",
    },
    {
        title: "Controls Engineer",
        location: "UC Davis EcoCar EV Team",
        description:[
            "Developing a Model Predictive control system for the 2023 Ford Cadillac Lyriq, to enable for autonomous longitudinal cruise control.",
        ],
        icon: React.createElement("img", { src:"/assets/ucdev.png", alt: "UCD EcoCar Logo", style: { objectFit: "contain" ,height: "100%", width: "100%", overflow: "hidden" } }),
        date: "2023 - Present",
        button: "",
    },
    {
        title: "Crew Member @ Team-2489 The Insomniacs",
        location: "First Robotics Competition",
        description:
            "Team advanced to the Houston Championship after winning at the Silicon Valley Regionals 2023 with a record of 6-4-0.",
        icon: React.createElement("img", { src:"/assets/First.png", alt: "FIRST Logo", style: { objectFit: "contain", height: "90%", width: "90%", overflow: "hidden" } }),
        date: "2022-2023",
        button: "",
    },
    {
        title: "Quality Assurance Intern",
        location: "Ome",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement("img", { src:"/assets/ome.png", alt: "Ome Logo", style: { objectFit: "contain" ,height: "100%", width: "100%", overflow: "hidden" } }),
        date: "2022",
        button: "",
    },
    {
        title: "Engineering Intern",
        location: "Matrecomm Technologies",
        description: "Engineered schematics for a custom Network chip giving Laptops access to the internet on the go using XML and Autodesk Eagle.",
        icon: React.createElement("img", { src:"/assets/Matrecommpng.png", alt: "Matrecomm Logo", style: { objectFit: "contain" ,height: "100%", width: "100%", overflow: "hidden" } }),
        date: "July 2018 - October 2018",
        button: "",
    },{
        title: "",
        location: "",
        description: "",
        icon: React.createElement(FaFileAlt, { style: { color: "black" } }),
        date: "",
        button: React.createElement(shimmerBtn)
    },
] as const;

export const projectsData = [
    {
        title: "LectureScribe",
        description:
            "A simple web app to insert captions onto videos. ",
        tags: ["React.js", "Next.js", "AWS S3", "Tailwind CSS", "ffmpeg"],
        imageUrl: LectureScribe,
        githubUrl: "https://github.com/raj978/AggieScribe",
        liveSiteUrl: "https://aggie-scribe.vercel.app/",
    },
    {
        title: "PureChart",
        description:
            "Ruby gem for customizing charts on Rails, avoiding rendering issues and enhancing customization on Javascript or HTML(canvas) elements.",
        tags: ["Ruby", "Ruby on Rails", "eHTML", "Javascript", "CSS"],
        imageUrl: PureChart,
        githubUrl: "https://github.com/PureChart/purechart",
        liveSiteUrl: "https://purechart.org/",
    },
    {
        title: "Product Track",
        description:
            "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "BrightData", "Cheerio"],
        imageUrl: ProductTrack,
        githubUrl: "https://github.com/raj978/product-track",
        liveSiteUrl: "",
    },
] as const;

export const resumeUrl = "https://drive.google.com/file/d/1yamaAFZ5UYfF6ZUextz85sCHtmQMXk6S/view?usp=sharing";

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "Java",
    "C/C++",
    "MATLAB",
    "Linux",
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "MongoDB",
    "PyTorch",
    "TensorFlow",
    "Express",
    "PostgreSQL",
    "AWS",
    "Docker",
] as const;
