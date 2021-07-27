import * as React from "react";
import "../../../styles/sublist-styles.css";

const Sublist = ({
  id,
  subtitle,
  originalEdition,
  pages,
  language,
  series,
  isbnIssnNumber,
  keywordAndContent,
  source,
}) => {
  return (
    <div className={"sublistBck d-flex flex-row w-100 h-100"}>
      <table className={"sublistTable w-100 h-100"}>
        <tr>
          <th className={"sublistKey"}>Id</th>
          <td className={"sublistVal"}>{id}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Podtytuł</th>
          <td className={"sublistVal"}>{subtitle}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Wydanie</th>
          <td className={"sublistVal"}>{originalEdition}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Objętość</th>
          <td className={"sublistVal"}>{pages}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Język</th>
          <td className={"sublistVal"}>{language}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Typ</th>
          <td className={"sublistVal"}>{series}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Identyfikator</th>
          <td className={"sublistVal"}>{isbnIssnNumber}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Treść zasobu</th>
          <td className={"sublistVal"}>{keywordAndContent}</td>
        </tr>
        <tr>
          <th className={"sublistKey"}>Źródło</th>
          <td className={"sublistVal"}>{source}</td>
        </tr>
      </table>
    </div>
  );
};

export default Sublist;
