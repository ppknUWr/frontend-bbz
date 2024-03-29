import React, { useState, useEffect, useRef, useContext, useCallback } from "react";
import "../../styles/records-list-manager-styles.css";
import PageManager from "./PageManager";
import SelectInput from "./SelectInput";
import SearchInput from "./SearchTextField";
import SortButton from "./SortButton";
import Record from "./RecordComps/Record";
import Button from "@material-ui/core/Button";
import RecordCitationModal from "./CitationModal/RecordCitationModal";
import {
  SEARCH_BY_KEYS,
  SORT_OPTIONS,
} from "../../constants/records-list-manager-const";
import { DataContext } from "../../components/ContextController";
import { BsLayoutTextSidebar } from "react-icons/bs";
import { sidebarIconButtonStyles } from "../../materialStyles/recordsListComponent/sidebar-iconButton-mui-styles";
import { sort, filter } from "../../helpers/helper-functions";
import InfoSidebar from "./InfoSidebar";

const RecordsListManager = ({ onSidebarIconClick }) => {
  const iconButtonClasses = sidebarIconButtonStyles();
  const maxRecordsOnPage = 50;
  const { recordsList } = useContext(DataContext);
  const recordsFieldElement = useRef();

  const [maxPage, setMaxPage] = useState(maxRecordsOnPage);
  const [pagesAmount, setPagesAmount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchByVal, setSearchByVal] = useState("book_author");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOptions, setSortOptions] = useState({ key: "id", isDescending: true });
  const [displayList, setDisplayList] = useState([]);
  // used to reset sort buttons state
  const [toggleResetState, setToggleResetState] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [openInfoSidebar, setOpenInfoSidebar] = useState(false);
  const [citationString, setCitationString] = useState("");

  useEffect(() => {
    setDisplayList(recordsList);
    setSearchQuery("");
    setSortOptions({ key: "id", isDescending: true });
    setToggleResetState(state => !state);
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

  const handlePageChange = (direction) => {
    recordsFieldElement.current.scrollTop = 0;
    switch (direction) {
      case 'UP':
          setCurrentPage((val) => val + 1);
          setMaxPage((val) => val + maxRecordsOnPage);
        break;
      case 'DOWN':
          setCurrentPage((val) => val - 1);
          setMaxPage((val) => val - maxRecordsOnPage);
          break;
    }
  }

  const handleOpenModal = useCallback((event, citation) => {
    event.stopPropagation();
    setOpenModal(state => !state);
    setCitationString(citation);
  }, []);

  return (
    <div className={"w-100 h-100"}>
      <RecordCitationModal open={openModal} setOpenModal={setOpenModal} citation={citationString} />
      <InfoSidebar open={openInfoSidebar} onClose={setOpenInfoSidebar}/>
      <div className={"w-100 d-flex align-items-center"} id={"topPanel"}>
        <Button onClick={onSidebarIconClick} classes={iconButtonClasses}>
          <BsLayoutTextSidebar style={{ fontSize: 26 }} />
        </Button>
        <SearchInput handleOnChange={setSearchQuery} searchQuery={searchQuery} />
        <SelectInput
          value={searchByVal}
          setVal={setSearchByVal}
          allValues={SEARCH_BY_KEYS}
        />
        <div style={{ marginLeft: 20 }}>
          <Button variant="outlined" onClick={() => setOpenInfoSidebar(true)}>
            Info
          </Button>
        </div>
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
                <SortButton sortOption={item} handleOnClick={setSortOptions} resetState={toggleResetState} />
              </div>
            ))}
          </div>
          <div ref={recordsFieldElement} id={"recordsField"} className={"w-100 pt-1"}>
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
                  handleOpenModal={handleOpenModal}
                />
              ) : (
                <div key={item["id"]} style={{ display: "none" }} />
              )
            )}
          </div>
        </div>
      </div>
      <PageManager handlePageChange={handlePageChange} currentPage={currentPage} pagesAmount={pagesAmount} />
    </div>
  );
};

export default React.memo(RecordsListManager);
