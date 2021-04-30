import { makeStyles, createStyles } from "@material-ui/core";

export const addRecordButtonStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: "#593B7C",
      width: "15%",
      height: "4.8vh",
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,

      "&:hover": {
        backgroundColor: "#28B6B8",
      },
    },

    label: {
      color: "white",
      fontSize: "1.5vh",
    },
  })
);
