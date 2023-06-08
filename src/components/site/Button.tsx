import { FC } from "react";
import "./Button.scss";

export type Props = {
    label: string;
    mini?: boolean;
};

const Button: FC<Props> = ({ label, mini }) => {
    return (
        <div className="button-wrapper">
            <button className={`${mini ? "button-mini" : ""} button`}>
                {label}
            </button>
        </div>
    );
};

export default Button;
