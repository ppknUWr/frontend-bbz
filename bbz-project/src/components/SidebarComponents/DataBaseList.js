import React from "react"
import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";


const DataBaseList = ({handleDBChange, dbList}) => {

    

    /* have to find a way, how to make unique key for eac item in the list*/
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
