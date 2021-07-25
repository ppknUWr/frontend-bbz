import * as React from "react";
import "../../styles/drop-down-menu-item-styles.css"
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const DropDownMenuItem = ({pages, zIndex}) => {
  return (
    <div className={"ddmiMainBck"} style={{zIndex: zIndex}}>
      <div className={"ddmiBck p-1 d-flex justify-content-center flex-row align-items-center"}>
        <svg className={"ddmiArrowIcon"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30">
          <path
            d="M3.5,0a.51.51,0,0,0-.26.93l22,13.5A1.3,1.3,0,0,1,26,15.5a1.3,1.3,0,0,1-.76,1.07L4.74,28.92c-.42.24-.74-.08-.74-.57V3.5a.5.5,0,0,0-1,0V28.35a1.6,1.6,0,0,0,.86,1.52,1.5,1.5,0,0,0,1.4-.09l20.5-12.35A2.34,2.34,0,0,0,27,15.5a2.34,2.34,0,0,0-1.24-1.93L3.76.07A.46.46,0,0,0,3.5,0Z"
            transform="translate(-3)"/>
        </svg>
        <div className={"ddmiText"}>
          {pages.subpages.length === 0
            ? ( <a href={pages.link}>{pages.page}</a> )
            : pages.page
          }
        </div>
        {
          pages.subpages.length === 0
            ? <></>
            : <ArrowDropDownIcon className={"ddmiDropDownIcon"}/>
        }
      </div>
      {pages.subpages.length === 0
        ? <></>
        : <ul className={"ddmiList"}>
          {pages.subpages.map((item, index) => item.subpages.length > 0
            ? (
              <li key={index} className={"pt-2 pb-2 ddmiLiWithSublist"}>
                {item.page}
                <ArrowDropDownIcon className={"ddmiDropDownIcon"}/>
                <ul className={"ddmiListSublist pl-4 pr-4"}>
                  {item.subpages.map((secItem, secIndex) => (
                    <li key={secIndex} className={"p-2"}>
                      <a href={secItem.link}>{secItem.page}</a>
                    </li>
                  ))}
                </ul>
              </li>
            )
            : (
              <li key={index} className={"pt-2 pb-2 ddmiLiWithoutSublist"}>
                <a href={item.link}>{item.page}</a>
              </li>
            ))}
        </ul>
      }
    </div>
  )
}

export default DropDownMenuItem;