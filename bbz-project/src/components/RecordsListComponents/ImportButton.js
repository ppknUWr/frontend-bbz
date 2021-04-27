import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { importButtonStyles } from "../../materialStyles/recordsListComponent/import-button-mui-styles";

const ImportButton = () => {
  const buttonClasses = importButtonStyles();

  return (
    <Button
      classes={{ root: buttonClasses.root, label: buttonClasses.label }}
      variant={"outlined"}
    >
      <div style={iconBck}>
        <SaveIcon />
      </div>
      <div style={textBck}>Importuj dane</div>
    </Button>
  );
};

export default ImportButton;

const iconBck = {
  height: "100%",
  width: "20%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const textBck = {
  height: "100%",
  width: "80%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
