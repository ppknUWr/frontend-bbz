import * as React from "react";
import "../../styles/records-list-manager-styles.css";
import AddRecordButton from "./AddRecordButton";
import ImportButton from "./ImportButton";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchTextField";
import SortButton from "./SortButton";
import PageButton from "./PageButton";
import Record from "./RecordComps/Record";
import {
  FIELD_WIDTHS,
  SEARCH_BY_KEYS,
  SORT_OPTIONS,
} from "../../constants/records-list-manager-const";

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
    title: "Angielskie słówka: Słowniczek z obrazkami",
    wydawca: "Państwowy Instytu Wydawniczy",
    place: "Warszawa",
    zrodlo: "XYZ",
  },
  {
    year: "2009",
    author: "Agnieszka Frączek",
    title:
      "Ilustrowany słownik angielsko-polski Auzou: 10 000 haseł i zwrotów, 1000 ilustracji, plansze tematyczne, gramatyka",
    wydawca: "Wydawnictwo Uniwersytetu Śląskiego",
    place: "Katowice",
    zrodlo: "XYZ",
  },
  {
    year: "2015",
    author: "Agnieszka Nożyńska-Demianiuk",
    title: "Ilustrowany słownik wyrazów obcych",
    wydawca: "Ibis",
    place: "Poznań",
    zrodlo: "XYZ",
  },
  {
    year: "2015",
    author: "Arkadiusz Latusek",
    title: "Mój pierwszy słownik ortograficzny",
    wydawca: "Zielona sowa",
    place: "Warszawa",
    zrodlo: "XYZ",
  },
  {
    year: "2015",
    author: "Anna Willman",
    title:
      "Muchy w nosie czyli Co to znaczy?: słownik frazeologiczny dla dzieci",
    wydawca: "Damidos",
    place: "Warszawa",
    zrodlo: "XYZ",
  },
  {
    year: "2015",
    author: "Danuta Kownacka",
    title: "Słowniczek ortograficzny",
    wydawca: "Wydawnictwo Szkolne i Pedagogiczne",
    place: "Warszawa",
    zrodlo: "XYZ",
  },
  {
    year: "2015",
    author: "John Catlow",
    title: "Ilustrowany słownik angielsko-polski dla dzieci",
    wydawca: "Ibis",
    place: "Poznań",
    zrodlo: "XYZ",
  },
  {
    year: "2015",
    author: "Barbara Pędzich",
    title: "Słownik ortograficzny dla klas 4-6",
    wydawca: "Wydawnictwo Szkolne i Pedagogiczne",
    place: "Warszawa",
    zrodlo: "XYZ",
  },
  {
    year: "2013",
    author: "Mariola Świkszcz-Kobyłecka, Tatiana Bobkowska",
    title: "Słownik rosyjsko-ukraińsko-polski",
    wydawca: "Martom",
    place: "Toruń, Kijów",
    zrodlo: "XYZ",
  },
  {
    year: "2010",
    author: "Joanna Białobrzecka",
    title: "Od A do Z - słowniczek ortograficzny: klasa II",
    wydawca: "Didasko",
    place: "Warszawa",
    zrodlo: "XYZ",
  },
];

const RecordsListManager = () => {
  const [searchByVal, setSearchByVal] = React.useState("Autor");

  return (
    <div className={"w-100 h-100"}>
      <div
        className={"w-100 d-flex align-items-center justify-content-between"}
        id={"topPanel"}
      >
        <SearchInput />
        <SelectInput
          value={searchByVal}
          setVal={setSearchByVal}
          allValues={SEARCH_BY_KEYS}
        />
        <ImportButton />
        <AddRecordButton />
      </div>
      <div id={"middlePanel"} className={"w-100 d-flex align-items-center"}>
        <div id={"recordsBck"} className={"w-100"}>
          <div id={"sortOptions"} className={"w-100 d-flex align-items-center"}>
            {SORT_OPTIONS.map((item, key) => (
              <div
                className={
                  "optionBck d-flex justify-content-start align-items-center"
                }
                key={key}
                style={{ width: FIELD_WIDTHS[key] }}
              >
                <SortButton text={item} />
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
