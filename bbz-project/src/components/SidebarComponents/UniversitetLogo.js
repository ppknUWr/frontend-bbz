import React from "react";
import logo_UWr from "../../logo_UWr.svg"
import "../../styles/sidebar-styles.css";

const UniversitetLogo = () => {
    return (
    <div className="uwrlogo-container">
        <span className="separator"></span>
        <div className="universitet-logo">
            <img className="logo-img" src={logo_UWr} alt="logo" />
        </div>
    </div>)
}

export default UniversitetLogo;