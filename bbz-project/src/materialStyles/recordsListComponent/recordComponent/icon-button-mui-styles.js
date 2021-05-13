import { makeStyles, createStyles } from "@material-ui/core";

export const editIconStyles = makeStyles(
  createStyles({
    root: {
      borderRadius: 0,
      minWidth: 0,
      width: 26,
      height: 26,
      padding: 0,
      color: "#A490CF",

      "&:hover": {
        backgroundColor: "#A490CF",
        color: "white",
      },
    },
  })
);

export const deleteIconStyles = makeStyles(
  createStyles({
    root: {
      borderRadius: 0,
      marginLeft: 10,
      minWidth: 0,
      width: 26,
      height: 26,
      padding: 0,
      color: "#DF5F5F",

      "&:hover": {
        backgroundColor: "#DF5F5F",
        color: "white",
      },
    },
  })
);
