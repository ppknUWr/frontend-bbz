import TextField from "@material-ui/core/TextField";
import { searchByTextFieldStyles } from "../../materialStyles/recordsListComponent/search-by-textField-mui-styles";

const SelectInput = ({ value, setVal, allValues }) => {
  const textFieldClasses = searchByTextFieldStyles();

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <TextField
      select
      classes={{ root: textFieldClasses.root }}
      value={value}
      onChange={handleChange}
      variant={"outlined"}
      SelectProps={{ native: true }}
    >
      {allValues.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </TextField>
  );
};

export default SelectInput;


