import React from 'react';

// components
import IconCaretDown from './icons/IconCaretDown';
import IconCalendar from './icons/IconCalendar';

// styles
import './OptionBar.scss';



class OptionBar extends React.Component {

  render () {
    return (
      <section className="OptionBar">
        <div className="box box-guests">
          <div class="box-inner">
            <p className="label">Guests</p>
            <p className="value">2 adults, 1 child</p>
          </div>
          <IconCaretDown className="icon-caret-down"/>
        </div>
        <div className="box box-rooms">
          <div class="box-inner">
            <p className="label">Rooms</p>
            <p className="value">1</p>
          </div>
          <IconCaretDown className="icon-caret-down"/>
        </div>
        <div className="box box-beds">
          <div class="box-inner">
            <p className="label">Beds</p>
            <p className="value">1</p>
          </div>
          <IconCaretDown className="icon-caret-down"/>
        </div>
        <div className="box box-dates">
          <div className="box-inner check-in">
            <p className="label">Check in</p>
            <p className="value">May 9, 2019</p>
          </div>
          <div className="box-inner check-out">
            <p className="label">Check out</p>
            <p className="value">May 16, 2019</p>
          </div>
          <IconCalendar className="icon-calendar"/>
        </div>
        <button
          type="button"
          className="search"
        >Search Dates</button>
      </section>
    );
  }

}



export default OptionBar;
