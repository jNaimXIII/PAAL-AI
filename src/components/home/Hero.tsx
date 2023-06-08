import { FC } from "react";
import "./Hero.scss";
import Header from "../site/Header";
import Button from "../site/Button";

const Hero: FC = () => {
    return (
        <div className="hero-container">
            <Header />

            {/* SPACER */}
            <div style={{ height: "18rem" }}></div>

            <section className="site-content-container">
                <h1 className="hero-heading">PAAL AI</h1>
                <p className="hero-sub-heading">With multi platform support</p>

                {/* SPACER */}
                <div style={{ height: "2rem" }}></div>

                <Button label="Whitepaper" />
            </section>
        </div>
    );
};

export default Hero;
