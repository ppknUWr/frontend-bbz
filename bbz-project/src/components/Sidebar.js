import React, {useState} from "react";
import "../styles/sidebar-styles.css";

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
    

    return (
        <div className={visible ? "sidebar active" : "sidebar"}>
            <div className="navbar">
                <p>Bibliografie Specjalne</p>
                <button onClick={handleNavbarClick}>Bars</button>
            </div>
            <div className="search">
                <form>
                    <input type="text" value="Szukaj" />
                </form>
            </div>
            <div className="database-container">
                <ul>
                    {
                        testData.map((item, index) => {
                            return (
                                <div className="sidebar-item">
                                    <li key={index} >{item.title}</li>
                                </div>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;