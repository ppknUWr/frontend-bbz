import {useState} from "react";
import {withStyles} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ArrowDropDownRoundedIcon from '@material-ui/icons/ArrowDropDownRounded';

const StyledSortButton = withStyles({
  root: {
    backgroundColor: 'white',
    width: '95%',
    height: '96%',
    borderRadius: 4,
    display: 'flex',
    justifyContent: 'flex-start',
  },

  label: {
    color: 'black',
    textTransform: 'capitalize',
    fontSize: 20,
  },
})(Button);

const SortButton = ({text}) => {
  const [down, setDown] = useState(true);

  const changeStat = () => {
    setDown(!down);
  }
  return (
    <StyledSortButton onClick={changeStat}>
      {text}
      <ArrowDropDownRoundedIcon
        style={Object.assign(
          {},
          styles,
          down ? {transform: 'rotate(0)'} : {transform: 'rotate(180deg)'}
        )}
      />
    </StyledSortButton>
  )
}

export default SortButton;

const styles = {
  position: 'absolute',
  fontSize: 100,
  right: -20,
  color: '#979797',
}
