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

  //Instrukcja warunkowa na wstępie poniższej funkcji odpowiada za sprawdzenie
  //który element rekordu został naciśnięty. Sprawdzanie to odbywa się na
  //podstawie nazwy klasy. Rekord zostaje rozwiniety kiedy event przechwyci
  //że został nacisnięty jeden z 3 elementów o nazwie klasy:
  // - recordFieldBck
  // - recordBck
  // - recordOptionsBck
  //Jeśli któryś z elementów rekordu o takiej nazwie klasy został nacisniety
  //wowczas rozwija/zwija sie rekord. Jesli jakikolwiek inny to rekord pozostaje niezmienny.
  //Glownym celem tej instrukcji jest zapobiegnięcie rozwijania/zwijania się rekordu, kiedy
  //nacisniety zostanie któryś z buttonów od obslugi rekordu - usuwania lub edycji.
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
