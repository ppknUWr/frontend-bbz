import * as React from "react";
import "../styles/main-window-styles.css";
import RecordsListManager from "./RecordsListManager";

const MainWindow = () => {
  return (
    <div id={"mainWindowBck"} className={"w-100"}>
      <div
        id={"mainWindowTopBarBck"}
        className={"w-100 d-flex align-items-center justify-content-center"}
      >
        Top bar
      </div>
      <div id={"mainWindowMainBodyBck"} className={"w-100 d-flex flex-row"}>
        <div id={"mainWindowBodyLeftBck"} className={"h-100 d-none d-lg-flex"}>
          Sidebar
        </div>
        <div id={"mainWindowBodyRightBck"}>
          <RecordsListManager />
        </div>
      </div>
    </div>
  );
};

export default MainWindow;
