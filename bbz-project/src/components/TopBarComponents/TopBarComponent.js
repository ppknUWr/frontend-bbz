import * as React from "react";
import "../../styles/top-bar-styles.css";
import DropDownMenuItem from "./DropDownMenuItem";
import { TOP_BAR_PAGES } from "../../constants/top-bar-pages";
import image from "../../assets/PhcTopBarFigure.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import bckImage from "../../assets/TopBarBackground.jpg";
import {useScreenSizes} from "../../hooks/useScreenSizes";

const TopBar = () => {
  const [areOptionsVisible, setAreOptionsVisible] = React.useState(false);
  const [rightElementPosition, setRightElementPosition] = React.useState(
    "static"
  );
  const {topBarIconBreakpoint} = useScreenSizes();

  React.useEffect(() => {
    setAreOptionsVisible(!topBarIconBreakpoint);
    if (topBarIconBreakpoint) {
      setRightElementPosition("absolute");
    } else {
      setRightElementPosition("static");
    }
  }, [topBarIconBreakpoint]);

  const onClickIcon = () => {
    setAreOptionsVisible((val) => !val);
  };

  return (
    <>
      <div
        className={"position-absolute w-100 overflow-hidden"}
        id={"topBarImgBck"}
      >
        <img src={bckImage} alt={"TopBarImg"} id={"topBarImg"} />
      </div>
      <div
        id={"topBarBlackEffect"}
        className={"position-absolute w-100 h-100"}
      />
      <div id={"topBarContentBck"} className={"w-100 h-100 p-2"}>
        <div id={"topBarBodyBck"} className={"w-100 h-100 d-flex flex-row"}>
          <div
            id={"topBarBodyRightBck"}
            className={"w-100 align-items-center"}
            style={{
              display: areOptionsVisible ? "flex" : "none",
              position: rightElementPosition,
              height: topBarIconBreakpoint ? "fit-content" : "100%",
            }}
          >
            <div id={"topBarBodyRightHelper"}>
              {TOP_BAR_PAGES.map((item, index) => (
                <DropDownMenuItem
                  pages={item}
                  zIndex={TOP_BAR_PAGES.length - index + 1}
                />
              ))}
              <div id={"topBarLang"}>EN</div>
            </div>
          </div>
          <div
            id={"topBarBodyLeftBck"}
            className={
              "h-100 position-absolute align-items-center justify-content-center"
            }
          >
            <img src={image} alt={"figure"} className={"position-absolute"}/>
            <div id={"topBarBodyLeftText"}>
              Pracownia Humanistyki Cyfrowej IINiB UWr
            </div>
          </div>
          {areOptionsVisible ? (
            <VscChromeClose
              style={{ display: topBarIconBreakpoint ? "block" : "none" }}
              className={"position-absolute topBarIcon"}
              size={32}
              color={"white"}
              onClick={onClickIcon}
            />
          ) : (
            <GiHamburgerMenu
              style={{ display: topBarIconBreakpoint ? "block" : "none" }}
              className={"position-absolute topBarIcon"}
              size={32}
              color={"white"}
              onClick={onClickIcon}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TopBar;
