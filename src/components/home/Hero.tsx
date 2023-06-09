import { FC } from "react";
import "./Hero.scss";
import Header from "../site/Header";
import Button from "../site/Button";
import Sponsor from "../site/Sponsor";
import Socials from "../site/Socials";

const Hero: FC = () => {
    return (
        <div className="hero-container">
            <Header />

            {/* SPACER */}
            {/* <div style={{ height: "17rem" }}></div> */}

            <section className="site-content-container">
                <h1 className="hero-heading">PAAL AI</h1>
                <p className="hero-sub-heading">With multi platform support</p>

                {/* SPACER */}
                <div style={{ height: "2rem" }}></div>

                <div className="sponsor-row">
                    <Sponsor />
                </div>

                {/* SPACER */}
                <div style={{ height: "4rem" }}></div>

                <div className="hero-actions">
                    <Button label="Whitepaper" />
                </div>

                {/* SPACER */}
                <div style={{ height: "2rem" }}></div>

                <div className="hero-socials">
                    <Socials large />
                </div>

                {/* SPACER */}
                {/* <div style={{ height: "12rem" }}></div> */}

                <div className="wallet-address">0x00000000000</div>
            </section>
        </div>
    );
};

export default Hero;
