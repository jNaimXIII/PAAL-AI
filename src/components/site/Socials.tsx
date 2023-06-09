import { FC } from "react";
import "./Socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

type SocialsProps = {
    large?: boolean;
};

const Socials: FC<SocialsProps> = ({ large = false }) => {
    const socialLinks = [
        {
            icon: faFacebook,
            link: "https://facebook.com/",
        },
        {
            icon: faInstagram,
            link: "https://instagram.com/",
        },
        {
            icon: faTwitter,
            link: "https://twitter.com/",
        },
        {
            icon: faLinkedin,
            link: "https://linkedin.com/",
        },
    ];

    return (
        <div className={`socials ${large ? "large-icons" : ""}`}>
            {socialLinks.map(({ link, icon }, index) => (
                <a className="social-link" href={link} key={index}>
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))}
        </div>
    );
};

export default Socials;
