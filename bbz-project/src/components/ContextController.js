import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDBList] = useState();
    const [dbNames, setDBNames] = useState();
    const [currentDb, setCurrentDb] = useState({});
    const { fetchDbNames, addRecord, deleteRecord, editRecord } = useFetch("https://backend-bbz.herokuapp.com/api")

    /* podaj url do endpointa */
    const handleDbFetch = async () => {
        const response = await fetchDbNames("/db_names");
        console.log(response)
        setDBNames(response)
    }


    const handleDbChange = (dbName) => {
        setCurrentDb(dbName)
    }

    const value = {
        dbNames: dbNames,
        handleDbChange: handleDbChange,
        handleDbFetch: handleDbFetch
    }

    return (
        <DataContext.Provider value={value}>
        {props.children}
        </DataContext.Provider>
    )
}

export { ContextController, DataContext };