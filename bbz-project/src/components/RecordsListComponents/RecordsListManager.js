import * as React from "react";
import "../../styles/records-list-manager-styles.css";
import AddRecordButton from "./AddRecordButton";
import ImportButton from "./ImportButton";
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

const RecordsListManager = ({ onSidebarIconClick, onOpenModal }) => {
  const iconButtonClasses = sidebarIconButtonStyles();
  const recordsFieldElement = document.getElementById("recordsField");

  const [maxPage, setMaxPage] = React.useState(50);
  const [pagesAmount, setPagesAmount] = React.useState(1);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchByVal, setSearchByVal] = React.useState("Autor");
  const { recordsList } = React.useContext(DataContext);

  React.useEffect(() => {
    setPagesAmount(Math.ceil(recordsList.length / 50));
  }, [recordsList]);

  const pageDown = () => {
    recordsFieldElement.scrollTop = 0;
    if (currentPage > 1) {
      setCurrentPage((val) => val - 1);
      setMaxPage((val) => val - 50);
    }
  };

  const pageUp = () => {
    recordsFieldElement.scrollTop = 0;
    if (currentPage < pagesAmount) {
      setCurrentPage((val) => val + 1);
      setMaxPage((val) => val + 50);
    }
  };

  return (
    <div className={"w-100 h-100"}>
      <div
        className={"w-100 d-flex align-items-center justify-content-between"}
        id={"topPanel"}
      >
        <Button onClick={onSidebarIconClick} classes={iconButtonClasses}>
          <BsLayoutTextSidebar style={{ fontSize: 26 }} />
        </Button>
        <SearchInput />
        <SelectInput
          value={searchByVal}
          setVal={setSearchByVal}
          allValues={SEARCH_BY_KEYS}
        />
        <ImportButton />
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
                <SortButton text={item} />
              </div>
            ))}
          </div>
          <div id={"recordsField"} className={"w-100 pt-3"}>
            {recordsList.map((item, key) =>
              key < maxPage && key >= maxPage - 50 ? (
                <Record
                  key={key}
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
                <div key={key} style={{ display: "none" }} />
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
