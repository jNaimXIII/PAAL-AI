import { useState } from "react";
import "./Tools.scss";
import Button from "../site/Button";

export default function Tools() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    console.log(
        "🚀 ~ file: Tools.tsx:7 ~ Tools ~ selectedIndex:",
        selectedIndex
    );

    const content = [
        {
            title: "MyPaal",
            action: {
                label: "Setup MyPaal",
                link: "https://app.paal.ai/",
            },
            messages: [
                {
                    title: "Cryptocurrency-focused AI",
                    text: "Handles inquiries, summarizes conversations, and assesses chat sentiment.",
                },
                {
                    title: "Multi-platform Integration",
                    text: "Compatible with platforms like Telegram, Discord, etc.",
                },
                {
                    title: "Customizable",
                    text: "Personalize bot's personality, response style, and knowledge base about various coins and projects.",
                },
                {
                    title: "Content Upload",
                    text: "Supports Word, PDF, website, YouTube links for bot learning.",
                },
                {
                    title: "Multiple Bots",
                    text: "Multiple bots can be utilized across various channels.",
                },
                {
                    title: "Real-time Data Fetching",
                    text: "Collects real-time project data from multiple sources.",
                },
                {
                    title: "Secure",
                    text: "Uses FIPS 140-2 validated encryption by Google Cloud for data security and privacy.",
                },
                {
                    title: "Revenue sharing with $PAAL stakers",
                    text: "This message does not contain additional text.",
                },
            ],
        },
        {
            title: "AutoPaal",
            action: {
                label: "Try Now",
                link: "https://t.me/mypaalbot",
            },
            messages: [
                {
                    title: "Autonomous AI",
                    text: "Provides crypto-focused research, insights, and analysis.",
                },
                {
                    title: "Quality Data Sources",
                    text: "Utilizes trusted and validated data sources.",
                },
                {
                    title: "Broad User Base",
                    text: "Serves users from beginners to experts in crypto.",
                },
                {
                    title: "Cited Responses",
                    text: "Provides comprehensive answers with source citations.",
                },
                {
                    title: "Preset Commands",
                    text: "Uses community-suggested commands for powerful results.",
                },
                {
                    title: "Configurable Watch Agents",
                    text: "Monitors market trends and notifies users of specific conditions.",
                },
            ],
        },
        {
            title: "AutoPaal X",
            action: {
                label: "Coming Soon",
                link: "/",
            },
            messages: [
                {
                    title: "Comprehensive Features",
                    text: "Includes all the features of MyPaal and AutoPaal, providing a comprehensive tool for users.",
                },
                {
                    title: "Lightning-Fast Trading",
                    text: "Offers lightning-fast trading, limit orders, and private transactions, enhancing the trading experience for users.",
                },
                {
                    title: "Token Scanner",
                    text: "Features a token scanner, allowing users to easily find and track tokens.",
                },
                {
                    title: "Custom Parameter Settings",
                    text: "With AutoPaal-X, users can set custom parameters for the auto sniper, providing greater control and customization.",
                },
                {
                    title: "Data Quality and Accuracy",
                    text: "Ensures data quality and accuracy through a rigorous testing and validation process, providing reliable and accurate information for users.",
                },
                {
                    title: "Revenue Sharing",
                    text: "Provides revenue sharing with $PAAL stakers, offering an additional incentive for staking.",
                },
            ],
        },
    ];

    return (
        <section className="tools-container site-content-container">
            <h2 className="tools-heading">PAAL AI Tools</h2>

            <div className="split">
                <div className="selectors">
                    {content.map((item, i) => (
                        <div
                            className={`
                                selector
                                ${i === selectedIndex ? "selected" : ""}
                            `}
                            onClick={() => setSelectedIndex(i)}
                            key={item.title}
                        >
                            <span>{item.title}</span>
                        </div>
                    ))}
                </div>

                <div className="content">
                    <ol className="list">
                        {content[selectedIndex]?.messages?.map((message, i) => (
                            <li key={i}>
                                <span className="li-title">
                                    {message.title}
                                </span>
                                &#32; &#58; &#32;
                                <span>{message.text}</span>
                            </li>
                        ))}
                    </ol>{" "}
                    *
                    <div className="action">
                        <Button
                            label={content[selectedIndex].action.label}
                            link={content[selectedIndex].action.link}
                            mini={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
