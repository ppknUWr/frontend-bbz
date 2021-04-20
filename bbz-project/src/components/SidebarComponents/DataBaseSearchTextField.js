import React from "react";
import Input from "@material-ui/core/Input";
import "../../styles/sidebar-styles.css";

const DataBaseSearchTextField = () => {

    return (
        <div className="search-container">
            <div className="search-input">
                <form>
                    <Input placeholder="Szukaj..." fullWidth={true} />
                </form>
            </div>
        </div>
    )

}

export default DataBaseSearchTextField;