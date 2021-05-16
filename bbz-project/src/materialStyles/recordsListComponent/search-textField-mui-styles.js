import { makeStyles, createStyles } from "@material-ui/core";

export const searchTextFieldStyles = makeStyles(
  createStyles({
    root: {
      width: "40vw",

      "&::after .MuiOutlinedInput-root": {
        color: "red",
      },

      "& .MuiOutlinedInput-root": {
        height: 36,
        fontSize: 15,
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
