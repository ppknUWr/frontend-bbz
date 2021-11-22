import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { sortButtonStyles } from "../../materialStyles/recordsListComponent/sort-button-mui-styles";

const SortButton = ({ sortOption, handleOnClick, resetState }) => {
  const buttonClasses = sortButtonStyles();
  const [down, setDown] = useState(true);

  useEffect(() => {
    setDown(true);
  }, [resetState])

  const changeStat = () => {
    setDown(!down);
    handleOnClick({
      key: sortOption.key,
      isDescending: !down
    });
  };
  
  return (
    <Button classes={buttonClasses} onClick={changeStat} >
      {sortOption.displayValue}
      <ArrowDropDownRoundedIcon
        style={Object.assign(
          {},
          styles,
          down ? { transform: "rotate(0)" } : { transform: "rotate(180deg)" }
        )}
      />
    </Button>
  );
};

export default SortButton;

const styles = {
  position: "absolute",
  fontSize: 54,
  right: "-0.8vw",
  color: "#979797",
};
