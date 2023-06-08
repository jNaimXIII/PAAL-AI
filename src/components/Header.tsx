import "./Header.css";
import PAALAILogo from "../assets/paal-ai-logo.png";
import CallToAction from "./CallToAction";

export default function Header() {
  return (
    <header className="header">
      <img src={PAALAILogo} alt="PAALAI AI" />

      <CallToAction label="Whitepaper" />
    </header>
  );
}
