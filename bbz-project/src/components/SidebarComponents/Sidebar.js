import React, {useState} from "react";
import "../../styles/sidebar-styles.css";
import DataBaseList from "./DataBaseList";
import DataBaseSearchTextField from "./DataBaseSearchTextField";
import UniversitetLogo from "./UniversitetLogo";
import SidebarNav from "./SidebarNav";

const Sidebar = () => {
    /* visibility options probably will be only used in mobile version */
    const [visible, setVisible] = useState(true);

    const testData = [
        {
            dbName: "Źródła informacji o globalnym rynku książki po 2001 roku"
        },
        {
            dbName: "Ilustrowane i obrazkowe słowniki dla dzieci wydane w Polsce w latach 1989-2015"
        },
        {
            dbName: "Polska literatura fantastyczna 1901-1945"
        },
        {
            dbName: "„Irlandia” w zbiorach Biblioteki Uniwersytetu Wrocławskiego"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        }
    ]

    const handleMenuBarClick = () => {
        setVisible(prevState => !prevState);
    }

    const handleDBChange = (dbName) => {
        console.log(dbName)
    }

    return (<>
        {!visible && <button onClick={handleMenuBarClick}>X</button>}
        <div className={visible ? "sidebar active" : "sidebar"}>
            <SidebarNav handleMenuBarClick={handleMenuBarClick}/>
            <DataBaseSearchTextField />
            <DataBaseList handleDBChange={handleDBChange} dbList={testData}/>
            <UniversitetLogo />
        </div>
        </>
    )
}

export default Sidebar;