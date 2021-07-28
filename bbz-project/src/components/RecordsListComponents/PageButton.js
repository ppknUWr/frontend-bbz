import Button from "@material-ui/core/Button";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { pageButtonStyles } from "../../materialStyles/recordsListComponent/page-button-mui-styles";

const PageButton = ({ leftDirection, onClick, disabled }) => {
  const buttonClasses = pageButtonStyles();

  return (
    <Button classes={buttonClasses} onClick={onClick} disabled={disabled}>
      <ArrowDropDownRoundedIcon
        style={Object.assign(
          {},
          { color: disabled ? "#F4F4F4" : "#979797", fontSize: 80 },
          leftDirection
            ? { transform: "rotate(90deg)" }
            : { transform: "rotate(-90deg)" }
        )}
      />
    </Button>
  );
};

export default PageButton;
