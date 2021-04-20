import React, {useState} from "react";
import "../../styles/sidebar-styles.css";
import DataBaseList from "./DataBaseList";
import DataBaseSearchTextField from "./DataBaseSearchTextField";
import UniversitetLogo from "./UniversitetLogo";
import MenuButton from "./MenuButton";

const Sidebar = () => {
    const [visible, setVisible] = useState(true);

    const handleNavbarClick = () => {
        setVisible(prevState => !prevState);
    }

    return (<>
        {!visible && <button onClick={handleNavbarClick}>X</button>}
        <div className={visible ? "sidebar active" : "sidebar"}>
            <div className="navbar">
                <div className="title">Bibliografie Specjalne</div>
                <div>
                    <MenuButton onClick={handleNavbarClick} />
                </div>
            </div>
            <DataBaseSearchTextField />
            <DataBaseList />
            <UniversitetLogo />
        </div>
        </>
    )
}

export default Sidebar;