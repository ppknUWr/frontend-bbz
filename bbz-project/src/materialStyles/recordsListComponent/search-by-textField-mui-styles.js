import { makeStyles, createStyles } from "@material-ui/core";

export const searchByTextFieldStyles = makeStyles((theme) =>
  createStyles({
    root: {
      marginLeft: 40,
      width: "17%",

      "& .MuiSelect-root": {
        paddingRight: 0,
      },

      "& .MuiSelect-icon": {
        color: "#F4F4F4",
        backgroundColor: "#979797",
        width: "30%",
        height: "97%",
        borderRadius: 4,
        top: 0.5,
      },

      "& .MuiSelect-iconOutlined": {
        right: 1,
      },

      "& .MuiSelect-select": {
        height: "100%",
        "&:focus": {
          backgroundColor: "transparent",
          color: "black",
        },
      },

      "& .MuiOutlinedInput-root": {
        borderRadius: 4,
        height: 45,
        color: "#979797",
        "&:hover .MuiSelect-icon": {
          backgroundColor: "black",
        },

        "&:hover": {
          color: "black",
        },
      },

      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "black",
        borderWidth: 1,
      },

      [theme.breakpoints.down(992)]: {
        marginLeft: 20,
      },

      [theme.breakpoints.down(992)]: {
        width: "20%",
      },

      [theme.breakpoints.down(576)]: {
        width: "30%",
        marginLeft: 10,
        "& .MuiOutlinedInput-root": {
          height: "4vh",

        },

        "& .MuiSelect-select": {
          fontSize: "3.5vw",
          // backgroundColor: "red",
          transform: "translateX(-4%)",
        },

        "& .MuiSelect-iconOutlined": {
          right: 0,
        },
      },
    },
  })
);