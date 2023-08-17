import { FC } from "react";
import "./Features.scss";

import FeaturesRobotImage from "../../assets/features/features-robot.png";
import FeaturesTitleRobotImage from "../../assets/features/features-title-bot.png";

const Features: FC = () => {
    const featuresGroupOne = [
        {
            label: "Personalized chatbot",
            link: "https://docs.paalai.io/usage/tg-bot-setup",
        },
        {
            label: "Multiple platforms",
            link: "https://docs.paalai.io/features/product",
        },
        {
            label: "Custom data set",
            link: "https://docs.paalai.io/dashboard/knowledge",
        },
    ];
    const featuresGroupTwo = [
        {
            label: "Multimodal AI",
            link: "https://docs.paalai.io/features/product/summarize",
        },
        {
            label: "AI as a service",
            link: "https://docs.paalai.io/collaborating/how-we-work-together",
        },
        {
            label: "LLM for crypto",
            link: "https://docs.paalai.io/features/tools/autopaal",
        },
    ];

    return (
        <section className="features-container" id="features">
            <div className="features-sub-heading">
                <span className="features-sub-heading-initial-word">Key</span>
                <img
                    src={FeaturesTitleRobotImage}
                    alt="Features Title Robot"
                    className="features-heading-image"
                />
                <span>Services</span>
            </div>

            <h1 className="features-heading">Features</h1>

            <div className="features-gallery site-content-container">
                <div className="feature-cards">
                    {featuresGroupOne.map(({ label, link }, index) => (
                        <FeatureCard key={index} label={label} link={link} />
                    ))}
                </div>

                <div className="feature-image-container">
                    <div style={{ position: "relative" }}>
                        <img
                            src={FeaturesRobotImage}
                            alt="Features Robot"
                            className="feature-image"
                        />

                        <div className="feature-image-content-wrapper">
                            <div className="feature-image-content">
                                <span className="feature-image-content-sub-heading">
                                    Let's
                                </span>
                                <span className="feature-image-content-heading">
                                    Get started
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="feature-cards">
                    {featuresGroupTwo.map(({ label, link }, index) => (
                        <FeatureCard key={index} label={label} link={link} />
                    ))}
                </div>
            </div>

            <p className="features-info">
                AI is the ability of machines to learn and think like humans,
                and to use that knowledge to perform tasks that would otherwise
                require human intelligence.
            </p>
        </section>
    );
};

export default Features;

type FeatureCardProps = { label: string; link: string };

const FeatureCard: FC<FeatureCardProps> = ({ label, link }) => {
    return (
        <a href={link} target="_blank" className="feature-card">
            <span className="feature-card-label">{label}</span>
        </a>
    );
};
