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
        <div
          id={"appBaseBodyLeftBck"}
          className={"h-100 d-lg-flex d-none"}
        >
          <Sidebar />
        </div>
        <div id={"appBaseBodyRightBck"}>
          <MainWindow />
        </div>
      </div>
    </>
  );
};

export default AppBase;
