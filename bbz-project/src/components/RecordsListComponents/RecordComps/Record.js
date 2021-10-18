import * as React from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import RecordOptions from "./RecordOptions";
import { useRecordAnimations } from "../../../animations/useRecordAnimations";
import { animated } from "react-spring";

const Record = ({ recordData, sublistData }) => {
  const valuesToDisplay = [
    recordData.publicationDate,
    recordData.bookAuthor,
    recordData.title,
    recordData.publisher,
    recordData.publicationPlace,
    recordData.source,
  ];
  const [enableAnim, setEnableAnim] = React.useState(false);
  const [sublistVisibility, setSublistVisibility] = React.useState(true);
  const [openSublist, setOpenSublist] = React.useState(false);
  const [optionsVisibility, setOptionsVisibility] = React.useState(false);
  const { heightAnim, sublistAnim } = useRecordAnimations(
    openSublist,
    setSublistVisibility,
    400
  );

  const handleRecordClick = () => {
    setEnableAnim(true);
    setOpenSublist(!openSublist);
    if (!sublistVisibility) {
      setSublistVisibility(true);
    }
    setOptionsVisibility(!optionsVisibility);
  };

  return (
    <animated.div
      style={enableAnim ? heightAnim : {}}
      className={"recordMainBck w-100"}
    >
      <div
        className={"recordBck w-100 d-flex flex-row position-relative"}
        onClick={handleRecordClick}
      >
        {valuesToDisplay.map((item, index) => (
          <div
            key={index}
            className={`key${index + 1} recordFieldBck h-100 align-items-center`}
          >
            {item}
          </div>
        ))}
        <RecordOptions visible={enableAnim ? optionsVisibility : false} />
      </div>
      <animated.div
        style={enableAnim ? sublistAnim : { opacity: 0 }}
        className={"sublistGrayBck w-100 overflow-hidden"}
      >
        {
          sublistVisibility && <Sublist
            sublistData={{
              id: sublistData.id,
              subtitle: sublistData.subtitle,
              originalEdition: sublistData.originalEdition,
              pages: sublistData.pages,
              language: sublistData.language,
              series: sublistData.series,
              isbnIssnNumber: sublistData.isbnIssnNumber,
              keywordAndContent: sublistData.keywordsAndContent,
              source: sublistData.source,
            }}
          />
        }
      </animated.div>
    </animated.div>
  );
};
export default Record;
