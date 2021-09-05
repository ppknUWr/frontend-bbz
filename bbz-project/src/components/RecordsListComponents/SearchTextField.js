import * as React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { searchTextFieldStyles } from "../../materialStyles/recordsListComponent/search-textField-mui-styles";

const SearchInput = ({ handleOnChange }) => {
  const textFieldClasses = searchTextFieldStyles();
  const iconSize = 20;

  return (
    <TextField
      classes={textFieldClasses}
      onChange={handleOnChange}
      placeholder={"Wyszukaj"}
      variant={"outlined"}
      SelectProps={{ native: true }}
      InputProps={{
        startAdornment: (
          <InputAdornment position={"start"}>
            <SearchIcon style={{ fontSize: iconSize }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
