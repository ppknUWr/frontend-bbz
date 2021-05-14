import React, {useState, useContext } from "react";
import "../../styles/sidebar-styles.css";
import DataBaseList from "./DataBaseList";
import DataBaseSearchTextField from "./DataBaseSearchTextField";
import UniversitetLogo from "./UniversitetLogo";
import SidebarNav from "./SidebarNav";
import { DataContext } from "../ContextController"


/* Can be transformed into hook in the future */
/* input validation will be needed */

const filterMatchingDBs = (dbArray, query) => {
    if (!query) /* jeśli searchfield jest pusty, zwróć całą oryginalną tablice */
        return dbArray;
    
    return dbArray.filter((dbArray) => {
        const name = dbArray.name.toLowerCase();
        return name.includes(query.toLowerCase());
    })
}

const Sidebar = () => {

    /* Wysuwanie sidebara będzie raczej dostępne tylko w wersji mobilnej */
    const [visible, setVisible] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const { handleDbChange, dbNames } = useContext(DataContext);
    const filteredArray = filterMatchingDBs(dbNames, searchQuery);


    const handleMenuBarClick = () => {
        setVisible(prevState => !prevState);
    }

    return (<>
        {/*!visible && <button onClick={handleMenuBarClick}>X</button>*/}
        <div className={visible ? "sidebar active" : "sidebar"}>
            <SidebarNav handleMenuBarClick={handleMenuBarClick}/>
            <DataBaseSearchTextField searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <DataBaseList dbList={filteredArray} handleDbChange={handleDbChange}/>
            <UniversitetLogo separatorVisible={true}/>
        </div>
        </>
    )
}

export default Sidebar;