import * as React from 'react';
import {useState} from "react";
import '../../styles/RecordsListStyles.css';
import AddRecordButton from "./AddRecordButton";
import ImportButton from "./ImportButton";
import SelectInput from "./SearchBySelectTextField";
import SearchInput from "./SearchTextField";

const searchByValues = [
  {
    value: 'Autor',
  },
  {
    value: 'Tytuł',
  },
  {
    value: 'Rok',
  },
  {
    value: 'Wydawca',
  },
]

const RecordsListComp = () => {
  const [searchByVal, setSearchByVal] = useState('Autor');

  return (
    <div className={'mainBody'}>
      <div className={'topPanel'}>
        <SearchInput/>
        <SelectInput
          value={searchByVal}
          setVal={setSearchByVal}
          allValues={searchByValues}
        />
        <ImportButton />
        <AddRecordButton />
      </div>
      <div className={'middlePanel'}>
        <div className={'recordsBck'}>
          <div className={'sortOptions'}>

          </div>
          <div className={'recordsField'}>

          </div>
        </div>
      </div>
      <div className={'bottomPanel'}>
        Panel dolny
      </div>
    </div>
  )
}

export default RecordsListComp;
