import "./CallToAction.css";

export type CallToActionProps = {
  label: string;
  textStyle?: "uppercase" | "none";
};

export default function CallToAction({
  label,
  textStyle = "uppercase",
}: CallToActionProps) {
  return <button className={`callToAction ${textStyle}`}>{label}</button>;
}
