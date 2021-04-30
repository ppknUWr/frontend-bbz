import React, { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";

const DataContext = createContext();

const ContextController = () => {
    const [dbList, setDBList] = useState();
    const [currentDB, setCurrentDB] = useState({});
    const {fetchDBs, addRecord, editRecord, deleteRecord, exportToPDF} = useFetch("URL");

    const fetchDBs = () => {
        
    }

    return (
        <DataContext.Provider>
        {props.children}
        </DataContext.Provider>
    )
}