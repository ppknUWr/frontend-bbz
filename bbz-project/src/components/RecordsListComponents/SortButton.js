import { useState } from "react";
import Button from "@material-ui/core/Button";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { sortButtonStyles } from "../../materialStyles/recordsListComponent/sort-button-mui-styles";

const SortButton = ({ text }) => {
  const buttonClasses = sortButtonStyles();
  const [down, setDown] = useState(true);

  const changeStat = () => {
    setDown(!down);
  };
  return (
    <Button classes={buttonClasses} onClick={changeStat}>
      {text}
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
