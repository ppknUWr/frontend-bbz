import React from "react"
import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";


const DataBaseList = () => {


    const testData = [
        {
            title: "Źródła informacji o globalnym rynku książki po 2001 roku"
        },
        {
            title: "Ilustrowane i obrazkowe słowniki dla dzieci wydane w Polsce w latach 1989-2015"
        },
        {
            title: "Polska literatura fantastyczna 1901-1945"
        },
        {
            title: "„Irlandia” w zbiorach Biblioteki Uniwersytetu Wrocławskiego"
        },
        {
            title: "International Bibliography of Quantitative Linguistics"
        }
    ]
    

    /* have to find a way, how to make unique key for eac item in the list*/
    return (
        <div className="database-container">
        {
            testData.map((item, index) => {
                return (
                    <DataBaseListItem title={item.title}/>
                )
            })
        }
        </div>)

}

export default DataBaseList;
