import * as React from "react";
import {InputAdornment, withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import SearchIcon from "@material-ui/icons/Search";


const StyledInput = withStyles({
  root: {
    width: '50%',

    '& .MuiOutlinedInput-root': {
      height: 45,
      borderRadius: 4,

      '&:hover .MuiInputAdornment-root': {
        color: 'black',
      }
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
      borderWidth: 1,
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiInputAdornment-root': {
      color: 'black',
    },

    '& .MuiInputAdornment-root': {
      color: '#979797',
    },
  },
})(TextField);

const SearchInput = () => {
  return (
    <StyledInput
      placeholder={'Wyszukaj'}
      variant={'outlined'}
      SelectProps={{native: true}}
      InputProps={{
        startAdornment: (
          <InputAdornment position={"start"}>
            <SearchIcon/>
          </InputAdornment>
        )
      }}
    />
  )
}

export default SearchInput;


