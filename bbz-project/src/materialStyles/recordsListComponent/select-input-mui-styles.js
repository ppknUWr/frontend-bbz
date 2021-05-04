import { makeStyles, createStyles } from "@material-ui/core";

export const formControlStyles = makeStyles(
  createStyles({
    root: {
      marginLeft: 20,
      width: "13%",
    },
  })
);

export const outlinedInputStyles = makeStyles(
  createStyles({
    root: {
      "&:hover .MuiSelect-icon": {
        backgroundColor: "black",
      },

      "&:hover $notchedOutline": {
        borderColor: "black",
      },
      "&$focused $notchedOutline": {
        borderColor: "black",
        borderWidth: 1,
      },

      "&$focused .MuiSelect-icon": {
       backgroundColor: "black",
      },
    },
    focused: {},
    notchedOutline: {},
  })
);

export const selectStyles = makeStyles(
  createStyles({
    root: {
      height: "4.8vh",
      padding: 0,
    },

    selectMenu: {
      color: "#979797",

      "&:hover": {
        color: "black",
      },

      "&:focus": {
        color: "black",
      },
    },

    icon : {
      backgroundColor: "#C4C4C4",
      color: "#F3F3F3",
      borderWidth: 0,
      width: "32%",
      borderRadius: 4,
      fontSize: "4.7vh",
      right: 0,
      top: 0,
      zIndex: 2,
    },

    select: {
      fontSize: "2.2vh",
      paddingLeft: "0.7vw",
      display: "flex",
      alignItems: "center",
    },
  })
);
