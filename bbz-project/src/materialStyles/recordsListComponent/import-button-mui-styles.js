import { makeStyles, createStyles } from "@material-ui/core";

export const importButtonStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: "white",
      width: "15%",
      height: "4.8vh",
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,
    },

    label: {
      color: "black",
      fontSize: "1.5vh"
    },
  })
);
