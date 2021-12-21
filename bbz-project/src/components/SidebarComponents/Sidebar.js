import React, {useState, useContext } from "react";
import "../../styles/sidebar-styles.css";
import DataBaseList from "./DataBaseList";
import { filter } from "../../helpers/helper-functions";
import DataBaseSearchTextField from "./DataBaseSearchTextField";
import UniversitetLogo from "./UniversitetLogo";
import { DataContext } from "../ContextController"

const Sidebar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { handleDbChange, dbNames } = useContext(DataContext);
    const filteredArray = filter(dbNames, searchQuery, "db_name");

    return (
        <>
            <div className={"sidebar active"}>
                <DataBaseSearchTextField searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                <DataBaseList dbList={filteredArray} handleDbChange={handleDbChange}/>
                <UniversitetLogo separatorVisible={true}/>
            </div>
        </>
    )
}

export default Sidebar;