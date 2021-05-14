import { makeStyles, createStyles } from "@material-ui/core";

export const sortButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minWidth: 0,
      paddingRight: "1.6vw",
      paddingLeft: "0.2vw",
      lineHeight: 1.3,
      backgroundColor: "white",
      width: "100%",
      height: "96%",
      borderRadius: 4,
      display: "flex",
      justifyContent: "space-between",
      position: "relative",
      overflow: "hidden",

      [theme.breakpoints.down(992)]: {
        paddingRight: "2.6vw",
      }
    },

    label: {
      color: "black",
      textTransform: "capitalize",
      fontSize: 14,
    },
  })
);
