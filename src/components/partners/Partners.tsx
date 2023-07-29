import "./Partners.scss";

import FloozImage from "../../assets/partners/flooz.png";
import GCloudImage from "../../assets/partners/gcloud.png";
import OKXImage from "../../assets/partners/okx.png";

export default function Partners() {
    return (
        <section className="site-content-container partners-container">
            <h3>Partners</h3>

            <div className="images">
                <img src={FloozImage} alt="" />
                <img src={GCloudImage} alt="" />
                <img src={OKXImage} alt="" />
            </div>
        </section>
    );
}
