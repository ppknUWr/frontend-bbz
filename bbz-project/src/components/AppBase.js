import * as React from "react";
import "../styles/main-window-styles.css";
import MainWindow from "./MainWindow";

const AppBase = () => {

  return (
    <div
      id={"mainWindowBck"}
      className={"w-100 h-100 position-absolute overflow-hidden"}
    >
      <div
        id={"mainWindowTopBarBck"}
        className={"w-100 d-flex align-items-center"}
      >
        Top bar
      </div>
      <div
        id={"mainWindowMainBodyBck"}
        className={"w-100 d-flex flex-row"}
      >
        <div id={"mainWindowBodyLeftBck"} className={"h-100 d-none d-lg-flex"}>
          Sidebar
        </div>
        <div id={"mainWindowBodyRightBck"}>
          <MainWindow />
        </div>
      </div>
    </div>
  );
};

export default AppBase;
