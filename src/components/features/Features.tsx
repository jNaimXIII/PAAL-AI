import { FC } from "react";
import "./Features.scss";

import FeaturesRobotImage from "../../assets/features/features-robot.png";
import FeaturesTitleRobotImage from "../../assets/features/features-title-bot.png";

const Features: FC = () => {
    const featuresGroupOne = [
        "Personalized chatbot",
        "Multiple platforms",
        "Custom data set",
    ];
    const featuresGroupTwo = [
        "Multimodal AI",
        "AI as a service",
        "LLM for crypto",
    ];

    return (
        <section className="features-container">
            <div className="features-sub-heading">
                <span>Key</span>
                <img
                    src={FeaturesTitleRobotImage}
                    alt="Features Title Robot"
                    className="features-heading-image"
                />
                <span>Services</span>
            </div>

            <h1 className="features-heading">Features</h1>

            {/* SPACER */}
            <div style={{ height: "4.4rem" }} />

            <div className="features-gallery site-content-container">
                <div className="feature-cards">
                    {featuresGroupOne.map((label, index) => (
                        <FeatureCard key={index} label={label} />
                    ))}
                </div>

                <img
                    src={FeaturesRobotImage}
                    alt="Features Robot"
                    className="feature-image"
                />

                <div className="feature-cards">
                    {featuresGroupTwo.map((label, index) => (
                        <FeatureCard key={index} label={label} />
                    ))}
                </div>
            </div>

            {/* SPACER */}
            <div style={{ height: "8rem" }} />

            <p className="features-info">
                AI is the broader concept of machines being able to carry out
                tasks in a way that would normally require human intelligence.
            </p>
        </section>
    );
};

export default Features;

type FeatureCardProps = { label: string };

const FeatureCard: FC<FeatureCardProps> = ({ label }) => {
    return (
        <div className="feature-card">
            <span className="feature-card-label">{label}</span>
        </div>
    );
};
