import { makeStyles, createStyles } from "@material-ui/core";

export const sortButtonStyles = makeStyles(
  createStyles({
    root: {
      minWidth: 0,
      backgroundColor: "white",
      width: "100%",
      height: "96%",
      borderRadius: 4,
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",
    },

    label: {
      color: "black",
      textTransform: "capitalize",
      fontSize: "1.65vh",
    },
  })
);
