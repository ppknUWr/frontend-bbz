import { makeStyles, createStyles } from "@material-ui/core";

export const pageButtonStyles = makeStyles(
  createStyles({
    root: {
      minWidth: 0,
      overflow: "hidden",
      width: "90%",
      height: "90%",
      borderRadius: 4,
    },
  })
);
