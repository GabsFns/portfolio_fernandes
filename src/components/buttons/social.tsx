import { FaInstagram, FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

type SocialButtonProps = {
    type: "instagram" | "github" | "linkedin" | "behance",
    url?: string,
    size?: number,
    color?: string
}

export default function SocialButton({ type, url, size = 24, color = "#000"}: SocialButtonProps){
    const icons ={
        instagram: <FaInstagram size={size} color={color}/>,
        github: <FaGithub size={size} color={color}/>,
        linkedin: <FaLinkedin size={size} color={color}/>,
        behance: <FaBehance size={size} color={color}/>,
    }

    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            {icons[type]}
        </a>
    )
}