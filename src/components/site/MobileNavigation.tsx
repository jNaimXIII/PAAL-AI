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
            label: "Features",
            url: "#features",
        },
        {
            label: "Benefits",
            url: "#benefits",
        },
        {
            label: "Tokenomics",
            url: "#tokenomics",
        },
        {
            label: "Whitelist",
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
            </nav>
        </>
    );
};

export default MobileNavigation;
