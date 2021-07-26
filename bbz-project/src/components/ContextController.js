import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDbList] = useState();
    const [dbNames, setDbNames] = useState();
    const [currentDbId, setCurrentDbId] = useState(0);
    const [currentDb, setCurrentDb] = useState({});
    const { get, addRecord, deleteRecord, editRecord } = useFetch("https://backend-bbz.herokuapp.com/api")

    useEffect(async () => {
        const response = await get(`/request_db?db=${currentDbId}`)
        console.log(response.message)
        setCurrentDb(response.message)

    }, [currentDbId])

    /* podaj url do endpointa */
    const handleDbListFetch = async () => {
        const response = await get("/db_names");
        setDbNames(response.result.names)
    }


    const handleDbChange = (dbId) => {
        console.log(dbId)
        setCurrentDb(dbId)
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