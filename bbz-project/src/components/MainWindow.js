import * as React from "react";
import "../styles/main-window-styles.css";
import RecordsListComp from "./RecordsListComponents/RecordsListComp";

const MainWindow = () => {
  return (
    <div id={"mainWindowBck"}>
      <div id={"databaseHeader"}>
        <div id={"databaseAuthor"}>
          <p className={"databaseHeaderText"}>Autor: Hojka Bożena</p>
        </div>
        <div id={"databaseTitle"}>
          <p className={"databaseHeaderText"}>
            Temat: Ilustrowane i obrazkowe słowniki dla dzieci wydane w Polsce w
            latach 1989-2015
          </p>
        </div>
      </div>
      <div id={"databaseRecordsList"}>
        <RecordsListComp />
      </div>
    </div>
  );
}

export default MainWindow;
