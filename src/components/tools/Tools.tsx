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
                link: "https://paal.omp.dev",
            },
            messages: [
                "AI bot for crypto communities, providing answers, chat summaries, and sentiment analysis.",
                "Shareable to TG, Discord, etc., with customizable content and AI personality.",
                "Supports Word, PDF, website links, and YouTube videos.",
                "Multiple bots for different channels.",
                "Data secured with Google Cloud encryption.",
                "Revenue sharing with $PAAL stakers.",
            ],
        },
        {
            title: "AutoPaal",
            action: {
                label: "Setup MyPaal",
                link: "https://paal.omp.dev",
            },
            messages: [
                "Includes MyPaal features plus autonomous AI research and analysis.",
                "Connected to curated crypto knowledge bases and data sources.",
                "Provides comprehensive analysis for all crypto user levels.",
                "Built-in command presets and configurable watch agents.",
                "Rigorous data quality and accuracy process.",
                "Revenue sharing with $PAAL stakers.",
            ],
        },
        {
            title: "AutoPaal-RT",
            action: {
                label: "Setup MyPaal",
                link: "https://paal.omp.dev",
            },
            messages: [
                "Includes MyPaal and AutoPaal features plus fast trading, limit order, and private transactions.",
                "Features token scanner and auto sniper with custom parameters.",
                "Rigorous data quality and accuracy process.",
                "Revenue sharing with $PAAL stakers.",
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
                    <ul className="list">
                        {content[selectedIndex].messages.map((message) => (
                            <li key={message}>{message}</li>
                        ))}
                    </ul>

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
