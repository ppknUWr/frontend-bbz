import * as React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { InputAdornment } from "@material-ui/core";
import { searchTextFieldStyles } from "../../materialStyles/recordsListComponent/search-textField-mui-styles";

const SearchInput = ({ handleOnChange, searchQuery }) => {
  const textFieldClasses = searchTextFieldStyles();
  const iconSize = 20;

  return (
    <TextField
      classes={textFieldClasses}
      onChange={(e) => handleOnChange(e.target.value)}
      placeholder={"Wyszukaj"}
      variant={"outlined"}
      value={searchQuery}
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
