import * as React from 'react';
import './Bck.css';
import RecordsListComp from "./RecordsListComp";

export default function Bck() {
    return (
        <div className={'bck'}>
            <div className={'bckToWork'}>
              <RecordsListComp />
            </div>
        </div>
    )
}
