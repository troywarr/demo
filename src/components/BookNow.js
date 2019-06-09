import React from 'react';

// components
import Masthead from './Masthead';
import ChooseRoom from './ChooseRoom';

// styles
import './BookNow.scss';



function BookNow() {

  return (
    <div className="BookNow">
      <Masthead/>
      <ChooseRoom/>
      {/* <ChooseRate/> */}
      {/* <Checkout/> */}
    </div>
  );

}



export default BookNow;
