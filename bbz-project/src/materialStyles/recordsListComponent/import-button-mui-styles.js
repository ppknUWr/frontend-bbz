import { makeStyles, createStyles } from "@material-ui/core";

export const importButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      width: "15%",
      height: 45,
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,

      [theme.breakpoints.down(992)]: {
        marginLeft: 20,
        display: "none",
      },
    },

    label: {
      color: "black",
    },
  })
);