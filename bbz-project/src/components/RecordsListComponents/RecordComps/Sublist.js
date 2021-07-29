import * as React from "react";
import "../../../styles/sublist-styles.css";

const Sublist = ({ sublistData }) => {
  const keyAndValues = [
    {
      keyName: "Id",
      value: sublistData.id,
    },
    {
      keyName: "Podtytuł",
      value: sublistData.subtitle,
    },
    {
      keyName: "Wydanie",
      value: sublistData.originalEdition,
    },
    {
      keyName: "Objętość",
      value: sublistData.pages,
    },
    {
      keyName: "Język",
      value: sublistData.language,
    },
    {
      keyName: "Typ",
      value: sublistData.series,
    },
    {
      keyName: "Identyfikator",
      value: sublistData.isbnIssnNumber,
    },
    {
      keyName: "Treść zasobu",
      value: sublistData.keywordAndContent,
    },
    {
      keyName: "Źródło",
      value: sublistData.source,
    },
  ];

  return (
    <div className={"sublistBck d-flex flex-row w-100 h-100"}>
      <table className={"sublistTable w-100 h-100"}>
        <tbody>
          {keyAndValues.map((item, index) => (
            <tr key={index}>
              <th className={"sublistKey"}>{item.keyName}</th>
              <td className={"sublistVal"}>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Sublist;
