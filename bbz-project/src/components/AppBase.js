import React, { useEffect, useContext } from "react";
import "../styles/app-base-styles.css";
import MainWindow from "./MainWindow";
import Sidebar from "./SidebarComponents/Sidebar";
import { DataContext } from "./ContextController";
import { animated } from "react-spring";
import { useSidebarAnimations } from "../animations/useSidebarAnimations";
import { useScreenSizes } from "../hooks/useScreenSizes";

const AppBase = () => {
  const { handleDBFetch } = useContext(DataContext);
  const { large } = useScreenSizes();

  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [blackBckVisibility, setBlackBckVisibility] = React.useState(false);

  useEffect(() => {
    handleDBFetch();
  }, []);

  useEffect(() => {
    if (!large) {
      setOpenSidebar(false);
      setBlackBckVisibility(false);
    }
  }, [large]);

  const onOpenSidebar = () => {
    setOpenSidebar(true);
    setBlackBckVisibility(true);
  };

  const closeSidebar = () => {
    setOpenSidebar(false);
  };

  const closeBlackBck = () => {
    setBlackBckVisibility(false);
  }

  const { slideSidebar } = useSidebarAnimations(openSidebar, closeBlackBck);

  return (
    <>
      <div
        id={"appBaseTopBarBck"}
        className={"w-100 d-flex align-items-center position-fixed"}
      >
        Top bar
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
            <MainWindow onOpenSidebar={onOpenSidebar} />
          </div>
        </div>
      </div>
      <div
        id={"appBaseBlackBck"}
        className={"position-fixed w-100 h-100"}
        style={{ display: blackBckVisibility ? "block" : "none" }}
        onClick={closeSidebar}
      />
    </>
  );
};

export default AppBase;
