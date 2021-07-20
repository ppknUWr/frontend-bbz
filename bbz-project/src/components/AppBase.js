import React, { useEffect, useContext } from "react";
import "../styles/app-base-styles.css";
import MainWindow from "./MainWindow";
import WelcomePage from "./WelcomePageComponents/WelcomePage";
import Sidebar from "./SidebarComponents/Sidebar";
import AddRecordModal from "./AddRecordModal";
import TopBar from "./TopBarComponents/TopBarComponent";
import { DataContext } from "./ContextController";
import { animated } from "react-spring";
import { useSidebarAnimations } from "../animations/useSidebarAnimations";
import { useScreenSizes } from "../hooks/useScreenSizes";
import { useAppBaseFunctionality } from "../hooks/useAppBaseFunctionality";
import bckImage from "../assets/TopBarBackground.jpg";

const AppBase = () => {
  const { handleDbListFetch } = useContext(DataContext);
  const { large } = useScreenSizes();
  const {
    openSidebar,
    blackBckVisibility,
    openModal,
    onOpenSidebar,
    closeSidebar,
    closeBlackBck,
    onOpenModal,
    onCloseModal,
  } = useAppBaseFunctionality();

  useEffect(() => {
    handleDbListFetch();
  }, []);

  const { slideSidebar } = useSidebarAnimations(openSidebar, closeBlackBck);
  return (
    <>
      <div className={"position-absolute w-100 overflow-hidden"} id={"topBarImgBck"}>
        <img src={bckImage} alt={"TopBarImg"} id={"topBarImg"}/>
      </div>
      <div
        id={"appBaseBck"}
        className={"w-100 h-100 d-flex flex-row position-absolute"}
      >
        <div id={"mainContentBck"} className={"w-100 h-100 position-relative"}>
          <animated.div
            style={large ? slideSidebar : {}}
            id={"appBaseBodyLeftBck"}
            className={"h-100 position-absolute"}
          >
            <Sidebar />
          </animated.div>
          <div id={"appBaseBodyRightBck"} className={"w-100 h-100"}>
            <MainWindow
              onOpenSidebar={onOpenSidebar}
              onOpenModal={onOpenModal}
            />
          </div>
        </div>
      </div>
      <div
        id={"appBaseTopBarBck"}
        className={"w-100 d-flex align-items-center position-fixed"}
      >
        <TopBar />
      </div>
      <div
        id={"appBaseBlackBck"}
        className={"position-fixed w-100 h-100"}
        style={{ display: blackBckVisibility ? "block" : "none" }}
        onClick={closeSidebar}
      />
      <AddRecordModal open={openModal} onCloseModal={onCloseModal} />
    </>
  );
};

export default AppBase;
