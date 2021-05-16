import { makeStyles, createStyles } from "@material-ui/core";

export const importButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      width: 200,
      height: 36,
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,
      lineHeight: 1.2,

      [theme.breakpoints.down(991)]: {
        marginLeft: 10,
      },
    },

    label: {
      color: "black",
      fontSize: 13,
    },
  })
);
