import { FC } from "react";
import "./Footer.scss";

import PAALAILogo from "../../assets/site/paal-ai-logo.png";
import Button from "./Button";
import Socials from "./Socials";

const Footer: FC = () => {
    return (
        <footer className="site-footer site-content-container">
            <img src={PAALAILogo} alt="PAAL AI" className="company-logo" />

            <div className="actions">
                <Button
                    label="Whitepaper"
                    mini
                    link="https://paalai.io/whitepaper.pdf"
                    className="footer-whitepaper"
                />

                <Socials small />
            </div>
        </footer>
    );
};

export default Footer;
