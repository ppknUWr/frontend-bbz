import * as React from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import RecordOptions from "./RecordOptions";
import { useRecordAnimations } from "../../../animations/useRecordAnimations";
import { animated } from "react-spring";
import {
  FIELD_WIDTHS,
  FIELD_WIDTHS_SHORT,
} from "../../../constants/records-list-manager-const";

const Record = ({ data, keysAmount }) => {
  const keys = Object.keys(data);
  const [sublistVisibility, setSublistVisibility] = React.useState(true);
  const [openSublist, setOpenSublist] = React.useState(false);
  const [optionsVisibility, setOptionsVisibility] = React.useState(false);
  const { sublistAnimation, marginAnimation } = useRecordAnimations(
    openSublist,
    setSublistVisibility,
    400
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
    setOptionsVisibility(!optionsVisibility);
  };

  return (
    <div className={"recordMainBck w-100"}>
      <animated.div
        style={marginAnimation}
        className={"recordBck w-100 d-flex flex-row position-relative"}
        onClick={handleRecordClick}
      >
        {keys.map((item, key) =>
          key <= keysAmount ? (
            <div
              key={key}
              className={"recordFieldBck h-100 d-flex align-items-center "}
              style={{
                width:
                  keysAmount === keys.length-1
                    ? FIELD_WIDTHS[key]
                    : FIELD_WIDTHS_SHORT[key],
              }}
            >
              {data[item]}
            </div>
          ) : (
            <div key={key} style={{ display: "none" }} />
          )
        )}
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
