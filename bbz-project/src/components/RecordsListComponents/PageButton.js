import Button from "@material-ui/core/Button";
import ArrowDropDownRoundedIcon from "@material-ui/icons/ArrowDropDownRounded";
import { pageButtonStyles } from "../../materialStyles/recordsListComponent/page-button-mui-styles";
import {useScreenSizes} from "../../hooks/useScreenSizes";

const PageButton = ({ leftDirection }) => {
  const buttonClasses = pageButtonStyles();
  const {small} = useScreenSizes();
  const iconSize = small ? "17vw" : 100;

  return (
    <Button classes={{ root: buttonClasses.root }}>
      <ArrowDropDownRoundedIcon
        style={Object.assign(
          {},
          styles,
          leftDirection
            ? { transform: "rotate(90deg)", fontSize: iconSize }
            : { transform: "rotate(-90deg)", fontSize: iconSize }
        )}
      />
    </Button>
  );
};

export default PageButton;

const styles = {
  position: "absolute",
  color: "#979797",
};
