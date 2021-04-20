import React from "react";
import "../../styles/header-styles.css";

const Header = () => {
    return (
    <div className="header-container">
        <div className="nav-container">
            <div className="logo-container">
                <div>
                    ZDJECIE
                </div>
                <div>
                    PRACOWNIA HUMANISTYKI CYFROWEJ
                </div>
            </div>
            <div className="menu-container">
                <div className="link-container">
                    <a>Home</a>
                </div>
                <div className="link-container">
                    <a>Partnerzy</a>
                </div>
                <div className="link-container">
                    <a>Projekty</a>
                </div>
                <div className="link-container">
                    <a>Repozytoria</a>
                </div>
                <div className="link-container">
                    <a>Spotkania z HC</a>
                </div>
            </div>
        </div>
    </div>)
}


export default Header;