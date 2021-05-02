import * as React from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import { useRecordAnimations } from "../../../hooks/useRecordAnimations";
import { animated } from "react-spring";

const Record = ({ data }) => {
  const fieldsWidth = ["7%", "18%", "25%", "20%", "15%", "10%"];
  const keys = Object.keys(data);

  const [sublistVisibility, setSublistVisibility] = React.useState(true);
  const [openSublist, setOpenSublist] = React.useState(false);
  const { sublistAnimation, marginAnimation } = useRecordAnimations(
    openSublist,
    setSublistVisibility,
    35,
  );

  const handleRecordClick = () => {
    setOpenSublist(!openSublist);
    if (!sublistVisibility) {
      setSublistVisibility(true);
    }
  };

  return (
    <div className={"recordMainBck w-100"}>
      <animated.div
        style={marginAnimation}
        className={"recordBck w-100 d-flex flex-row"}
        onClick={() => {
          handleRecordClick();
        }}
      >
        {keys.map((item, key) => (
          <div
            key={key}
            className={"recordFieldBck h-100 d-flex align-items-center"}
            style={{ width: fieldsWidth[key] }}
          >
            {data[item]}
          </div>
        ))}
        <div
          className={
            "recordOptionsBck h-100 d-flex align-items-center justify-content-end pr-2"
          }
        >
          Options
        </div>
      </animated.div>
      <animated.div
        style={Object.assign(sublistAnimation, {
          display: sublistVisibility ? "flex" : "none",
        })}
        className={
          "sublistGrayBck w-100 position-absolute overflow-hidden"
        }
      >
        <Sublist />
      </animated.div>
    </div>
  );
};
export default Record;
