import { makeStyles, createStyles } from "@material-ui/core";

export const editIconStyles = makeStyles(
  createStyles({
    root: {
      borderRadius: 0,
      minWidth: 0,
      width: 22,
      height: 22,
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
      marginLeft: 5,
      minWidth: 0,
      width: 22,
      height: 22,
      padding: 0,
      marginRight: 0,
      color: "#DF5F5F",

      "&:hover": {
        backgroundColor: "#DF5F5F",
        color: "white",
      },
    },
  })
);
