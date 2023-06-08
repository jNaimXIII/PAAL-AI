import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
