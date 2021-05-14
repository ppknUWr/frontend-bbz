import * as React from "react";
import "../../../styles/record-styles.css";
import Button from "@material-ui/core/Button";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  editIconStyles,
  deleteIconStyles,
} from "../../../materialStyles/recordsListComponent/recordComponent/icon-button-mui-styles";

const RecordOptions = ({ visible }) => {
  const editIconClasses = editIconStyles();
  const deleteIconClasses = deleteIconStyles();
  const [className, setClassName] = React.useState("");

  React.useEffect(() => {
    if (visible) {
      setClassName(
        "visibleOptions recordOptionsBck position-absolute h-100 align-items-center justify-content-end pr-2"
      );
    } else {
      setClassName(
        "recordOptionsBck position-absolute h-100 align-items-center justify-content-end pr-2"
      );
    }
  }, [visible]);

  return (
    <div className={className}>
      <Button classes={editIconClasses} onClick={() => alert("edit")}>
        <FaEdit style={{ fontSize: 17 }} />
      </Button>
      <Button classes={deleteIconClasses} onClick={() => alert("delete")}>
        <MdDelete style={{ fontSize: 19 }} />
      </Button>
    </div>
  );
};

export default RecordOptions;
