import * as React from "react";
import "../styles/main-window-styles.css";
import RecordsListManager from "./RecordsListComponents/RecordsListManager";
import Typography from "@material-ui/core/Typography";
import { databaseTitleTypoStyles } from "../materialStyles/database-header-typo-mui-styles";

const MainWindow = ({ onOpenSidebar }) => {
  const typoClasses = databaseTitleTypoStyles();

  return (
    <div id={"mainWindowMainBck"} className={"h-100 ml-auto mr-auto"}>
      <div
        id={"mainWindowHeaderBck"}
        className={"w-100 d-flex flex-row pl-4 pr-4"}
      >
        <div
          id={"mainWindowAuthorBck"}
          className={"h-100 d-flex align-items-center justify-content-start"}
        >
          <Typography classes={typoClasses}>Autor: Hojka Bożena</Typography>
        </div>
        <div
          id={"mainWindowTitleBck"}
          className={"h-100 d-flex align-items-center justify-content-start"}
        >
          <Typography classes={typoClasses}>
            Temat:Ilustrowane i obrazkowe słowniki dla dzieci wydane w Polsce w
            latach 1989-2015
          </Typography>
        </div>
      </div>
      <div id={"mainWindowDatabaseBck"} className={"w-100"}>
        <RecordsListManager onSidebarIconClick={onOpenSidebar} />
      </div>
    </div>
  );
};

export default MainWindow;
