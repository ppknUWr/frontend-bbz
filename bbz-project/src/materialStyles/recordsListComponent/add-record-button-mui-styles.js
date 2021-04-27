import { makeStyles, createStyles } from "@material-ui/core";

export const addRecordButtonStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: "#593B7C",
      width: "15%",
      height: 45,
      marginLeft: 40,
      borderRadius: 0,
      padding: 0,

      "&:hover": {
        backgroundColor: "#28B6B8",
      },

      [theme.breakpoints.down(992)]: {
        marginLeft: 20,
        display: "none",
      },
    },

    label: {
      color: "white",
    },
  })
);
