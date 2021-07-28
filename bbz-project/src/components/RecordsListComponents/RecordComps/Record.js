import * as React from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import RecordOptions from "./RecordOptions";
import { useRecordAnimations } from "../../../animations/useRecordAnimations";
import { animated } from "react-spring";
import LinesEllipsis from "react-lines-ellipsis";

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
  const valuesToDisplay = [
    publicationDate,
    bookAuthor,
    title,
    publisher,
    publicationPlace,
    source,
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
            className={
              "key" +
              (index + 1) +
              " recordFieldBck h-100 align-items-center"
            }
          >
            <LinesEllipsis
              className={"recordFieldText"}
              text={item}
              maxLine={2}
              trimRight
              ellipsis={"..."}
              basedOn={"letters"}
            />
          </div>
        ))}
        <RecordOptions visible={enableAnim ? optionsVisibility : false} />
      </div>
      <animated.div
        style={enableAnim ? sublistAnim : { opacity: 0 }}
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
