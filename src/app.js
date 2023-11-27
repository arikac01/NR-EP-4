import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import styles from "/index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Rescards from "./components/Rescards";


const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);