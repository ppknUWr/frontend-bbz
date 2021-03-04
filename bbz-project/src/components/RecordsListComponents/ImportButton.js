import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const StyledImportButton = withStyles({
  root: {
    backgroundColor: 'white',
    width: '15%',
    height: 45,
    marginLeft: 40,
    borderRadius: 0,
    padding: 0,
  },

  label: {
    color: 'black',
  }
})(Button);

const ImportButton = () => {
  return (
    <StyledImportButton variant={'outlined'}>
      <div style={iconBck}>
        <SaveIcon />
      </div>
      <div style={textBck}>
        Importuj dane
      </div>
    </StyledImportButton>
  )
}

export default ImportButton;

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
