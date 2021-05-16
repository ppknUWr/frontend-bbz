import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDbList] = useState();
    const [dbNames, setDbNames] = useState();
    const [currentDb, setCurrentDb] = useState({});
    const { fetchDbNames, addRecord, deleteRecord, editRecord } = useFetch("https://backend-bbz.herokuapp.com/api")

    /* podaj url do endpointa */
    const handleDbListFetch = async () => {
        const response = await fetchDbNames("/db_names");
        console.log(response)
        setDbNames(response)
    }


    const handleDbChange = (dbName) => {
        setCurrentDb(dbName)
    }

    const value = {
        dbNames: dbNames,
        handleDbChange: handleDbChange,
        handleDbListFetch: handleDbListFetch
    }

    return (
        <DataContext.Provider value={value}>
        {props.children}
        </DataContext.Provider>
    )
}

export { ContextController, DataContext };