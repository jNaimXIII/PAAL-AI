import { FC, useEffect, useState } from "react";
import "./Empowered.scss";
import { useInView } from "react-intersection-observer";

import EmpoweredImage from "../../assets/empowered/empowered.png";

const Parallax: FC = () => {
    const parallaxTexts = [
        "PAAL is empowered by",
        "cutting-edge machine",
        "learning algorithms",
    ];

    return (
        <section className="parallax-container">
            {/* <div className="vanta-background" ref={vantaRef} /> */}
            <div
                className="empowered-background"
                style={{
                    backgroundImage: `
                        linear-gradient(
                            rgba(0, 0, 0, 0.1),
                            rgba(0, 0, 0, 0.6)
                        ),
                        url(${EmpoweredImage})
                    `,
                }}
            />

            {parallaxTexts.map((text, index) => (
                <ParallaxItem
                    key={index}
                    label={text}
                    mini={index === 0}
                    offset={index * 50 + 300}
                />
            ))}

            {/* SPACER */}
            <div style={{ height: "30vh" }} />

            <div
                style={{
                    position: "sticky",
                    background: "black",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "55vh",
                }}
            />
        </section>
    );
};

export default Parallax;

type ParallaxItemProps = {
    label: string;
    mini: boolean;
    offset: number;
};

const ParallaxItem: FC<ParallaxItemProps> = ({ label, mini, offset }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const [shownText, setShownText] = useState("");

    useEffect(() => {
        const RATE = 50;

        if (inView) {
            const interval = setInterval(() => {
                setShownText((curr) => label.slice(0, curr.length + 1));
            }, RATE);

            return () => clearInterval(interval);
        } else {
            setShownText("");
        }
    }, [inView, label]);

    return (
        <div
            className="empowered-item"
            ref={ref}
            style={{
                top: offset,
            }}
        >
            <span
                className={`${
                    mini ? "empowered-text-mini" : ""
                } empowered-text`}
            >
                {shownText}
            </span>
        </div>
    );
};
