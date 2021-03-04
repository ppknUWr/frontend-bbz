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
  },

  label: {
    color: 'black',
  }
})(Button);

const ImportButton = () => {
  return (
    <StyledImportButton variant={'outlined'} startIcon={<SaveIcon />}>
      Importuj dane
    </StyledImportButton>
  )
}

export default ImportButton;
