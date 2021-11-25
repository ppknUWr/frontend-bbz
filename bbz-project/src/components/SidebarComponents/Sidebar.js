import React, {useState, useContext } from "react";
import "../../styles/sidebar-styles.css";
import DataBaseList from "./DataBaseList";
import { filter } from "../../helpers/helper-functions";
import DataBaseSearchTextField from "./DataBaseSearchTextField";
import UniversitetLogo from "./UniversitetLogo";
import { DataContext } from "../ContextController"

const Sidebar = () => {

    /* Wysuwanie sidebara będzie raczej dostępne tylko w wersji mobilnej */
    const [visible, setVisible] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const { handleDbChange, dbNames } = useContext(DataContext);
    const filteredArray = filter(dbNames, searchQuery, "db_name");


    // const handleMenuBarClick = () => {
    //     setVisible(prevState => !prevState);
    // }

    return (<>
        {/*!visible && <button onClick={handleMenuBarClick}>X</button>*/}
        <div className={visible ? "sidebar active" : "sidebar"}>
            <DataBaseSearchTextField searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <DataBaseList dbList={filteredArray} handleDbChange={handleDbChange}/>
            <UniversitetLogo separatorVisible={true}/>
        </div>
        </>
    )
}

export default Sidebar;