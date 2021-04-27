import "../../styles/sidebar-styles.css";
import MenuButton from "./MenuButton";

const SidebarNav = ({ handleMenuBarClick }) => {
    return (
        <div className="navbar">
            <div className="title">Bibliografie Specjalne</div>
            <div>
                <MenuButton onClick={handleMenuBarClick} />
            </div>
    </div>
    )
}

export default SidebarNav;