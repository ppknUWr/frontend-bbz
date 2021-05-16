import { makeStyles, createStyles } from "@material-ui/core";

export const addRecordButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#593B7C",
      width: 190,
      height: 36,
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,
      lineHeight: 1.2,

      "&:hover": {
        backgroundColor: "#28B6B8",
      },

      [theme.breakpoints.down(991)]: {
        marginLeft: 10,
      }
    },

    label: {
      color: "white",
      fontSize: 13,
    },
  })
);
