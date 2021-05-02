import { makeStyles, createStyles } from "@material-ui/core";

export const sortButtonStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: "white",
      width: "95%",
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
      fontSize: "2.2vh",
    },
  })
);