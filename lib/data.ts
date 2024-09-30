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
        description:[
            "--> Built Machine Learning model running asynchronously with the CASB big data pipeline improving anomaly detection accuracy by implementing advanced filtering techniques leveraging frameworks such as Apache Spark and Hadoop  ",
            "--> Reduced false positive security alerts by developing machine learning models using Python, Scikit-learn, and TensorFlow.",
            ""
        ],
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
            "Developed over 15 testing processes for an iOS app that controls a smart kitchen knob. In doing so, I found and fixed major bugs and design issues by analyzing backend logs with Papertrail, ensuring the app worked smoothly and met user expectations.",
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
            "A webapp made to scrape the web to track prices with the ability to surpass CATPTCHAs and notify users to get the product at the best price.",
        tags: ["React", "Next.js", "MongoDB", "Tailwind", "BrightData", "Cheerio"],
        imageUrl: ProductTrack,
        githubUrl: "https://github.com/raj978/product-track",
        liveSiteUrl: "",
    },
] as const;

export const resumeUrl = "https://drive.google.com/file/d/1W8MzY9DWdDdDms6BJ2sJ4ZDVsoB-Zd4S/view?usp=sharing";

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
    "Hadoop",
    "Docker",
] as const;
