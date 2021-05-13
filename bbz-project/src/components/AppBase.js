import React, { useEffect, useContext } from "react";
import "../styles/app-base-styles.css";
import MainWindow from "./MainWindow";
import Sidebar from "./SidebarComponents/Sidebar";
import { DataContext } from "./ContextController";

const AppBase = () => {
  const { handleDBFetch } = useContext(DataContext);

  useEffect(() => {
    handleDBFetch()
  }, [])


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
          <div
            id={"appBaseBodyLeftBck"}
            className={"h-100 d-lg-flex position-absolute d-none"}
          >
            <Sidebar />
          </div>
          <div id={"appBaseBodyRightBck"} className={"w-100 h-100"}>
            <MainWindow />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBase;
