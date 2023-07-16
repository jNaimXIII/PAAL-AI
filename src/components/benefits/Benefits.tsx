import { FC } from "react";
import "./Benefits.scss";

// import BenefitsShowcaseRobotImage from "../../assets/benefits/benefits-robot.png";
// import BenefitsShowcaseItemOneImage from "../../assets/benefits/benefits-showcase-1.png";
// import BenefitsShowcaseItemTwoImage from "../../assets/benefits/benefits-showcase-2.png";
// import BenefitsShowcaseItemThreeImage from "../../assets/benefits/benefits-showcase-3.png";
// import BenefitsShowcaseItemFourImage from "../../assets/benefits/benefits-showcase-4.png";
import Stats from "../stats/Stats";

const Benefits: FC = () => {
    // const benefitsShowcaseItemsRowOne = [
    //     BenefitsShowcaseItemOneImage,
    //     BenefitsShowcaseItemTwoImage,
    // ];

    // const benefitsShowcaseItemsRowTwo = [
    //     BenefitsShowcaseItemThreeImage,
    //     BenefitsShowcaseItemFourImage,
    // ];

    return (
        <section className="benefits-container" id="benefits">
            <h1 className="benefits-heading site-content-container benefits-mobile-hidden">
                Setup my bot
            </h1>

            {/*<p className="benefits-sub-heading site-content-container benefits-mobile-hidden">*/}
            {/*    the benefits of PAAL, our personalized AI and ML chatbot*/}
            {/*    solution*/}
            {/*</p>*/}

            {/* <div className="benefits-gallery site-content-container benefits-mobile-hidden">
                <div className="benefits-showcase-row">
                    {benefitsShowcaseItemsRowOne.map((item, index) => (
                        <BenefitsShowcaseItem
                            key={index}
                            background={item}
                            mobileHidden
                        />
                    ))}
                </div>

                <img
                    src={BenefitsShowcaseRobotImage}
                    alt="Benefits Showcase"
                    className="benefits-showcase-image"
                />

                <div className="benefits-showcase-row">
                    {benefitsShowcaseItemsRowTwo.map((item, index) => (
                        <BenefitsShowcaseItem
                            key={index}
                            background={item}
                            mobileHidden={index === 0}
                        />
                    ))}
                </div>
            </div> */}

            <iframe
                className="benefits-video site-content-container"
                width="560"
                height="315"
                src="https://www.youtube-nocookie.com/embed/7H_DmlVMqdU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={true}
            ></iframe>

            {/* <div className="benefits-video"></div> */}

            {/* SPACER */}
            {/* <div style={{ height: "7.5rem" }} /> */}

            <p className="benefits-info site-content-container">
                Leverage the strength of machine learning with PAAL, using
                algorithms that construct models from training data,
                facilitating informed predictions or decisions
            </p>

            <Stats />
        </section>
    );
};

export default Benefits;

// type BenefitsShowcaseItemProps = {
//     background: string;
//     mobileHidden: boolean;
// };

// const BenefitsShowcaseItem: FC<BenefitsShowcaseItemProps> = ({
//     background,
//     mobileHidden,
// }) => {
//     return (
//         <img
//             src={background}
//             alt=""
//             className={`${
//                 mobileHidden ? "mobile-hidden-item" : ""
//             } benefits-showcase-item`}
//         />
//     );
// };
