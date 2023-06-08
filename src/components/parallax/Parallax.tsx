import { FC, useEffect, useRef, useState } from "react";
import "./Parallax.scss";
import TRUNK from "vanta/src/vanta.trunk.js";
import p5 from "p5";
import { useInView } from "react-intersection-observer";

import ParallaxFillerImage from "../../assets/parallax/parallax-filler.png";

const Parallax: FC = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                TRUNK({
                    p5,
                    el: vantaRef.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    color: 0x882db1,
                    backgroundColor: 0x0,
                    spacing: 8.0,
                    chaos: 4.0,
                })
            );
        }
        return () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (vantaEffect) vantaEffect.destroy();
        };
    }, [vantaEffect]);

    const parallaxTexts = [
        "/prompt Hello MyPaal, tell me about the project?",
        "/prompt Hola MyPaal, ¿cuéntame sobre el proyecto?",
        "/提示 Hello MyPaal, 告诉我有关该项目的信息",
        "/prompt Hallo MyPaal, erzähl mir etwas über das Projekt?",
    ];

    return (
        <section className="parallax-container">
            <div className="vanta-background" ref={vantaRef} />

            {parallaxTexts.map((text, index) => (
                <ParallaxItem
                    key={index}
                    label={text}
                    alternative={!!(index % 2)}
                    offset={index * 60 - 100}
                />
            ))}

            {/* SPACER */}
            <div style={{ height: "30vh" }} />

            <div
                className="parallax-item"
                style={{
                    background: `
                        linear-gradient(
                            90deg,
                            #000000 0.25%,
                            rgba(0, 0, 0, 0.76) 23.54%,
                            rgba(0, 0, 0, 0) 63.96%
                        ),
                        url(${ParallaxFillerImage})
                    `,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    height: "69vh",
                }}
            />
        </section>
    );
};

export default Parallax;

type ParallaxItemProps = {
    label: string;
    alternative: boolean;
    offset: number;
};

const ParallaxItem: FC<ParallaxItemProps> = ({
    label,
    alternative,
    offset,
}) => {
    const { ref, inView } = useInView({
        threshold: 0.4,
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
            className="parallax-item"
            ref={ref}
            style={{
                top: offset,
            }}
        >
            <span
                className={`${alternative ? "alternative" : ""} parallax-text`}
            >
                {shownText}
            </span>
        </div>
    );
};
