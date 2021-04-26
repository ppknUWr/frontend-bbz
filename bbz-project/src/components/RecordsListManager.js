import * as React from "react";
import "../styles/records-list-manager-styles.css";
import RecordsListComp from "./RecordsListComponents/RecordsListComp";
import Typography from "@material-ui/core/Typography";
import { databaseTitleTypoStyles } from "../materialStyles/records-list-manager-mui-styles";

const RecordsListManager = () => {
  const typoClasses = databaseTitleTypoStyles();

  return (
    <div id={"recordsListManagerMainBck"}>
      <div id={"recordsListManagerHeaderBck"}>
        <div
          id={"recordsListManagerAuthorBck"}
          className={"d-flex align-items-center justify-content-center"}
        >
          <Typography classes={{ root: typoClasses.root }}>
            Autor: Hojka Bożena
          </Typography>
        </div>
        <div
          id={"recordsListManagerTitleBck"}
          className={"d-flex align-items-center justify-content-center"}
        >
          <Typography classes={{ root: typoClasses.root }}>
            Temat: Ilustrowane i obrazkowe słowniki dla dzieci wydane w Polsce w
            latach 1989-2015
          </Typography>
        </div>
      </div>
      <div id={"recordsListManagerDatabaseBck"}>
        <RecordsListComp />
      </div>
    </div>
  );
};

export default RecordsListManager;
