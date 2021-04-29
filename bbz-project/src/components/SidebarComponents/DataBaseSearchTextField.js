import React from "react";
import Input from "@material-ui/core/Input";
import "../../styles/sidebar-styles.css";

const DataBaseSearchTextField = ({ searchQuery, setSearchQuery }) => {

    return (
        <div className="search-container">
            <div className="search-input">
                    <Input value={searchQuery} onChange={event => setSearchQuery(event.target.value)} type="text" placeholder="Szukaj..." fullWidth={true} />
            </div>
        </div>
    )

}

export default DataBaseSearchTextField;