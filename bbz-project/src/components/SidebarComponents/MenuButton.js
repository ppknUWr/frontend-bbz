import React from "react";
import MenuIcon from '@material-ui/icons/Menu';

const MenuButton = (props) => {
    return (
            <button onClick={props.onClick}><MenuIcon /></button>
    )
}

export default MenuButton;