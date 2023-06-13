import { FC } from "react";
import "./Socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faTelegram,
    // faFacebook,
    // faInstagram,
    faTwitter,
    // faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import DexToolsIcon from "../../assets/icons/dextools.svg";

type SocialsProps = {
    large?: boolean;
};

const Socials: FC<SocialsProps> = ({ large = false }) => {
    // const socialLinks = [
    //     {
    //         icon: faFacebook,
    //         link: "https://facebook.com/",
    //     },
    //     {
    //         icon: faInstagram,
    //         link: "https://instagram.com/",
    //     },
    //     {
    //         icon: faTwitter,
    //         link: "https://twitter.com/",
    //     },
    //     {
    //         icon: faLinkedin,
    //         link: "https://linkedin.com/",
    //     },
    // ];

    return (
        <div className={`socials ${large ? "large-icons" : ""}`}>
            {/* {socialLinks.map(({ link, icon }, index) => (
                <a className="social-link" href={link} key={index} target="_blank">
                    <FontAwesomeIcon icon={icon} />
                </a>
            ))} */}

            <a
                className="social-link"
                href={"https://twitter.com/PaalMind"}
                target="_blank"
            >
                <FontAwesomeIcon icon={faTwitter} color="#1DA1F2" />
            </a>

            <a
                className="social-link"
                href={"https://t.me/paal_ai"}
                target="_blank"
            >
                <FontAwesomeIcon icon={faTelegram} color="#26A5E4" />
            </a>

            <a
                className="social-link"
                href={"https://discord.gg/dA6CyjCZ"}
                target="_blank"
            >
                <FontAwesomeIcon icon={faDiscord} color="#5865F2" />
            </a>

            <a
                className="social-link"
                href={"https://dextools.io/"}
                target="_blank"
            >
                <img src={DexToolsIcon} />
            </a>
        </div>
    );
};

export default Socials;
