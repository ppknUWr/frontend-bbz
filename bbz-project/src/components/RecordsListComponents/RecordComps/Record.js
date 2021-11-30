import React, { useState } from "react";
import "../../../styles/record-styles.css";
import Sublist from "./Sublist";
import SaveAlt from '@material-ui/icons/SaveAlt';
import IconButton from "@material-ui/core/IconButton";
import { useRecordAnimations } from "../../../animations/useRecordAnimations";
import { animated } from "react-spring";

const Record = ({ recordData, sublistData, handleOpenModal }) => {
  const [enableAnim, setEnableAnim] = useState(false);
  const [sublistVisibility, setSublistVisibility] = useState(false);
  const [openSublist, setOpenSublist] = useState(false);
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
          <div className={`key1 recordFieldBck h-100 align-items-center`}>
            {recordData.publicationDate}
          </div>
          <div className={`key2 recordFieldBck h-100 align-items-center`}>
            {recordData.bookAuthor}
          </div>
          <div className={`key3 recordFieldBck h-100 align-items-center`}>
            {recordData.title}
          </div>
          <div className={`key4 recordFieldBck h-100 align-items-center`}>
            {recordData.publisher}
          </div>
          <div className={`key5 recordFieldBck h-100 align-items-center`}>
            {recordData.publicationPlace}
          </div>
          <div className={`key6 recordFieldBck h-100 align-items-center`}>
            {recordData.source}
          </div>
          <div className={"recordOptionsBck"}>
            <IconButton onClick={(e) => handleOpenModal(e, `${recordData.bookAuthor}, ${recordData.publicationDate}, ${recordData.title}, ${recordData.publisher}, ${recordData.publicationPlace}`)}>
                <SaveAlt />
            </IconButton>
          </div>
      </div>
      { sublistVisibility &&
        <animated.div
          style={sublistAnim}
          className={"sublistGrayBck w-100 overflow-hidden"}
        >
          <Sublist
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
        </animated.div>
      }
    </animated.div>
  );
};

export default Record;