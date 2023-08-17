import { useState } from "react";
import "./Tools.scss";
import Button from "../site/Button";

export default function Tools() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const content = [
        {
            title: "MyPaal",
            action: {
                label: "Setup MyPaal",
                link: "https://app.paal.ai/",
            },
            messages: [
                "Cryptocurrency-focused AI: Handles inquiries, summarizes conversations, and assesses chat sentiment.",
                "Multi-platform Integration: Compatible with platforms like Telegram, Discord, etc.",
                "Customizable: Personalize bot's personality, response style, and knowledge base about various coins and projects.",
                "Content Upload: Supports Word, PDF, website, YouTube links for bot learning.",
                "Multiple Bots: Multiple bots can be utilized across various channels.",
                "Real-time Data Fetching: Collects real-time project data from multiple sources.",
                "Secure: Uses FIPS 140-2 validated encryption by Google Cloud for data security and privacy.",
                "Revenue sharing with $PAAL stakers.",
            ],
        },
        {
            title: "AutoPaal",
            action: {
                label: "Coming Soon",
                link: "/",
            },
            messages: [
                "Autonomous AI: Provides crypto-focused research, insights, and analysis.",
                "Quality Data Sources: Utilizes trusted and validated data sources.",
                "Broad User Base: Serves users from beginners to experts in crypto.",
                "Cited Responses: Provides comprehensive answers with source citations.",
                "Preset Commands: Uses community-suggested commands for powerful results.",
                "Configurable Watch Agents: Monitors market trends and notifies users of specific conditions.",
            ],
        },
        {
            title: "AutoPaal X",
            action: {
                label: "Coming Soon",
                link: "/",
            },
            messages: [
                "Comprehensive Features: Includes all the features of MyPaal and AutoPaal, providing a comprehensive tool for users.",
                "Lightning-Fast Trading: Offers lightning-fast trading, limit orders, and private transactions, enhancing the trading experience for users.",
                "Token Scanner: Features a token scanner, allowing users to easily find and track tokens.",
                "Custom Parameter Settings: With AutoPaal-X, users can set custom parameters for the auto sniper, providing greater control and customization.",
                "Data Quality and Accuracy: Ensures data quality and accuracy through a rigorous testing and validation process, providing reliable and accurate information for users.",
                "Revenue Sharing: Provides revenue sharing with $PAAL stakers, offering an additional incentive for staking.",
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
                        {content[selectedIndex].messages.map((message) => (
                            <li key={message}>{message}</li>
                        ))}
                    </ol>

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
