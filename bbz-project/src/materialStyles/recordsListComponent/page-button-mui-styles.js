import { makeStyles, createStyles } from "@material-ui/core";

export const pageButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "white",
      width: "95%",
      height: "96%",
      borderRadius: 4,

      [theme.breakpoints.down(576)]: {
        width: 70,
        minWidth: 0,
      }
    },
  })
);