import React from "react"
import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";


/*
    Wyświetla listę dostępnych baz danych
*/

const DataBaseList = ({ dbList , handleDbChange }) => {


    /* TODO: w przyszłości dodać unikalny klucz do elementów lsty*/
    return (
        <div className="database-container">
        {
            dbList && dbList.map((item) => {
                return (
                    <DataBaseListItem key={item.id} handleDBChange={handleDbChange} dbName={item.name}/>
                )
            })
        }
        </div>)

}

export default DataBaseList;
