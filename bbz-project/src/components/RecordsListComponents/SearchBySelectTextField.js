import {withStyles} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

const SearchBySelect = withStyles({
  root: {
    marginLeft: 40,
    width: '17%',

    '& .MuiSelect-root': {
      paddingRight: 0,
    },

    '& .MuiSelect-icon': {
      color: '#F4F4F4',
      backgroundColor: '#979797',
      width: '30%',
      height: '97%',
      borderRadius: 4,
      top: 0.5,
    },

    '& .MuiSelect-iconOutlined': {
      right: 1,
    },

    '& .MuiSelect-select': {
      '&:focus': {
        backgroundColor: 'transparent',
        color: 'black',
      },
    },

    '& .MuiOutlinedInput-root': {
      borderRadius: 4,
      height: 45,
      color: '#979797',
      '&:hover .MuiSelect-icon': {
        backgroundColor: 'black',
      },

      '&:hover': {
        color: 'black',
      }
    },

    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'black',
      borderWidth: 1,
    },
  },
})(TextField);

const SelectInput = ({value, setVal, allValues}) => {

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  return (
    <SearchBySelect
      select
      value={value}
      onChange={handleChange}
      variant={'outlined'}
      SelectProps={{native: true}}
      >
      {allValues.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </SearchBySelect>
  )
}

export default SelectInput;


