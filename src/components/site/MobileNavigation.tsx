import { FC, useState } from "react";
import "./MobileNavigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MobileNavigation: FC = () => {
    const links = [
        {
            label: "Home",
            url: "#home",
        },
        {
            label: "Discover",
            url: "#discover",
        },
        {
            label: "Stake",
            url: "#stake",
        },
        {
            label: "Features",
            url: "#features",
        },
        {
            label: "Video Tutorial",
            url: "#benefits",
        },
        {
            label: "Tokenomics",
            url: "#tokenomics",
        },
        {
            label: "Contact",
            url: "#whitelist",
        },
    ];

    const [isNavigationOn, setIsNavigationOn] = useState(false);

    function toggleMobileNavigation() {
        setIsNavigationOn((p) => !p);
    }

    function turnOffMobileNavigation() {
        setIsNavigationOn(false);
    }

    const [isDocsShown, setIsDocsShown] = useState(false);

    function toggleDocs(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.stopPropagation();

        setIsDocsShown((p) => !p);
    }

    function turnOffDocs(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.stopPropagation();

        setIsDocsShown(false);
    }

    const docsLinks = [
        {
            label: "Whitepaper",
            link: "/whitepaper.pdf",
        },
        {
            label: "GitBook",
            link: "https://docs.paalai.io/",
        },
        {
            label: "Medium",
            link: "https://medium.com/@admin_42570",
        },
    ];

    return (
        <>
            <button className="mobile-navigation-toggle">
                <div className="mobile-navigation-toggle-icon-wrapper">
                    <FontAwesomeIcon
                        className={`mobile-navigation-toggle-icon ${
                            isNavigationOn ? "open" : ""
                        }`}
                        icon={faBars}
                        onClick={toggleMobileNavigation}
                    />
                </div>
            </button>

            <nav
                className={`mobile-navigation ${isNavigationOn ? "open" : ""}`}
                onClick={turnOffMobileNavigation}
            >
                <ul className="mobile-navigation-list">
                    {links.map(({ label, url }, index) => (
                        <li className="mobile-navigation-list-item" key={index}>
                            <a
                                className="mobile-navigation-link"
                                href={url}
                                onClick={turnOffMobileNavigation}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="more-items">
                    <button className="more-items-toggle" onClick={toggleDocs}>
                        Docs {!isDocsShown ? "+" : "-"}
                    </button>
                    <ul
                        className={`more-items-list ${
                            isDocsShown ? "shown" : ""
                        }`}
                    >
                        {docsLinks.map(({ label, link }, index) => (
                            <li key={index} className="more-item">
                                <a
                                    href={link}
                                    onClick={turnOffDocs}
                                    className="more-item-link"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default MobileNavigation;
