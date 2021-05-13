import { makeStyles, createStyles } from "@material-ui/core";

export const addRecordButtonStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: "#593B7C",
      width: 190,
      height: 36,
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,

      "&:hover": {
        backgroundColor: "#28B6B8",
      },
    },

    label: {
      color: "white",
      fontSize: 13,
    },
  })
);
