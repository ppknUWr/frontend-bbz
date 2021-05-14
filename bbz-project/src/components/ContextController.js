import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDBList] = useState();
    const [dbNames, setDBNames] = useState();
    const [currentDB, setCurrentDB] = useState({});
    const { fetchDBNames, addRecord, deleteRecord, editRecord } = useFetch("https://backend-bbz.herokuapp.com/api")

    /* podaj url do endpointa */
    const handleDBFetch = async () => {
        const response = await fetchDBNames("/db_names");
        console.log(response)
        setDBNames(response)
    }


    const handleDBChange = (dbName) => {
        setCurrentDB(dbName)
    }

    const value = {
        dbNames: dbNames,
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