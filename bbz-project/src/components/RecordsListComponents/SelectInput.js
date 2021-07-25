import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import {
  selectStyles,
  outlinedInputStyles,
  formControlStyles,
} from "../../materialStyles/recordsListComponent/select-input-mui-styles";

const SelectInput = ({ value, setVal, allValues }) => {
  const selectClasses = selectStyles();
  const outlinedInputClasses = outlinedInputStyles();
  const formControlClasses = formControlStyles();

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <FormControl variant={"outlined"} classes={formControlClasses} style={{zIndex: 0}}>
      <Select
        classes={selectClasses}
        MenuProps={{
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          getContentAnchorEl: null,
        }}
        value={value}
        onChange={handleChange}
        input={<OutlinedInput classes={outlinedInputClasses} />}
      >
        {allValues.map((item, key) => (
          <MenuItem value={item} key={key}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectInput;
