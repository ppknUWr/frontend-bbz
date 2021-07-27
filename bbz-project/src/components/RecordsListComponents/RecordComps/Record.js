import * as React from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import RecordOptions from "./RecordOptions";
import { useRecordAnimations } from "../../../animations/useRecordAnimations";
import { animated } from "react-spring";

const Record = ({
  publicationDate,
  bookAuthor,
  title,
  publisher,
  publicationPlace,
  source,
  id,
  subtitle,
  originalEdition,
  pages,
  language,
  series,
  isbnIssnNumber,
  keywordsAndContent,
}) => {
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
        <div className={"key1 recordFieldBck h-100 d-flex align-items-center"}>
          <div className={"recordFieldText"}>{publicationDate}</div>
        </div>
        <div className={"key2 recordFieldBck h-100 d-flex align-items-center"}>
          <div className={"recordFieldText"}>{bookAuthor}</div>
        </div>
        <div className={"key3 recordFieldBck h-100 d-flex align-items-center"}>
          <div className={"recordFieldText"}>{title}</div>
        </div>
        <div className={"key4 recordFieldBck h-100 d-flex align-items-center"}>
          <div className={"recordFieldText"}>{publisher}</div>
        </div>
        <div className={"key5 recordFieldBck h-100 d-flex align-items-center"}>
          <div className={"recordFieldText"}>{publicationPlace}</div>
        </div>
        <div className={"key6 recordFieldBck h-100 align-items-center"}>
          <div className={"recordFieldText"}>{source}</div>
        </div>
        <RecordOptions visible={optionsVisibility} />
      </div>
      <animated.div
        style={sublistAnim}
        className={"sublistGrayBck w-100 overflow-hidden"}
      >
        <Sublist
          id={id}
          subtitle={subtitle}
          originalEdition={originalEdition}
          pages={pages}
          language={language}
          series={series}
          isbnIssnNumber={isbnIssnNumber}
          keywordAndContent={keywordsAndContent}
          source={source}
        />
      </animated.div>
    </animated.div>
  );
};
export default Record;
