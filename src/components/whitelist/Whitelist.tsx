import { FC } from "react";
import "./Whitelist.scss";

const Whitelist: FC = () => {
    return (
        <section className="whitelist-section" id="#whitelist">
            <div className="content site-content-container">
                <div className="info">
                    <h3>Submit your wallet for whitelist</h3>
                    <p>Register your wallet to be whitelisted for our launch</p>
                </div>

                <form className="inputs">
                    <input type="text" placeholder="Address" />
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default Whitelist;
