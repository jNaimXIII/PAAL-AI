import { useEffect, useRef, useState } from "react";
import "./ParallaxText.css";
import * as THREE from "three";
import * as p5 from "p5";
import TRUNK from "vanta/dist/vanta.trunk.min";

export default function ParallaxText() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        TRUNK({
          THREE,
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
    "/prompt Hello Paal, what can you tell me about the project?",
    "/prompt Hola MyPaal, ¿cuéntame sobre el proyecto?",
    "/提示 Hello MyPaal, 告诉我有关该项目的信息",
    "/prompt Hallo MyPaal, erzähl mir etwas über das Projekt?",
  ];

  return (
    <div className="parallaxContainer">
      <div ref={vantaRef} className="vantaBackground"></div>

      {parallaxTexts.map((text, index) => (
        <div
          key={index}
          className="parallaxTextContainer"
          style={{
            top: index * 80 + 200,
          }}
        >
          <span
            style={{
              color: ["#ffffff", "#AC2BF9"][index % 2],
            }}
            className="parallaxText"
          >
            {text}
          </span>
        </div>
      ))}
    </div>
  );
}
