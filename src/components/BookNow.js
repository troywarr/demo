import React from 'react';

// components
import Masthead from './Masthead';
import StepperProgressBar from './StepperProgressBar';
import ChooseRoom from './ChooseRoom';

// styles
import './BookNow.scss';



function BookNow() {

  return (
    <div className="BookNow">
      <Masthead/>
      <StepperProgressBar/>
      <ChooseRoom/>
      {/* <ChooseRate/> */}
      {/* <Checkout/> */}
    </div>
  );

}



export default BookNow;
