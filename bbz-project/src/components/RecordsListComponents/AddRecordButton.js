import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { addRecordButtonStyles } from "../../materialStyles/recordsListComponent/add-record-button-mui-styles";

const AddRecordButton = () => {
  const buttonClasses = addRecordButtonStyles();

  return (
    <Button
      classes={{ root: buttonClasses.root, label: buttonClasses.label }}
      variant={"outlined"}
    >
      <div style={iconBck}>
        <AddIcon />
      </div>
      <div style={textBck}>Dodaj rekord</div>
    </Button>
  );
};

export default AddRecordButton;

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
