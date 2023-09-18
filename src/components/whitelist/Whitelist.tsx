import { FC } from "react";
import "./Whitelist.scss";
import Button from "../site/Button";

const Whitelist: FC = () => {
    return (
        <section className="whitelist-section" id="whitelist">
            <div className="content site-content-container">
                <h4>Sign up for Paal AI Mobile app waitlist</h4>
                <Button
                    link="https://forms.gle/uSvA2eFk9M5nk4ZP9"
                    label="PAAL AI App waitlist"
                />
            </div>
        </section>
    );
};

export default Whitelist;
