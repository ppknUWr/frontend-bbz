import { makeStyles, createStyles } from "@material-ui/core";

export const importButtonStyles = makeStyles(
  createStyles({
    root: {
      backgroundColor: "white",
      width: 200,
      height: 36,
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,
    },

    label: {
      color: "black",
      fontSize: 13
    },
  })
);
