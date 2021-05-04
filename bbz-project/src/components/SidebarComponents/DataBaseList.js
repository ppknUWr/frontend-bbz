import React, { useContext } from "react"
import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";
import { DataContext } from "../ContextController"

/*
    Wyświetla listę dostępnych baz danych
*/

const DataBaseList = ({ dbList }) => {

    const { handleDBChange } = useContext(DataContext);

    /* TODO: w przyszłości dodać unikalny klucz do elementów lsty*/
    return (
        <div className="database-container">
        {
            dbList.map((item, index) => {
                return (
                    <DataBaseListItem handleDBChange={handleDBChange} dbName={item.dbName}/>
                )
            })
        }
        </div>)

}

export default DataBaseList;
