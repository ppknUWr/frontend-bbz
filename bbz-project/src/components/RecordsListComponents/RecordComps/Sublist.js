import * as React from "react";
import "../../../styles/sublist-styles.css";

const Sublist = () => {
  const keys = [
    {
      name: "Id",
      width: "2.5%",
    },
    {
      name: "Podtytuł",
      width: "15%",
    },
    {
      name: "Wydanie",
      width: "5.5%",
    },
    {
      name: "Objętość",
      width: "6.5%",
    },
    {
      name: "Język",
      width: "8%",
    },
    {
      name: "Typ",
      width: "6.5%",
    },
    {
      name: "Format",
      width: "7%",
    },
    {
      name: "Identyfikator",
      width: "7%",
    },
    {
      name: "Treść zasobu",
      width: "16%",
    },
    {
      name: "Źródło",
      width: "14%",
    },
  ];

  return (
    <div className={"sublistBck w-100 h-100"}>
      <div
        className={"sublistTopBarBck w-100 d-flex flex-row align-items-center"}
      >
        {keys.map((item, index) => (
          <div
            key={index}
            className={"sublistTopBarKey d-flex align-items-center"}
            style={{ width: item.width }}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sublist;
