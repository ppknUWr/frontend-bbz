import * as React from "react";
import "../styles/app-base-styles.css";
import MainWindow from "./MainWindow";
import Sidebar from "./SidebarComponents/Sidebar";

const AppBase = () => {

  return (
    <div
      id={"appBaseBck"}
      className={"w-100 h-100 position-absolute overflow-hidden"}
    >
      <div
        id={"appBaseTopBarBck"}
        className={"w-100 d-flex align-items-center"}
      >
        Top bar
      </div>
      <div id={"appBaseMainBodyBck"} className={"w-100 d-flex flex-row"}>
        <div
          id={"appBaseBodyLeftBck"}
          className={"h-100"}
        >
          <Sidebar />
        </div>
        <div id={"appBaseBodyRightBck"}>
          <MainWindow />
        </div>
      </div>
    </div>
  );
};

export default AppBase;
