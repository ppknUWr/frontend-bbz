import * as React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { searchTextFieldStyles } from "../../materialStyles/recordsListComponent/search-textField-mui-styles";
import { useScreenSizes } from "../../hooks/useScreenSizes";

const SearchInput = () => {
  const textFieldClasses = searchTextFieldStyles();
  const { small } = useScreenSizes();
  const iconSize = small ? "4.5vw" : 32;

  return (
    <TextField
      classes={{ root: textFieldClasses.root }}
      placeholder={"Wyszukaj"}
      variant={"outlined"}
      SelectProps={{ native: true }}
      InputProps={{
        startAdornment: (
          <InputAdornment position={"start"}>
            <SearchIcon  style={{ fontSize: iconSize }}/>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
