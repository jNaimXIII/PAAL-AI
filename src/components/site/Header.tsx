import { FC } from "react";
import "./Header.scss";

import PAALAILogo from "../../assets/site/paal-ai-logo.png";
import Button from "./Button";

const Header: FC = () => {
    return (
        <header className="site-header site-content-container">
            <img src={PAALAILogo} alt="PAAL AI Logo" className="company-logo" />

            <Button label="Whitepaper" />
        </header>
    );
};

export default Header;
