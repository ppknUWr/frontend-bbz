import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDBList] = useState();
    const [currentDB, setCurrentDB] = useState({});
    const { fetchDBs, addRecord, deleteRecord, editRecord } = useFetch("")

    /* podaj url do endpointa */
    const handleDBFetch = () => {
        setDBList(fetchDBs("LINK"));
    }


    const handleDBChange = (dbName) => {
        console.log(dbName)
        setCurrentDB(dbName)
    }

    const value = {
        handleDBChange: handleDBChange,
        handleDBFetch: handleDBFetch
    }

    return (
        <DataContext.Provider value={value}>
        {props.children}
        </DataContext.Provider>
    )
}

export { ContextController, DataContext };