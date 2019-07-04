import React from 'react';
import classNames from 'classnames';

// components
import IconCheck from './icons/IconCheck.js';

// styles
import './StepperProgressBar.scss';



function StepperProgressBar(props) {

  const choosePropertyClass = classNames({
    completed: ['chooseRoom', 'chooseRate', 'checkout', 'done'].includes(props.currentStep),
    selected: props.currentStep === 'chooseProperty'
  });
  const chooseRoomClass = classNames({
    completed: ['chooseRate', 'checkout', 'done'].includes(props.currentStep),
    selected: props.currentStep === 'chooseRoom'
  });
  const chooseRateClass = classNames({
    completed: ['checkout', 'done'].includes(props.currentStep),
    selected: props.currentStep === 'chooseRate'
  });
  const checkoutClass = classNames({
    completed: ['done'].includes(props.currentStep),
    selected: props.currentStep === 'checkout'
  });

  return (
    <section className="StepperProgressBar">
      <ol>
        {props.showChoosePropertyStep &&
          <li className={choosePropertyClass}>
            <div className="dot">
              <IconCheck className="icon icon-check"/>
            </div>
            <p>1: Choose Property</p>
          </li>
        }
        <li className={chooseRoomClass}>
          <div className="dot">
            <IconCheck className="icon icon-check"/>
          </div>
          <p>{props.showChoosePropertyStep ? '2' : '1'}: Choose Room</p>
        </li>
        <li className={chooseRateClass}>
          <div className="dot">
            <IconCheck className="icon icon-check"/>
          </div>
          <p>{props.showChoosePropertyStep ? '3' : '2'}: Choose Rate</p>
        </li>
        <li className={checkoutClass}>
          <div className="dot">
            <IconCheck className="icon icon-check"/>
          </div>
          <p>{props.showChoosePropertyStep ? '4' : '3'}: Checkout</p>
        </li>
      </ol>
    </section>
  );

}



export default StepperProgressBar;
