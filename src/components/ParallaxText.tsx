import { useEffect, useRef, useState } from "react";
import styles from "./ParallaxText.module.css";
import * as THREE from "three";
import * as p5 from "p5";
import TRUNK from "vanta/dist/vanta.trunk.min";

export default function ParallaxText() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    console.log("running effect");

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
      console.log("destroying effect");
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return <div ref={vantaRef} style={{ height: "100vh" }}></div>;
}
