import { FC } from "react";
import "./Footer.scss";

import PAALAILogo from "../../assets/site/paal-ai-logo.png";
import Button from "./Button";
import Socials from "./Socials";

const Footer: FC = () => {
    return (
        <footer className="site-footer site-content-container">
            <img src={PAALAILogo} alt="PAAL AI" />

            <div className="actions">
                <Button label="Whitepaper" />

                <Socials />
            </div>
        </footer>
    );
};

export default Footer;
