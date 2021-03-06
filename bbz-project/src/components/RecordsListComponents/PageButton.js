import Button from "@material-ui/core/Button";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { pageButtonStyles } from "../../materialStyles/recordsListComponent/page-button-mui-styles";

const PageButton = ({ leftDirection }) => {
  const buttonClasses = pageButtonStyles();

  return (
    <Button classes={buttonClasses}>
      <ArrowDropDownRoundedIcon
        style={Object.assign(
          {},
          styles,
          leftDirection
            ? { transform: "rotate(90deg)" }
            : { transform: "rotate(-90deg)" }
        )}
      />
    </Button>
  );
};

export default PageButton;

const styles = {
  color: "#979797",
  fontSize: 80,
};
