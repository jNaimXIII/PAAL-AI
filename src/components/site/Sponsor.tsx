import { FC } from "react";
import "./Sponsor.scss";

import GoogleCloudLogo from "../../assets/icons/google-cloud-logo.png";

const Sponsor: FC = () => {
    return (
        <div className="sponsor">
            <span className="sponsor-title">In partnership with</span>
            <img
                className="sponsor-icon"
                src={GoogleCloudLogo}
                alt="Google Cloud Platform"
            />
        </div>
    );
};

export default Sponsor;
