import React, { useEffect, useContext } from "react";
import "../styles/app-base-styles.css";
import MainWindow from "./MainWindow";
import WelcomePage from "./WelcomePageComponents/WelcomePage";
import Sidebar from "./SidebarComponents/Sidebar";
import { DataContext } from "./ContextController";

const AppBase = () => {
  const { handleDbFetch } = useContext(DataContext);

  useEffect(() => {
    handleDbFetch()
  }, [])


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
