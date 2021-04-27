import { makeStyles, createStyles } from "@material-ui/core";

export const searchTextFieldStyles = makeStyles((theme) =>
  createStyles({
    root: {
      width: "50%",

      "& .MuiOutlinedInput-root": {
        height: 45,
        borderRadius: 4,

        "&:hover .MuiInputAdornment-root": {
          color: "black",
        },
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
        borderWidth: 1,
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root": {
        color: "black",
      },

      "& .MuiInputAdornment-root": {
        color: "#979797",
        height: "100%",
      },

      [theme.breakpoints.down(992)]: {
        width: "50%",
      },

      [theme.breakpoints.down(576)]: {
        width: "55%",

        "& .MuiOutlinedInput-root": {
          height: "4vh",
          fontSize: "3.8vw",
        },

        "& .MuiInputAdornment-root": {
          transform: "translateX(-35%)",
          width: "3vw",
        },
      }
    },
  })
);