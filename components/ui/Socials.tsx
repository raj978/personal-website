import React from 'react';
import {FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTelegram} from "react-icons/fa";
import {LinkPreview} from "@/components/ui/link-preview";

const socials = [
    {icon: <FaGithub />, link: "https://github.com/raj978"},
    {icon: <FaLinkedin />, link: "https://www.linkedin.com/in/rajat-mahesh-gupta/"},
    {icon: <FaInstagram />, link: "https://www.instagram.com/rajattt.978/"},
    {icon: <FaDiscord />, link: "https://discord.com/users/731167632534929429"},
    {icon: <FaTelegram />, link: "https://t.me/rajat978"}
];

interface SocialsProps {
    containerStyles: string;
    iconStyles: string;
}

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((social, index) => (
                <LinkPreview key={index} url={social.link} className={iconStyles}>
                    {social.icon}
                </LinkPreview>
            ))}
        </div>
    );
};

export default Socials;
