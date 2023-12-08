import "./Partners.scss";

// import FloozImage from "../../assets/partners/flooz.png";
import GCloudImage from "../../assets/partners/gcloud.png";
import OKXImage from "../../assets/partners/okx.png";
import AminoIcon from "../../assets/icons/Amino.png";
import CoinGeckoIcon from "../../assets/icons/coingecko.webp";
import GeckoTerminalIcon from "../../assets/icons/GeckoTerminal.webp";
// import NvidiaIcon from "../../assets/icons/nvidia-logo.png";

export default function Partners() {
    return (
        <section className="site-content-container partners-container">
            <h3>Partners</h3>
            <div className="partners">
                <div className="images">
                    <img className="aminiIcon" src={AminoIcon} alt="" />
                    <img src={GCloudImage} alt="" />
                    <img src={OKXImage} alt="" />
                    <img className="coincecko" src={CoinGeckoIcon} alt="" />
                </div>
                <div className="images2">
                    {/* <img src={CoinGeckoIcon} alt="" /> */}
                    {/* <img src={NvidiaIcon} alt="" /> */}
                    <img src={GeckoTerminalIcon} alt="" />
                    <a href="https://chain.link/badge&quot" target="_blank">
                        {" "}
                        <img
                            src="https://uploads-ssl.webflow.com/5f6b7190899f41fb70882d08/632c50d9db40967f015be6d1_secured-with-chainlink-badge-market-data.svg"
                            alt="market data secured with chainlink"
                        />
                    </a>
                    <a href="https://chain.link/badge&quot" target="_blank">
                        {" "}
                        <img
                            src="https://uploads-ssl.webflow.com/5f6b7190899f41fb70882d08/632c50d91344fb274942c698_secured-with-chainlink-badge-randomness.svg"
                            alt="market data secured with chainlink"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
