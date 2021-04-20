import React from "react";
import logo_UWr from "../../logo_UWr.svg"


const UniversitetLogo = () => {
    return (
    <div class="uwrlogo-container">
        <span className="separator"></span>
        <div className="universitet-logo">
            <img className="logo-img" src={logo_UWr} alt="logo" width="200" height="100"/>
        </div>
    </div>)
}

export default UniversitetLogo;