import * as React from "react";
import "../../styles/top-bar-styles.css";
import DropDownMenuItem from "./DropDownMenuItem";
import { TOP_BAR_PAGES } from "../../constants/top-bar-pages";
import image from "../../assets/PhcTopBarFigure.png";

const TopBar = () => {
  return (
    <>
      <div
        id={"topBarBlackEffect"}
        className={"position-absolute w-100 h-100"}
      />
      <div id={"topBarContentBck"} className={"w-100 h-100 p-2"}>
        <div id={"topBarBodyBck"} className={"w-100 h-100"}>
          <div
            id={"topBarBodyLeftBck"}
            className={
              "w-50 h-100 d-flex align-items-center justify-content-center"
            }
          >
            <img src={image} alt={"figure"} />
            <div id={"topBarBodyLeftText"}>
              Pracownia Humanistyki Cyfrowej IINiB UWr
            </div>
          </div>
          <div
            id={"topBarBodyRightBck"}
            className={"w-50 h-100 d-flex align-items-center"}
          >
            <div id={"topBarBodyRightHelper"} className={"w-100"}>
              {TOP_BAR_PAGES.map((item, index) => (
                <DropDownMenuItem
                  pages={item}
                  zIndex={TOP_BAR_PAGES.length - index + 1}
                />
              ))}
              <div id={"topBarLang"}>EN</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;