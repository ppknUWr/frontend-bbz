import React from "react";
import "../../styles/sidebar-styles.css";

const DataBaseListItem = (props) => {
    const {title} = props;

    return (
        <div className="list-item">
            {title}
        </div>
    )
}

export default DataBaseListItem;