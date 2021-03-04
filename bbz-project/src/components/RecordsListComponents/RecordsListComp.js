import * as React from 'react';
import {useState} from "react";
import '../../styles/RecordsListStyles.css';
import AddRecordButton from "./AddRecordButton";
import ImportButton from "./ImportButton";
import SelectInput from "./SearchBySelectTextField";
import SearchInput from "./SearchTextField";
import SortButton from "./SortButton";

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
            <div className={'optionBck'} id={'op1'}>
              <SortButton text={'Twórca/Twórcy'} />
            </div>
            <div className={'optionBck'} id={'op2'}>
              <SortButton text={'Rok'} />
            </div>
            <div className={'optionBck'} id={'op3'}>
              <SortButton text={'Tytuł'} />
            </div>
            <div className={'optionBck'} id={'op4'}>
              <SortButton text={'Wydawca'} />
            </div>
          </div>
          <div className={'recordsField'}>
            {/*this is place to add component which displays recors  */}
          </div>
        </div>
      </div>
      <div className={'bottomPanel'}>

      </div>
    </div>
  )
}

export default RecordsListComp;
