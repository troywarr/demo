import React from 'react';

// styles
import './StepperProgressBar.scss';



class StepperProgressBar extends React.Component {

  render () {
    return (
      <section className="StepperProgressBar">
        <ol>
          <li className="selected">
            <div className="dot"></div>
            <p>1: Choose Room</p>
          </li>
          <li>
            <div className="dot"></div>
            <p>2: Choose Rate</p>
          </li>
          <li>
            <div className="dot"></div>
            <p>3: Checkout</p>
          </li>
        </ol>
      </section>
    );
  }

}



export default StepperProgressBar;
