import { makeStyles, createStyles } from "@material-ui/core";

export const sidebarIconButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minWidth: 0,
      width: 36,
      height: 36,
      borderRadius: 0,
      marginRight: 5,
      padding: 0,
      color: "#979797",
      display: "none",

      [theme.breakpoints.down(992)]: {
        display: "block",
      }
    },
  })
);