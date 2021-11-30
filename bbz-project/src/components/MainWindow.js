import React, { useContext } from "react";
import "../styles/main-window-styles.css";
import RecordsListManager from "./RecordsListComponents/RecordsListManager";
import { DataContext } from "./ContextController";
import Typography from "@material-ui/core/Typography";
import { databaseTitleTypoStyles } from "../materialStyles/database-header-typo-mui-styles";

const MainWindow = ({ onOpenSidebar, onOpenModal }) => {
  const typoClasses = databaseTitleTypoStyles();
  const { currentDbDetails } = useContext(DataContext);

  return (
    <div id={"mainWindowMainBck"} className={"h-100 ml-auto mr-auto"}>
      <div
        id={"mainWindowHeaderBck"}
        className={"w-100 d-flex flex-row"}
      >
        <div
          id={"mainWindowAuthorBck"}
          className={"h-100 d-flex align-items-center justify-content-start"}
        >
          <Typography classes={typoClasses}>Twórca: Hojka Bożena</Typography>
        </div>
        <div
          id={"mainWindowTitleBck"}
          className={"h-100 d-flex align-items-center justify-content-start"}
        >
          <Typography classes={typoClasses}>
            {`Temat: ${currentDbDetails.db_name}`}
          </Typography>
        </div>
      </div>
      <div id={"mainWindowDatabaseBck"} className={"w-100"}>
        <RecordsListManager
          onSidebarIconClick={onOpenSidebar}
          onOpenModal={onOpenModal}
        />
      </div>
    </div>
  );
};

export default MainWindow;
