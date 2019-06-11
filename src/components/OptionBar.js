import React from 'react';

// components
import IconCaretDown from './icons/IconCaretDown';
import IconCalendar from './icons/IconCalendar';

// styles
import './OptionBar.scss';



class OptionBar extends React.Component {

  handleClick = boxName => {
    alert(boxName);
  }

  render () {
    return (
      <section className="OptionBar">
        <div
          className="box box-guests"
          onClick={this.handleClick.bind(this, 'guests')}
        >
          <div className="box-inner">
            <p className="label">Guests</p>
            <p className="value">2 adults, 1 child</p>
          </div>
          <IconCaretDown className="icon-caret-down"/>
        </div>
        <div
          className="box box-rooms"
          onClick={this.handleClick.bind(this, 'rooms')}
        >
          <div className="box-inner">
            <p className="label">Rooms</p>
            <p className="value">1</p>
          </div>
          <IconCaretDown className="icon-caret-down"/>
        </div>
        <div
          className="box box-beds"
          onClick={this.handleClick.bind(this, 'beds')}
        >
          <div className="box-inner">
            <p className="label">Beds</p>
            <p className="value">1</p>
          </div>
          <IconCaretDown className="icon-caret-down"/>
        </div>
        <div
          className="box box-dates"
          onClick={this.handleClick.bind(this, 'dates')}
        >
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
