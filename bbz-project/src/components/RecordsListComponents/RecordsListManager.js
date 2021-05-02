import * as React from "react";
import "../../styles/records-list-manager-styles.css";
import AddRecordButton from "./AddRecordButton";
import ImportButton from "./ImportButton";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchTextField";
import SortButton from "./SortButton";
import PageButton from "./PageButton";
import Record from "./RecordComps/Record";
import { FIELD_WIDTHS } from "../../constants/records-list-manager-const";

const recordsData = [
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title: "Zobacz, Gdzie Mieszka Miś Bodo",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title: "Zobacz, Gdzie Mieszka Miś Bodo",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title: "Zobacz, Gdzie Mieszka Miś Bodo",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title: "Zobacz, Gdzie Mieszka Miś Bodo",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title: "Zobacz, Gdzie Mieszka Miś Bodo",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title: "Zobacz, Gdzie Mieszka Miś Bodo",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
];

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

const sortOptions = [
  {
    value: "Rok",
  },
  {
    value: "Twórca/Twórcy",
  },
  {
    value: "Tytuł",
  },
  {
    value: "Wydawca",
  },
  {
    value: "Miejsce wydania",
  },
  {
    value: "Źródło",
  },
];

const RecordsListManager = () => {
  const [searchByVal, setSearchByVal] = React.useState("Autor");

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
          <div id={"sortOptions"} className={"w-100 d-flex align-items-center"}>
            {sortOptions.map((item, key) => (
              <div
                className={
                  "optionBck d-flex justify-content-start align-items-center"
                }
                key={key}
                style={{ width: FIELD_WIDTHS[key] }}
              >
                <SortButton text={item.value} />
              </div>
            ))}
          </div>
          <div id={"recordsField"} className={"w-100 pt-3"}>
            {recordsData.map((item, key) => (
              <Record key={key} data={item} />
            ))}
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
          className={
            "d-flex flex-row align-items-center justify-content-between"
          }
        >
          <div
            className={
              "pageButton h-100 d-flex align-items-center justify-content-center"
            }
          >
            <PageButton leftDirection={true} />
          </div>
          <div
            id={"rightPageButton"}
            className={
              "pageButton h-100 d-flex align-items-center justify-content-center"
            }
          >
            <PageButton leftDirection={false} />
          </div>
        </div>
        <div id={"pageText"}>1 z 1s</div>
      </div>
    </div>
  );
};

export default RecordsListManager;
