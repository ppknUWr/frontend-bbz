import React, {useState} from "react";
import "../../styles/sidebar-styles.css";
import DataBaseList from "./DataBaseList";
import DataBaseSearchTextField from "./DataBaseSearchTextField";
import UniversitetLogo from "./UniversitetLogo";
import SidebarNav from "./SidebarNav";

/* Can be transformed into hook in the future */
/* input validation will be needed */

const filterMatchingDBs = (dbArray, query) => {
    if (!query) /* jeśli searchfield jest pusty, zwróć całą oryginalną tablice */
        return dbArray
    
    return dbArray.filter((dbArray) => {
        const name = dbArray.dbName.toLowerCase();
        return name.includes(query.toLowerCase());
    })
}

const Sidebar = () => {
    const testData = [
        {
            dbName: "Źródła informacji o globalnym rynku książki po 2001 roku"
        },
        {
            dbName: "Ilustrowane i obrazkowe słowniki dla dzieci wydane w Polsce w latach 1989-2015"
        },
        {
            dbName: "Polska literatura fantastyczna 1901-1945"
        },
        {
            dbName: "„Irlandia” w zbiorach Biblioteki Uniwersytetu Wrocławskiego"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        },
        {
            dbName: "International Bibliography of Quantitative Linguistics"
        },
        {
            dbName: "International Bib\"liography of Quantitative Linguistics"
        }
    ]

    /* Wysuwanie sidebara będzie raczej dostępne tylko w wersji mobilnej */
    const [visible, setVisible] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const filteredArray = filterMatchingDBs(testData, searchQuery);

    const handleMenuBarClick = () => {
        setVisible(prevState => !prevState);
    }

    const handleDBChange = (dbName) => {
        console.log(dbName)
    }


    return (<>
        {/*!visible && <button onClick={handleMenuBarClick}>X</button>*/}
        <div className={visible ? "sidebar active" : "sidebar"}>
            <SidebarNav handleMenuBarClick={handleMenuBarClick}/>
            <DataBaseSearchTextField searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
            <DataBaseList handleDBChange={handleDBChange} dbList={filteredArray}/>
            <UniversitetLogo />
        </div>
        </>
    )
}

export default Sidebar;