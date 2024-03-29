import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { importButtonStyles } from "../../materialStyles/recordsListComponent/import-button-mui-styles";

const ExportButton = () => {
  const buttonClasses = importButtonStyles();

  return (
    <Button classes={buttonClasses} variant={"outlined"}>
      <div
        style={{ width: "20%" }}
        className={"h-100 d-flex align-items-center justify-content-center"}
      >
        <SaveIcon style={{ fontSize: 22 }} />
      </div>
      <div
        style={{ width: "80%" }}
        className={"h-100 d-flex align-items-center justify-content-center"}
      >
        Eksportuj dane
      </div>
    </Button>
  );
};

export default ExportButton;
