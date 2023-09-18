import { FC } from "react";
import "./Socials.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDiscord,
    faTelegram,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import DexToolsIcon from "../../assets/icons/dextools.svg";
import GeckoTerminalIcon from "../../assets/icons/geckoterminal.svg";
import BitMartIcon from "../../assets/icons/bitmart.png";
import GateIcon from "../../assets/icons/gate.png";

type SocialsProps = {
    large?: boolean;
    small?: boolean;
};

const Socials: FC<SocialsProps> = ({ large = false, small = false }) => {
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
        <div
            className={`
                socials
                ${large ? "large-icons" : ""}
                ${small ? "small-icons" : ""}
            `}
        >
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
                <FontAwesomeIcon
                    icon={faTwitter}
                    // color="#1DA1F2"
                />
            </a>

            <a
                className="social-link"
                href={"https://t.me/paal_ai"}
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={faTelegram}
                    // color="#26A5E4"
                />
            </a>

            <a
                className="social-link"
                href={"https://discord.gg/paalai"}
                target="_blank"
            >
                <FontAwesomeIcon
                    icon={faDiscord}
                    // color="#5865F2"
                />
            </a>

            <a
                className="social-link"
                href={
                    "https://www.dextools.io/app/en/ether/pair-explorer/0x2a6c340bcbb0a79d3deecd3bc5cbc2605ea9259f"
                }
                target="_blank"
            >
                <img src={DexToolsIcon} alt="" />
            </a>

            <a
                className="social-link"
                href={
                    "https://www.geckoterminal.com/eth/pools/0x2a6c340bcbb0a79d3deecd3bc5cbc2605ea9259f"
                }
                target="_blank"
            >
                <img
                    src={GeckoTerminalIcon}
                    style={{ filter: "grayscale(100%)" }}
                    alt=""
                />
            </a>
            <a
                className="social-link"
                href={"https://www.bitmart.com/trade/en-US?symbol=PAAL_USDT"}
                target="_blank"
            >
                <img
                    src={BitMartIcon}
                    style={{ filter: "grayscale(100%)" }}
                    alt=""
                />
            </a>
            <a
                className="social-link"
                href={"https://www.gate.io/trade/PAAL_USDT"}
                target="_blank"
            >
                <img
                    src={GateIcon}
                    style={{ filter: "grayscale(100%)" }}
                    alt=""
                />
            </a>
        </div>
    );
};

export default Socials;
