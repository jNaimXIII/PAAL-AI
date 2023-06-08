import { FC } from "react";
import "./Tagline.scss";

const Tagline: FC = () => {
    return (
        <section className="tagline-container">
            <p className="tagline-text site-content-container">
                PAAL is a powerful AI ecosystem, predicated on principles of
                continuous learning and adaptation.
            </p>
        </section>
    );
};

export default Tagline;
