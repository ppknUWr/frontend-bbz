import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const StyledAddRecordButton = withStyles({
  root: {
    backgroundColor: '#593B7C',
    width: '15%',
    height: 45,
    marginLeft: 40,
    borderRadius: 0,
    padding: 0,

    '&:hover': {
      backgroundColor: '#28B6B8',
    }
  },

  label: {
    color: 'white',
  }
})(Button);

const AddRecordButton = () => {
  return (
    <StyledAddRecordButton variant={'outlined'}>
      <div style={iconBck}>
        <AddIcon />
      </div>
      <div style={textBck}>
        Dodaj rekord
      </div>
    </StyledAddRecordButton>
  )
}

export default AddRecordButton;

const iconBck = {
  height: '100%',
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const textBck = {
  height: '100%',
  width: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}
