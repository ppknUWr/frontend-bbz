import React from "react";
import "../../styles/sidebar-styles.css";

const DataBaseListItem = ({ dbName, handleDBChange }) => {

    return (
        <div className="list-item" onClick={() => handleDBChange(dbName)}>
            {dbName}
        </div>
    )
}

export default DataBaseListItem;