import * as React from "react";
import { useState } from "react";
import "../../styles/RecordsListStyles.css";
import AddRecordButton from "./AddRecordButton";
import ImportButton from "./ImportButton";
import SelectInput from "./SearchBySelectTextField";
import SearchInput from "./SearchTextField";
import SortButton from "./SortButton";
import PageButton from "./PageButton";
import { useScreenSizes } from "../../hooks/useScreenSizes";

const searchByValues = [
  {
    value: "Autor",
  },
  {
    value: "Tytuł",
  },
  {
    value: "Rok",
  },
  {
    value: "Wydawca",
  },
];

const RecordsListManager = () => {
  const { large } = useScreenSizes();
  const [searchByVal, setSearchByVal] = useState("Autor");

  return (
    <div className={"w-100 h-100"}>
      <div className={"w-100 d-flex align-items-center"} id={"topPanel"}>
        <SearchInput />
        <SelectInput
          value={searchByVal}
          setVal={setSearchByVal}
          allValues={searchByValues}
        />
        <ImportButton />
        <AddRecordButton />
      </div>
      <div id={"middlePanel"} className={"w-100 d-flex align-items-center"}>
        <div id={"recordsBck"} className={"w-100"}>
          {!large ? (
            <div
              id={"sortOptions"}
              className={"w-100 d-flex align-items-center"}
            >
              <div className={"optionBck"} id={"op1"}>
                <SortButton text={"Twórca/Twórcy"} />
              </div>
              <div className={"optionBck"} id={"op2"}>
                <SortButton text={"Rok"} />
              </div>
              <div className={"optionBck"} id={"op3"}>
                <SortButton text={"Tytuł"} />
              </div>
              <div className={"optionBck"} id={"op4"}>
                <SortButton text={"Wydawca"} />
              </div>
            </div>
          ) : (
            <></>
          )}
          <div id={"recordsField"} className={"w-100"}>
            {/*this is place to add component which displays records  */}
          </div>
        </div>
      </div>
      <div
        id={"bottomPanel"}
        className={
          "w-100 d-flex justify-content-center align-items-center position-relative"
        }
      >
        <div
          id={"pageButtonBck"}
          className={"d-flex flex-row align-items-center"}
        >
          <div id={"leftPageButton"}>
            <PageButton leftDirection={true} />
          </div>
          <div id={"rightPageButton"}>
            <PageButton leftDirection={false} />
          </div>
        </div>
        <div id={"pageText"}>1 z 1s</div>
      </div>
    </div>
  );
};

export default RecordsListManager;
