import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";
import LoadingSpinner from "../LoadingSpinner";

/*
    Wyświetla listę dostępnych baz danych
*/

const DataBaseList = ({ dbList , handleDbChange }) => {


    /* TODO: koło loading, gdy fetchują się bazy*/
    return (
        <div className="database-container">
        {
            dbList ? dbList.map((item) => {
                return (
                    <DataBaseListItem key={item.id} handleDBChange={handleDbChange} dbName={item.db_name} dbId={item.id}/>
                )
            })
            : <LoadingSpinner />
        }
        </div>)

}

export default DataBaseList;
