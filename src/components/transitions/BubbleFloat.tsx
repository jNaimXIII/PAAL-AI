import { FC } from "react";
import "./BubbleFloat.scss";

const BubbleFloat: FC = () => {
    const bubblesCount = 50;

    return (
        <div className="bubbles-container">
            {new Array(bubblesCount).fill(0).map((_, index) => (
                <div key={index} className="bubble" />
            ))}
        </div>
    );
};

export default BubbleFloat;
