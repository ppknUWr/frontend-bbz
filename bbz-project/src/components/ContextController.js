import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbNames, setDbNames] = useState();
    const [currentDbId, setCurrentDbId] = useState();
    const [isDbSelected, setIsDbSelected] = useState(false);
    const [currentDb, setCurrentDb] = useState([]);

    // addRecord, deleteRecord, editRecord are placeholders for future implementation
    const { get } = useFetch("https://backend-bbz.herokuapp.com/api")

    useEffect(() => {
        const fetchData = async () => {
            if (!currentDbId)
                return;
                
            const response = await get(`/request_db?db=${currentDbId}`);
            if (response) {
                let newRecordsList = [];
                for(let record in response.message) {
                    newRecordsList.push(response.message[record]);
                }
                setCurrentDb(newRecordsList);
            }
        }
        fetchData();
    }, [currentDbId])

    /* podaj url do endpointa */
    const handleDbListFetch = async () => {
        const response = await get("/db_names");
        if (response)
            setDbNames(response.message);
    }


    const handleDbChange = (dbId) => {
        setIsDbSelected(true);
        setCurrentDbId(dbId);
    }

    const value = {
        dbNames: dbNames,
        recordsList: currentDb,
        isDbSelected: isDbSelected,
        setIsDbSelected: setIsDbSelected,
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