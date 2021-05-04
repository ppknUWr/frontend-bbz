import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDBList] = useState();
    const [currentDB, setCurrentDB] = useState({});


    const handleDBChange = (dbName) => {
        console.log(dbName)
        setCurrentDB(dbName)
    }

    const value = {
        handleDBChange: handleDBChange
    }

    return (
        <DataContext.Provider value={value}>
        {props.children}
        </DataContext.Provider>
    )
}

export { ContextController, DataContext };