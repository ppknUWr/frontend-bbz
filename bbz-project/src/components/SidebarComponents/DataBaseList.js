import React from "react"
import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";

/*
    Wyświetla listę dostępnych baz danych
*/

const DataBaseList = ({handleDBChange, dbList}) => {

    

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
