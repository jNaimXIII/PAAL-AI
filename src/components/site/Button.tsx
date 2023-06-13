import { FC } from "react";
import "./Button.scss";

export type Props = {
    label: string;
    mini?: boolean;
    link?: string;
    className?: string;
};

const Button: FC<Props> = ({ label, mini, link = "", className = "" }) => {
    return (
        <div className={`button-wrapper ${className}`}>
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
