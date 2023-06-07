import styles from "./CallToAction.module.css";

export type CallToActionProps = {
  label: string;
  textStyle?: "uppercase" | "none";
};

export default function CallToAction({
  label,
  textStyle = "uppercase",
}: CallToActionProps) {
  return (
    <button className={`${styles.callToAction} ${styles[textStyle]}`}>
      {label}
    </button>
  );
}
