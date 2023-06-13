import { FC } from "react";
import "./Button.scss";

export type Props = {
    label: string;
    mini?: boolean;
    link?: string;
};

const Button: FC<Props> = ({ label, mini, link = "" }) => {
    return (
        <div className="button-wrapper">
            <button
                className={`${mini ? "button-mini" : ""} button`}
                onClick={() => {
                    window.location.href = link;
                }}
            >
                {label}
            </button>
        </div>
    );
};

export default Button;
