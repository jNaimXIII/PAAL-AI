import { FC } from "react";
import "./ColorDrops.scss";

const ColorDrops: FC = () => {
    const colorDropsCount = 144;

    return (
        <div className="color-drops-container">
            {new Array(colorDropsCount).fill(0).map((_, index) => (
                <div key={index} className="color-drop"></div>
            ))}
        </div>
    );
};

export default ColorDrops;
