import { useState, useEffect, useContext } from "react";
import "../../styles/records-list-manager-styles.css";
import AddRecordButton from "./AddRecordButton";
import ExportButton from "./ExportButton";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchTextField";
import SortButton from "./SortButton";
import PageButton from "./PageButton";
import Record from "./RecordComps/Record";
import Button from "@material-ui/core/Button";
import {
  SEARCH_BY_KEYS,
  SORT_OPTIONS,
} from "../../constants/records-list-manager-const";
import { DataContext } from "../../components/ContextController";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { sidebarIconButtonStyles } from "../../materialStyles/recordsListComponent/sidebar-iconButton-mui-styles";
import useFilter from "../../hooks/useFilter";
import useSort from "../../hooks/useSort";


const filter = (object, query, key) => {
  if (!query || !object) {
  /* jeśli searchfield jest pusty lub obiekt jest niezdefiniowana, zwróć całą oryginalny obiekt */
      return object;
  }
  return object.filter( element => {
      if (key in element){
          if (typeof(element[key]) === "string") // jeśli wartość pod danym kluczem jest stringiem
          {
              const result = element[key].toLowerCase(); // zmiana na małe znaki, by wyłapać wszystkie przypadki
              return result.includes(query.toLowerCase());
          }
          else if (typeof(element[key]) === "number") // jeśli wartość pod danym kluczem jest liczbą
          {
              if (element[key] === Number(query))
                  return element[key];
          }
      }
  });
}

const sort = (array, key, descending=true) => {
  if (!array) {
      return;
  }
  const newArray = [...array];
  (descending) ? newArray.sort((a, b) => (a[key] > b[key])) : newArray.sort((a, b) => (a[key] < b[key]));

  return newArray;
}

const RecordsListManager = ({ onSidebarIconClick, onOpenModal }) => {
  const iconButtonClasses = sidebarIconButtonStyles();
  const recordsFieldElement = document.getElementById("recordsField");
  const maxRecordsOnPage = 100;
  const { recordsList } = useContext(DataContext);

  const [maxPage, setMaxPage] = useState(maxRecordsOnPage);
  const [pagesAmount, setPagesAmount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchByVal, setSearchByVal] = useState("book_author");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOptions, setSortOptions] = useState({ key: "id", isDescending: false });
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(recordsList);
  }, [recordsList])

  useEffect(() => {
    setCurrentPage(1);
    setMaxPage(maxRecordsOnPage);
    setPagesAmount(Math.ceil(displayList.length / maxRecordsOnPage));
  }, [displayList]);
  
  useEffect(() => {
    setDisplayList(list => sort(list, sortOptions.key, sortOptions.isDescending));
  }, [sortOptions]);

  useEffect(() => {
    setDisplayList(filter(recordsList, searchQuery, searchByVal));
  }, [searchQuery]);


  const pageDown = () => {
    recordsFieldElement.scrollTop = 0;
    if (currentPage > 1) {
      setCurrentPage((val) => val - 1);
      setMaxPage((val) => val - maxRecordsOnPage);
    }
  };

  const pageUp = () => {
    recordsFieldElement.scrollTop = 0;
    if (currentPage < pagesAmount) {
      setCurrentPage((val) => val + 1);
      setMaxPage((val) => val + maxRecordsOnPage);
    }
  };

  const handleSearchQueryChange = (e) => {
    setSearchQuery(e.target.value);
  }

  const handleSortKeyChange = (newSortOptions) => {
    setSortOptions(newSortOptions);
  }

  return (
    <div className={"w-100 h-100"}>
      <div
        className={"w-100 d-flex align-items-center justify-content-between"}
        id={"topPanel"}
      >
        <Button onClick={onSidebarIconClick} classes={iconButtonClasses}>
          <BsLayoutTextSidebar style={{ fontSize: 26 }} />
        </Button>
        <SearchInput handleOnChange={handleSearchQueryChange} />
        <SelectInput
          value={searchByVal}
          setVal={setSearchByVal}
          allValues={SEARCH_BY_KEYS}
        />
        <ExportButton />
        <AddRecordButton onOpenModal={onOpenModal} />
      </div>
      <div id={"middlePanel"} className={"w-100 d-flex align-items-center"}>
        <div id={"recordsBck"} className={"w-100"}>
          <div id={"sortOptions"} className={"w-100 d-flex align-items-center"}>
            {SORT_OPTIONS.map((item, key) => (
              <div
                className={"optionBck justify-content-start align-items-center"}
                id={`key${key + 1}`}
                key={key}
              >
                <SortButton sortOption={item} handleOnClick={handleSortKeyChange} />
              </div>
            ))}
          </div>
          <div id={"recordsField"} className={"w-100 pt-3"}>
            {displayList.map((item, key) =>
              key < maxPage && key >= maxPage - maxRecordsOnPage ? (
                <Record
                  key={item["id"]}
                  recordData={{
                    publicationDate: item["publication_date"],
                    bookAuthor: item["book_author"],
                    title: item["title"],
                    publisher: item["publisher"],
                    publicationPlace: item["publication_place"],
                    source: item["source"],
                  }}
                  sublistData={{
                    id: item["id"],
                    subtitle: item["subtitle"],
                    originalEdition: item["original_edition"],
                    pages: item["pages"],
                    language: item["language"],
                    series: item["series"],
                    isbnIssnNumber: item["isbn_or_issn_number"],
                    keywordsAndContent: item["keywords_and_content"],
                    source: item["source"],
                  }}
                />
              ) : (
                <div key={item["id"]} style={{ display: "none" }} />
              )
            )}
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
              "w-50 h-100 d-flex align-items-center justify-content-center"
            }
          >
            <PageButton
              leftDirection={true}
              onClick={pageDown}
              disabled={currentPage === 1}
            />
          </div>
          <div
            id={"rightPageButton"}
            className={
              "w-50 h-100 d-flex align-items-center justify-content-center"
            }
          >
            <PageButton
              leftDirection={false}
              onClick={pageUp}
              disabled={currentPage === pagesAmount}
            />
          </div>
        </div>
        <div id={"pageText"}>
          Strona {currentPage} z {pagesAmount}
        </div>
      </div>
    </div>
  );
};

export default RecordsListManager;
