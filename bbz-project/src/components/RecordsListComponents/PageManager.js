import React from 'react'
import PageButton from "./PageButton";
import "../../styles/page-manager-styles.css";

const PageManager = ({ handlePageChange, currentPage, pagesAmount}) => {
    return (
        <div id={"bottomPanel"} className={"w-100 d-flex justify-content-center align-items-center position-relative"}>
        <div id={"pageButtonBck"} className={"d-flex flex-row align-items-center justify-content-between"}>
          <div className={"w-50 h-100 d-flex align-items-center justify-content-center"}>
            <PageButton
              leftDirection={true}
              onClick={() => handlePageChange("DOWN")}
              disabled={currentPage === 1}
            />
          </div>
          <div id={"rightPageButton"} className={"w-50 h-100 d-flex align-items-center justify-content-center"}>
            <PageButton
              leftDirection={false}
              onClick={() => handlePageChange("UP")}
              disabled={currentPage === pagesAmount}
            />
          </div>
        </div>
        <div id={"pageText"}>
          Strona {currentPage} z {pagesAmount}
        </div>
      </div>
    )
}

export default PageManager
