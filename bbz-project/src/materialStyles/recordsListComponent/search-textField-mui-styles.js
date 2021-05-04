import { makeStyles, createStyles } from "@material-ui/core";

export const searchTextFieldStyles = makeStyles(
  createStyles({
    root: {
      width: "50%",

      "&::after .MuiOutlinedInput-root": {
        color: "red",
      },

      "& .MuiOutlinedInput-root": {
        height: "4.8vh",
        fontSize: "2.2vh",
        borderRadius: 4,
        color: "black",

        "&:hover .MuiInputAdornment-root": {
          color: "black",
        },

        "&::after": {
          color: "red",
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
    },
  })
);
