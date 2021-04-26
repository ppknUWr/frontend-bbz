import { makeStyles, createStyles } from "@material-ui/core";

export const databaseTitleTypoStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: "black",
      fontSize: 22,

      [theme.breakpoints.down(576)]: {
        fontSize: "3.2vw",
      }
    },
  })
);