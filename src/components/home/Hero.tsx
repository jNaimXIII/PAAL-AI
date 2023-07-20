import { FC } from "react";
import "./Hero.scss";
import Header from "../site/Header";
import Button from "../site/Button";
import Sponsor from "../site/Sponsor";
import Socials from "../site/Socials";

const Hero: FC = () => {
    return (
        <div className="hero-container" id="home">
            <Header />

            {/* SPACER */}
            {/* <div style={{ height: "17rem" }}></div> */}

            <section className="hero-content site-content-container">
                <div className="hero-top">
                    <h1 className="hero-heading">PAAL AI</h1>
                    <p className="hero-sub-heading">Voice to Your Web Data</p>

                    <div className="sponsor-row">
                        <Sponsor />
                    </div>
                </div>

                <div className="hero-bottom">
                    <div className="hero-actions">
                        <Button
                            label="Get my bot now"
                            link="https://paal.omp.dev/"
                        />
                    </div>

                    <div className="hero-socials">
                        <Socials large />
                    </div>

                    <a
                        href="https://etherscan.io/token/0x6f3c0d29e27bd76b45063ec6f4641f07f260ae5a"
                        target="_blank"
                        className="wallet-address"
                    >
                        0x14feE680690900BA0ccCfC76AD70Fd1b95D10e16
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Hero;
