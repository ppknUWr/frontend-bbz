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

  const onButtonClick = (event, text) => {
    event.stopPropagation();
    alert(text);
  };

  return (
    <div
      className={
        visible ? "visibleOptions recordOptionsBck" : "recordOptionsBck"
      }
    >
      <Button
        classes={editIconClasses}
        onClick={(event) => onButtonClick(event, "Edit")}
      >
        <FaEdit style={{ fontSize: 17 }} />
      </Button>
      <Button
        classes={deleteIconClasses}
        onClick={(event) => onButtonClick(event, "Delete")}
      >
        <MdDelete style={{ fontSize: 19 }} />
      </Button>
    </div>
  );
};

export default RecordOptions;
