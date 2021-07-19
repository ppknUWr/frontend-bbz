import * as React from "react";
import "../../styles/top-bar-styles.css"
import bckImage from "../../assets/TopBarBackground.jpg";

const TopBar = () => {
  return (
    <div className={"w-100 h-100"} id={"topBarBck"} style={{backgroundColor: "red"}}>
      <img src={bckImage} alt={"TopBarImg"} id={"topBarImg"}/>
    </div>
  )
}

export default TopBar;