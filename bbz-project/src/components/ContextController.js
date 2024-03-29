import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = (props) => {
    const [dbNames, setDbNames] = useState("");
    const [currentDbId, setCurrentDbId] = useState(null);
    const [currentDb, setCurrentDb] = useState([]);
    const [currentDbDetails, setCurrentDbDetails] = useState({});

    // addRecord, deleteRecord, editRecord are placeholders for future implementation
    const { get } = useFetch("https://backend-bbz.herokuapp.com/api")

    useEffect(() => {
        const fetchData = async () => {
            if (!currentDbId) {
                setCurrentDb([]);
                setCurrentDbDetails({});
                return;
            }
                
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

        return () => {
            setCurrentDb([]);
        }
    }, [currentDbId])

    /* podaj url do endpointa */
    const handleDbListFetch = async () => {
        const response = await get("/db_names");
        if (response)
            setDbNames(response.message);
    }


    const handleDbChange = (dbId) => {
        setCurrentDbId(dbId);
        setCurrentDbDetails(dbNames[dbId-1]);
    }

    const value = {
        dbNames: dbNames,
        recordsList: currentDb,
        currentDbId: currentDbId,
        currentDbDetails: currentDbDetails,
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