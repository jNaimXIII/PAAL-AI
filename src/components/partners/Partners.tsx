import "./Partners.scss";

// import FloozImage from "../../assets/partners/flooz.png";
import GCloudImage from "../../assets/partners/gcloud.png";
import OKXImage from "../../assets/partners/okx.png";
import AminoIcon from "../../assets/icons/Amino.png";
import CoinGeckoIcon from "../../assets/icons/coingecko.webp";
import GeckoTerminalIcon from "../../assets/icons/GeckoTerminal.webp";

export default function Partners() {
    return (
        <section className="site-content-container partners-container">
            <h3>Partners</h3>
            <div className="partners">
                <div className="images">
                    <img src={AminoIcon} alt="" />
                    <img src={GCloudImage} alt="" />
                    <img src={OKXImage} alt="" />
                </div>
                <div className="images2">
                    <img src={CoinGeckoIcon} alt="" />

                    <img src={GeckoTerminalIcon} alt="" />
                </div>
            </div>
        </section>
    );
}
