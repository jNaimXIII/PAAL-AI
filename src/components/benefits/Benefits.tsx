import { FC } from "react";
import "./Benefits.scss";

import BenefitsShowcaseRobotImage from "../../assets/benefits/benefits-robot.png";
import BenefitsShowcaseItemOneImage from "../../assets/benefits/benefits-showcase-1.png";
import BenefitsShowcaseItemTwoImage from "../../assets/benefits/benefits-showcase-2.png";
import BenefitsShowcaseItemThreeImage from "../../assets/benefits/benefits-showcase-3.png";
import BenefitsShowcaseItemFourImage from "../../assets/benefits/benefits-showcase-4.png";
import Stats from "../stats/Stats";

const Benefits: FC = () => {
    const benefitsShowcaseItemsRowOne = [
        BenefitsShowcaseItemOneImage,
        BenefitsShowcaseItemTwoImage,
    ];

    const benefitsShowcaseItemsRowTwo = [
        BenefitsShowcaseItemThreeImage,
        BenefitsShowcaseItemFourImage,
    ];

    return (
        <section className="benefits-container">
            <h1 className="benefits-heading site-content-container">
                Benefits
            </h1>

            <p className="benefits-sub-heading site-content-container">
                the benefits of PAAL, our personalized AI and ML chatbot
                solution
            </p>

            <div className="benefits-gallery site-content-container">
                <div className="benefits-showcase-row">
                    {benefitsShowcaseItemsRowOne.map((item, index) => (
                        <BenefitsShowcaseItem key={index} background={item} />
                    ))}
                </div>

                <img
                    src={BenefitsShowcaseRobotImage}
                    alt="Benefits Showcase"
                    className="benefits-showcase-image"
                />

                <div className="benefits-showcase-row">
                    {benefitsShowcaseItemsRowTwo.map((item, index) => (
                        <BenefitsShowcaseItem key={index} background={item} />
                    ))}
                </div>
            </div>

            {/* SPACER */}
            <div style={{ height: "7.5rem" }} />

            <p className="benefits-info site-content-container">
                PAAL (Personalized AI Assistant) is an advanced chatbot built on
                AI and ML technologies, designed to streamline tasks that
                typically require human intellect, such as natural language
                understanding, image recognition, decision-making, and
                problem-solving.
            </p>

            <Stats />
        </section>
    );
};

export default Benefits;

type BenefitsShowcaseItemProps = {
    background: string;
};

const BenefitsShowcaseItem: FC<BenefitsShowcaseItemProps> = ({
    background,
}) => {
    return <img src={background} alt="" className="benefits-showcase-item" />;
};
