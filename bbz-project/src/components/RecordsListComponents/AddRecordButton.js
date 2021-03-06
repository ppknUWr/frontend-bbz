import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { addRecordButtonStyles } from "../../materialStyles/recordsListComponent/add-record-button-mui-styles";

const AddRecordButton = ({ onOpenModal }) => {
  const buttonClasses = addRecordButtonStyles();

  return (
    <Button onClick={onOpenModal} classes={buttonClasses} variant={"outlined"}>
      <div
        style={{ width: "20%" }}
        className={"h-100 d-flex justify-content-center align-items-center"}
      >
        <AddIcon style={{ fontSize: 28 }} />
      </div>
      <div
        style={{ width: "80%" }}
        className={"h-100 d-flex align-items-center justify-content-center"}
      >
        Dodaj rekord
      </div>
    </Button>
  );
};

export default AddRecordButton;
