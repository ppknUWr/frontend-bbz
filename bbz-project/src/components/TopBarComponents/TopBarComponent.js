import * as React from "react";
import "../../styles/top-bar-styles.css";
import image from "../../assets/PhcTopBarFigure.png";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { VscChromeClose } from "react-icons/vsc";
import bckImage from "../../assets/TopBarBackground.jpg";
// import { useScreenSizes } from "../../hooks/useScreenSizes";
import { DataContext } from "../ContextController"

const TopBar = () => {
  const [optionsDisplayProp, setOptionsDisplayProp] = React.useState("flex");
  // const [areOptionsVisible, setAreOptionsVisible] = React.useState(false);
  const [rightElementPosition, setRightElementPosition] = React.useState(
    "static"
  );
  const { handleDbChange } = React.useContext(DataContext);

  // const { topBarIconBreakpoint } = useScreenSizes();

  // React.useEffect(() => {
  //   setAreOptionsVisible(!topBarIconBreakpoint);
  //   if (topBarIconBreakpoint) {
  //     setRightElementPosition("absolute");
  //   } else {
  //     setRightElementPosition("static");
  //   }
  // }, [topBarIconBreakpoint]);

  // React.useEffect(() => {
  //   if (areOptionsVisible && topBarIconBreakpoint) {
  //     setOptionsDisplayProp("table");
  //   } else if (topBarIconBreakpoint) {
  //     setOptionsDisplayProp("none");
  //   } else {
  //     setOptionsDisplayProp("flex");
  //   }
  // }, [areOptionsVisible, topBarIconBreakpoint]);

  // const onClickIcon = () => {
  //   setAreOptionsVisible((val) => !val);
  // };

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
              display: optionsDisplayProp,
              position: rightElementPosition,
            }}
          >
            <div id={"topBarBodyRightTextContainer"}>
              <div id={"topBarBodyRightText"} onClick={() => handleDbChange(null)}>
                Bibliografie Tematyczne
              </div>
            </div>
          </div>
          <div
            id={"topBarBodyLeftBck"}
            className={
              "h-100 position-absolute align-items-center justify-content-center"
            }
          >
            <img src={image} alt={"figure"} className={"position-absolute"} />
            <div id={"topBarBodyLeftText"}>
              <a href={"http://phc.uni.wroc.pl/pl/"}>
                Pracownia Humanistyki Cyfrowej IINiB UWr
              </a>
            </div>
          </div>
          {/* {areOptionsVisible ? (
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
          )} */}
        </div>
      </div>
    </>
  );
};

export default TopBar;
