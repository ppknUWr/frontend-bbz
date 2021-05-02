import * as React from "react";
import "../../../styles/record-options-styles.css";
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

  return (
    <div
      className={
        "recordOptionsBck position-absolute h-100 align-items-center justify-content-end pr-2"
      }
      style={{ display: visible ? "flex" : "none" }}
    >
      <Button classes={editIconClasses} onClick={() => alert("edit")}>
        <FaEdit style={{ fontSize: "2vh" }} />
      </Button>
      <Button classes={deleteIconClasses} onClick={() => alert("delete")}>
        <MdDelete style={{ fontSize: "2.3vh" }} />
      </Button>
    </div>
  );
};

export default RecordOptions;
