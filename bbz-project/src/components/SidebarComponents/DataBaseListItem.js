import "../../styles/sidebar-styles.css";

const DataBaseListItem = ({ dbId, dbName, handleDBChange }) => {

    return (
        <div className="list-item" onClick={() => handleDBChange(dbId)}>
            {dbName}
        </div>
    )
}

export default DataBaseListItem;