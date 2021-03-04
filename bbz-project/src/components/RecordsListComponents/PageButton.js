import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

const StyledPageButton = withStyles({
  root: {
    backgroundColor: 'white',
    width: '95%',
    height: '96%',
    borderRadius: 4,
  },

  label: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 20,
  },
})(Button);

const PageButton = ({leftDirection}) => {
  return (
    <StyledPageButton>
      <ArrowDropDownRoundedIcon
        style={Object.assign(
          {},
          styles,
          leftDirection ? {transform: 'rotate(90deg)'} : {transform: 'rotate(-90deg)'}
        )}
      />
    </StyledPageButton>
  )
}

export default PageButton;

const styles = {
  position: 'absolute',
  fontSize: 100,
  color: '#979797',
}
