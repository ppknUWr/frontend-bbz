import * as React from "react";
import "../../styles/top-bar-styles.css"
import DropDownMenuItem from "./DropDownMenuItem";

const TopBar = () => {
  return (
    <div id={"topBarContentBck"} className={"w-100 h-100 p-2"}>
      <div id={"topBarBodyBck"} className={"w-100 h-100"}>
        <div id={"topBarBodyLeftBck"} className={"w-50 h-100"}>
          Left body part
        </div>
        <div id={"topBarBodyRightBck"} className={"w-50 h-100 d-flex align-items-center"}>
          <div id={"topBarBodyRightHelper"} className={"w-100"}>
            <DropDownMenuItem
              title={"Home"}
              subpages={['Home', 'Aktualności', 'O nas']}/>
            <DropDownMenuItem
              title={"Partnerzy"}
              subpages={['KLARIN', 'DARIACH', 'Katedra Judaistyki']}/>
            <DropDownMenuItem
              title={"Projekty"}
              subpages={['DARIACH', 'Interreg', 'NCN', 'Kulturomika']}/>
            <DropDownMenuItem
              title={"Repozytoria"}
              subpages={
                [
                  'Biblioteka cyfrowa',
                  'Bibliografie tematyczne',
                  'HC na UWc',
                  'Moduł analityczny',
                  'Wystawy',
                ]
              }/>
            <DropDownMenuItem
              title={"Spotkania z HC"}
              subpages={['']}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar;