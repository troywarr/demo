import React from 'react';

// components
import Masthead from './Masthead';
import StepperProgressBar from './StepperProgressBar';
import ChooseRoom from './ChooseRoom';

// styles
import './RoomSearchResults.scss';



function RoomSearchResults() {

  return (
    <section className="RoomSearchResults">
      <Masthead/>
      <StepperProgressBar currentStep={'chooseRoom'}/>
      <ChooseRoom/>
      {/* <ChooseRate/> */}
      {/* <Checkout/> */}
    </section>
  );

}



export default RoomSearchResults;
