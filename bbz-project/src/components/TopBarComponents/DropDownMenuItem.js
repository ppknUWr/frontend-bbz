import * as React from "react";
import "../../styles/drop-down-menu-item-styles.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const DropDownMenuItem = ({title, subpages}) => {
  return (
    <div id={"ddmiMainBck"}>
      <div id={"ddmiBck"} className={"p-1 d-flex justify-content-center flex-row align-items-center"}>
        <svg id={"ddmiArrowIcon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
          <path
            d="M3.5,0a.51.51,0,0,0-.26.93l22,13.5A1.3,1.3,0,0,1,26,15.5a1.3,1.3,0,0,1-.76,1.07L4.74,28.92c-.42.24-.74-.08-.74-.57V3.5a.5.5,0,0,0-1,0V28.35a1.6,1.6,0,0,0,.86,1.52,1.5,1.5,0,0,0,1.4-.09l20.5-12.35A2.34,2.34,0,0,0,27,15.5a2.34,2.34,0,0,0-1.24-1.93L3.76.07A.46.46,0,0,0,3.5,0Z"
            transform="translate(-3)"/>
        </svg>
        <div id={"ddmiText"}>
          {title}
        </div>
        <ArrowDropDownIcon id={"ddmiDropDownIcon"}/>
      </div>
      {subpages.length === 1 && subpages[0] === ''
        ? <></>
        : <ul id={"ddmiList"} className={"w-100"}>
          {subpages.map((item, index) => (
            <li key={index} className={"p-2"}>
              {item}
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default DropDownMenuItem;