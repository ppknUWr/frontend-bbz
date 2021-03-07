import React, {useState} from "react";
import "../../styles/sidebar-styles.css";
import DataBaseListItem from "./DataBaseListItem";
import UniversitetLogo from "./UniversitetLogo";
import Input from "@material-ui/core/Input";
import MenuButton from "./MenuButton";

const Sidebar = () => {
    const [visible, setVisible] = useState(true);

    const handleNavbarClick = () => {
        setVisible(prevState => !prevState);
    }

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
    

    return (<>
        {!visible && <button onClick={handleNavbarClick}>X</button>}
        <div className={visible ? "sidebar active" : "sidebar"}>
            <div className="navbar">
                <div className="title">Bibliografie Specjalne</div>
                <div>
                    <button onClick={handleNavbarClick}>Bars</button>
                </div>
            </div>
            <div className="search-container">
                <form>
                    <div className="search-input">
                    <Input placeholder="Szukaj..." fullWidth={true} />
                    </div>
                </form>
            </div>
            <div className="database-container">
                    {
                        testData.map((item, index) => {
                            return (
                                <DataBaseListItem title={item.title}/>
                            )
                        })
                    }
            </div>
            <UniversitetLogo />
        </div>
        </>
    )
}

export default Sidebar;