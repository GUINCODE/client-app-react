import React from 'react';
import helpOsh from '../assets/helpOsh.gif' 
import construction from '../assets/construction.gif'
import travailCour from "../assets/travailCour.gif";

const Help = () => {
    return (
      <div>
        <h1 style={{ fontSize: 29, marginTop: 100 }}>PAGE D'AIDE</h1>
   
        <div className="d-flex w-100 ">
          <img
            src={construction}
            alt="isie"
            style={{ width: 150, marginLeft: 12 }}
            className="ml-5"
          />
          <img src={travailCour} alt="isie"  className="ml-auto mr-5 workerTap"/>
        </div>
        <h3>
          Page en construction....
          <img src={helpOsh} alt="isie" />
        </h3>
        <span>Revenez plus tard !!!</span>
      </div>
    );
};

export default Help;