import React from "react";
import logo_UWr from "../../logo_UWr.svg"
import "../../styles/sidebar-styles.css";

const UniversitetLogo = ({separatorVisible}) => {
    return (
    <div className="uwrlogo-container">
        {separatorVisible &&<span className="separator"></span>}
        <div className="universitet-logo">
            <img className="logo-img" src={logo_UWr} alt="logo" />
        </div>
    </div>)
}

export default UniversitetLogo;