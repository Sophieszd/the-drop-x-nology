import React from "react";
import styles from "./App.module.scss";
import LandingPage from "../LandingPage";
import LoginPage from "../LoginPage";
import Navbar from "../../components/Navbar";
import Main from "../Main";

function App() {
    return (
        <div className={styles.App}>
            <LoginPage />
        </div>
    );
}

export default App;
