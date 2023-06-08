import { FC } from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import PAALAILogo from "../../assets/site/paal-ai-logo.png";
import Button from "./Button";

const Footer: FC = () => {
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
        <footer className="site-footer site-content-container">
            <img src={PAALAILogo} alt="PAAL AI" />

            <div className="actions">
                <Button label="Whitepaper" />

                <div className="socials">
                    {socialLinks.map(({ link, icon }, index) => (
                        <a className="social-link" href={link} key={index}>
                            <FontAwesomeIcon icon={icon} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
