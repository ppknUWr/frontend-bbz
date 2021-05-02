import * as React from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import RecordOptions from "./RecordOptions";
import { useRecordAnimations } from "../../../hooks/useRecordAnimations";
import { animated } from "react-spring";
import { FIELD_WIDTHS } from "../../../constants/records-list-manager-const";

const Record = ({ data }) => {
  const keys = Object.keys(data);

  const [sublistVisibility, setSublistVisibility] = React.useState(true);
  const [openSublist, setOpenSublist] = React.useState(false);
  const [optionsVisibility, setOptionsVisibility] = React.useState(false);
  const { sublistAnimation, marginAnimation } = useRecordAnimations(
    openSublist,
    setSublistVisibility,
    35
  );

  const handleRecordClick = (event) => {
    if (typeof event.target.className !== "string") {
      return;
    } else {
      const className = event.target.className.split(" ")[0];
      if (
        className !== "recordFieldBck" &&
        className !== "recordBck" &&
        className !== "recordOptionsBck"
      ) {
        return;
      }
    }
    setOpenSublist(!openSublist);
    if (!sublistVisibility) {
      setSublistVisibility(true);
    }
  };

  const optionsVisible = () => {
    setOptionsVisibility(true);
  }
  const optionsInvisible = () => {
    if (!sublistVisibility) {
      setOptionsVisibility(false);
    }
  }

  return (
    <div className={"recordMainBck w-100"}>
      <animated.div
        style={marginAnimation}
        className={"recordBck w-100 d-flex flex-row position-relative"}
        onClick={handleRecordClick}
        onMouseEnter={optionsVisible}
        onMouseLeave={optionsInvisible}
      >
        {keys.map((item, key) => (
          <div
            key={key}
            className={"recordFieldBck h-100 d-flex align-items-center"}
            style={{ width: FIELD_WIDTHS[key] }}
          >
            {data[item]}
          </div>
        ))}
        <RecordOptions visible={optionsVisibility} />
      </animated.div>
      <animated.div
        style={Object.assign(sublistAnimation, {
          display: sublistVisibility ? "flex" : "none",
        })}
        className={"sublistGrayBck w-100 position-absolute overflow-hidden"}
      >
        <Sublist />
      </animated.div>
    </div>
  );
};
export default Record;
