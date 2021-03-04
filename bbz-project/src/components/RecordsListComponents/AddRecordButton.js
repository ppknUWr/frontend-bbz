import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const StyledAddRecordButton = withStyles({
  root: {
    backgroundColor: 'purple',
    width: '15%',
    height: 45,
    marginLeft: 40,
    borderRadius: 0,

    '&:hover': {
      backgroundColor: '#331891',
    }
  },

  label: {
    color: 'white',
  }
})(Button);

const AddRecordButton = () => {
  return (
    <StyledAddRecordButton variant={'outlined'} startIcon={<AddIcon />}>
      dodaj rekord
    </StyledAddRecordButton>
  )
}

export default AddRecordButton;
