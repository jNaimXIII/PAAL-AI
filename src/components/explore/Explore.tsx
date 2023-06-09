import { FC } from "react";
import "./Explore.scss";
import Button from "../site/Button";

const Explore: FC = () => {
    const cardTexts = [
        "Advanced AI and machine learning",
        "Multi-platform integration",
        "Custom dataset training",
        "Adaptable and Evolving",
    ];

    return (
        <section className="explore-container site-content-container">
            <p className="explore-info">
                PAAL (Personalized AI Assistant) is an advanced chatbot built on
                AI and ML technologies, designed to streamline tasks that
                typically require human intellect, such as natural language
                understanding, image recognition, decision-making, and
                problem-solving.
            </p>

            {/* SPACER */}
            <div style={{ height: "4.25rem" }} />

            <div className="explore-cards">
                {cardTexts.map((label, index) => (
                    <ExploreCard key={index} label={label} />
                ))}
            </div>

            <div style={{ height: "5rem" }} />

            <div className="center-items">
                <Button label="Explore PAAL" mini />
            </div>
        </section>
    );
};

export default Explore;

type ExploreCardProps = { label: string };

const ExploreCard: FC<ExploreCardProps> = ({ label }) => {
    return (
        <div className="explore-card">
            <span className="explore-card-label">{label}</span>
        </div>
    );
};
