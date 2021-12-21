import "../../styles/sidebar-styles.css";
import React, { useState, useEffect, useContext } from "react";
import { DataContext } from "../ContextController";

const DataBaseListItem = ({ dbId, dbName, handleDBChange }) => {
    const [className, setClassName] = useState("list-item");
    const { currentDbId } = useContext(DataContext);

    useEffect(() => {
        setClassName((dbId === currentDbId) ? "list-item-active" : "list-item");
    }, [currentDbId, dbId])

    return (
        <div className={className} onClick={() => handleDBChange(dbId)}>
            {dbName}
        </div>
    )
}

export default DataBaseListItem;