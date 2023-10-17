import { FC, useEffect, useState } from "react";
import "./Stats.scss";
import { useInView } from "react-intersection-observer";

const Stats: FC = () => {
    const statItems = [
        {
            number: 1350,
            sign: "+",
            label: "Active Groups",
        },
        {
            number: 1,
            sign: ".2M+",
            label: "Members",
        },
        {
            number: 12500,
            sign: "+",
            label: "Users",
        },
        {
            number: 50000,
            sign: "+",
            label: "Prompts",
        },
    ];

    return (
        <section className="stats-container site-content-container">
            <div className="stats-row">
                {statItems.map(({ label, sign, number }, index) => (
                    <StatItem
                        key={index}
                        label={label}
                        sign={sign}
                        number={number}
                        duration={300}
                    />
                ))}
            </div>
        </section>
    );
};

export default Stats;

type StatItemProps = {
    number: number;
    sign: string;
    label: string;
    duration: number;
};

const StatItem: FC<StatItemProps> = ({ number, sign, label, duration }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [shown, setShown] = useState(0);

    useEffect(() => {
        if (inView) {
            if (shown < number) {
                const startTime = Date.now();
                const interval = setInterval(() => {
                    const elapsedTime = Date.now() - startTime;
                    if (elapsedTime < duration) {
                        const progress =
                            (elapsedTime / duration) * (number - shown);
                        setShown(Math.ceil(shown + progress));
                    } else {
                        setShown(number);
                        clearInterval(interval); // Stop the interval when the duration is reached
                    }
                }, 16); // Using a small interval for smoother animation

                return () => clearInterval(interval);
            }
        } else {
            setShown(0);
        }
    }, [number, inView, shown, duration]);

    return (
        <div className="stat-item" ref={ref}>
            <span className="stat-number">
                {shown}
                {sign}
            </span>

            <span className="stat-label">{label}</span>
        </div>
    );
};
