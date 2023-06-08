import { FC, useEffect, useState } from "react";
import "./Stats.scss";
import { useInView } from "react-intersection-observer";

const Stats: FC = () => {
    const statItems = [
        {
            number: 20,
            sign: "+",
            label: "Active projects",
        },
        {
            number: 400,
            sign: "+",
            label: "Daily messages",
        },
        {
            number: 500,
            sign: "+",
            label: "Custom dataset",
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
};

const StatItem: FC<StatItemProps> = ({ number, sign, label }) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [shown, setShown] = useState(0);

    useEffect(() => {
        if (inView) {
            if (shown < number) {
                const interval = setInterval(() => {
                    if (number % 2 === 0) setShown((shown) => shown + 2);
                    else setShown((shown) => shown + 3);
                }, 1);

                return () => clearInterval(interval);
            }
        } else {
            setShown(0);
        }
    }, [number, inView, shown]);

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
