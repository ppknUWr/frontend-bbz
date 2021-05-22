import * as React from "react";
import "../../../styles/sublist-styles.css";

const Sublist = () => {
  const keys = [
    {
      name: "Id",
      value: "12351234",
    },
    {
      name: "Podtytuł",
      value: "Lorem ipsum dolor sit amet.",
    },
    {
      name: "Wydanie",
      value: "Lorem ipsum",
    },
    {
      name: "Objętość",
      value: "Lorem ipsum dolor",
    },
    {
      name: "Język",
      value: "Lorem",
    },
    {
      name: "Typ",
      value: "Lorem ipsum",
    },
    {
      name: "Format",
      value: "Lorem",
    },
    {
      name: "Identyfikator",
      value: "612376",
    },
    {
      name: "Treść zasobu",
      value:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis lacus at nisi cursus accumsan in at dui. Vivamus non pulvinar massa. Curabitur sed ex consequat, pharetra dui et, convallis elit. Class aptent taciti sociosqu ad litora torquent per conubia.",
    },
    {
      name: "Źródło",
      value: "Lorem ipsum dolor",
    },
  ];

  return (
    <div className={"sublistBck d-flex flex-row w-100 h-100"}>
      <table className={"sublistTable w-100 h-100"}>
        {keys.map((item, index) => (
          <tr key={index}>
            <th className={"sublistKey"}>{item.name}</th>
            <td className={"sublistVal"}>{item.value}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Sublist;
