import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbList, setDbList] = useState();
    const [dbNames, setDbNames] = useState();
    const [currentDbId, setCurrentDbId] = useState(0);
    const [currentDb, setCurrentDb] = useState([]);
    // addRecord, deleteRecord, editRecord are placeholders for future implementation
    const { get, addRecord, deleteRecord, editRecord } = useFetch("https://backend-bbz.herokuapp.com/api")

    useEffect(async () => {
        const response = await get(`/request_db?db=${currentDbId}`);
        if (response) {
            let newRecordsList = [];
            for(let record in response.message) {
                newRecordsList.push(response.message[record]);
            }
            setCurrentDb(newRecordsList);
        }
    }, [currentDbId])

    /* podaj url do endpointa */
    const handleDbListFetch = async () => {
        const response = await get("/db_names");
        if (response)
            setDbNames(response.result.names)
    }


    const handleDbChange = (dbId) => {
        console.log(dbId)
        setCurrentDbId(dbId)
    }

    const value = {
        dbNames: dbNames,
        recordsList: currentDb,
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