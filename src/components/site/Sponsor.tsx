import { FC } from "react";
import "./Sponsor.scss";

import GoogleCloudLogo from "../../assets/icons/google-cloud-logo.png";

type SponsorProps = {
    mobileCenter?: boolean;
};

const Sponsor: FC<SponsorProps> = ({ mobileCenter }) => {
    return (
        <div className={`sponsor ${mobileCenter ? "mobile-sponsor" : ""}`}>
            <span className="sponsor-title">Supported by</span>
            <img
                className="sponsor-icon"
                src={GoogleCloudLogo}
                alt="Google Cloud Platform"
            />
        </div>
    );
};

export default Sponsor;
