import "../../styles/sidebar-styles.css";
import MenuButton from "./MenuButton";

const SidebarNav = ({ handleOnClick }) => {
    return (
        <div className="navbar">
            <div className="title" onClick={() => handleOnClick(false)}>Bibliografie Specjalne</div>
    </div>
    )
}

export default SidebarNav;