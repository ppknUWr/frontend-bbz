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
  const { heightAnim, sublistAnim } = useRecordAnimations(
    openSublist,
    setSublistVisibility,
    400
  );

  const handleRecordClick = () => {
    setOpenSublist(!openSublist);
    if (!sublistVisibility) {
      setSublistVisibility(true);
    }
    setOptionsVisibility(!optionsVisibility);
  };

  return (
    <animated.div style={heightAnim} className={"recordMainBck w-100"}>
      <div
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
                  keysAmount === keys.length - 1
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
      </div>
      <animated.div
        style={sublistAnim}
        className={"sublistGrayBck w-100 overflow-hidden"}
      >
        <Sublist />
      </animated.div>
    </animated.div>
  );
};
export default Record;
