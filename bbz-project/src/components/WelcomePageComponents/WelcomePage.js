import UniversitetLogo from "../SidebarComponents/UniversitetLogo";
import "../../styles/welcomepage-styles.css";
import LoginButton from "./LoginButton";


const WelcomePage = () => {
    return (
        <div className="welcomepage-container">
            <div className="welcomepage-content">
                <div className="welcomepage-title">
                    <h1>Pracownia Humanistyki Cyfrowej</h1>
                </div>
                <div className="margin-top-20">
                    <h2>Bibliografie Specjalne</h2>
                </div>
                <div className="welcomepage-description margin-top-20">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                </div>
                <div className="welcomepage-description margin-top-20">
                    <p>Wybierz bibliografię lub zaloguj się do panelu administratora</p>
                    <div className="welcomepage-content">
                        <LoginButton />
                    </div>
                </div>
            </div>
            <div>
                <UniversitetLogo />
            </div>
        </div>
    )
}

export default WelcomePage;