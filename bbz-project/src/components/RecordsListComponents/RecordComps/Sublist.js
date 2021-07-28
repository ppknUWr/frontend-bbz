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
  const keyAndValues = [
    {
      keyName: 'Id',
      value: id,
    },
    {
      keyName: 'Podtytuł',
      value: subtitle,
    },
    {
      keyName: 'Wydanie',
      value: originalEdition,
    },
    {
      keyName: 'Objętość',
      value: pages,
    },
    {
      keyName: 'Język',
      value: language,
    },
    {
      keyName: 'Typ',
      value: series,
    },
    {
      keyName: 'Identyfikator',
      value: isbnIssnNumber,
    },
    {
      keyName: 'Treść zasobu',
      value: keywordAndContent,
    },
    {
      keyName: 'Źródło',
      value: source,
    }
  ]

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
