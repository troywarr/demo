import React from 'react';
import classNames from 'classnames';

// components
import IconCaretDown from './icons/IconCaretDown';
import IconCalendar from './icons/IconCalendar';
import IconCheck from './icons/IconCheck';
import IconPlus from './icons/IconPlus';
import IconMinus from './icons/IconMinus';

// styles
import './OptionBar.scss';



class OptionBar extends React.Component {

  state = {
    dropdownGuestsIsOpen: false,
    dropdownRoomsIsOpen: false,
    dropdownBedsIsOpen: false,
    dropdownDatesIsOpen: false,
    adults: 2,
    teens: 0,
    children: 1,
    rooms: 1,
    beds: 1
  };

  toggleDropdown = selectorName => {
    let prop;
    switch (selectorName) {
      case 'guests':
        prop = 'dropdownGuestsIsOpen';
        break;
      case 'rooms':
        prop = 'dropdownRoomsIsOpen';
        break;
      case 'beds':
        prop = 'dropdownBedsIsOpen';
        break;
      case 'dates':
        prop = 'dropdownDatesIsOpen';
        break;
    }
    this.setState(prevState => ({ [prop]: !prevState[prop] })); // toggle boolean value
  }

  handleBoxClick = selectorName => {
    this.toggleDropdown(selectorName);
  }

  handleOptionClick = (selectorName, value) => {
    this.setState({ [selectorName]: value });
    this.toggleDropdown(selectorName);
  }

  handleGuestsControlClick = (personType, increment) => {
    this.setState(prevState => {
      const min = 0;
      const max = 5;
      let value = prevState[personType] + increment; // calculate new value
      // stay in bounds
      value = Math.max(min, value);
      value = Math.min(max, value);
      return { [personType]: value };
    });
  }

  getGuestsString (adultQty, teenQty, childQty) {
    const guests = {
      adult: {
        qty: adultQty,
        singular: 'adult',
        plural: 'adults'
      },
      teen: {
        qty: teenQty,
        singular: 'teen',
        plural: 'teens'
      },
      child: {
        qty: childQty,
        singular: 'child',
        plural: 'children'
      }
    };
    const stringSegments = [];
    Object.keys(guests).forEach(personType => {
      if (guests[personType].qty > 0) {
        stringSegments.push(`${guests[personType].qty} ${guests[personType].qty === 1 ? guests[personType].singular : guests[personType].plural}`);
      }
    });
    return stringSegments.join(', ');
  }

  render () {
    const selectorGuestsClass = classNames({
      selector: true,
      'selector-guests': true,
      open: this.state.dropdownGuestsIsOpen
    });
    const selectorRoomsClass = classNames({
      selector: true,
      'selector-rooms': true,
      'selector-simple': true,
      open: this.state.dropdownRoomsIsOpen
    });
    const selectorBedsClass = classNames({
      selector: true,
      'selector-beds': true,
      'selector-simple': true,
      open: this.state.dropdownBedsIsOpen
    });
    const selectorDatesClass = classNames({
      selector: true,
      'selector-dates': true,
      open: this.state.dropdownDatesIsOpen
    });
    return (
      <section className="OptionBar">
        {/* guests */}
        <div className={selectorGuestsClass}>
          <div
            className="box"
            onClick={this.handleBoxClick.bind(this, 'guests')}
          >
            <div className="box-inner">
              <p className="label">Guests</p>
              <p className="value">{this.getGuestsString(this.state.adults, this.state.teens, this.state.children)}</p>
            </div>
            <IconCaretDown className="icon icon-caret-down"/>
          </div>
          <div className="dropdown">
            <ol>
              <li className="adults">
                <div className="control-label">
                  <p className="person-type">Adults</p>
                  <p className="age-range">Ages 18+</p>
                </div>
                <div className="controls">
                  <p
                    className="control control-decrement"
                    onClick={this.handleGuestsControlClick.bind(this, 'adults', -1)}
                  >
                    <IconMinus className="icon icon-minus"/>
                  </p>
                  <p className="value">{this.state.adults}</p>
                  <p
                    className="control control-increment"
                    onClick={this.handleGuestsControlClick.bind(this, 'adults', 1)}
                  >
                    <IconPlus className="icon icon-plus"/>
                  </p>
                </div>
              </li>
              <li className="teens">
                <div className="control-label">
                  <p className="person-type">Teens</p>
                  <p className="age-range">Ages 13-17</p>
                </div>
                <div className="controls">
                  <p
                    className="control control-decrement"
                    onClick={this.handleGuestsControlClick.bind(this, 'teens', -1)}
                  >
                    <IconMinus className="icon icon-minus"/>
                  </p>
                  <p className="value">{this.state.teens}</p>
                  <p
                    className="control control-increment"
                    onClick={this.handleGuestsControlClick.bind(this, 'teens', 1)}
                  >
                    <IconPlus className="icon icon-plus"/>
                  </p>
                </div>
              </li>
              <li className="children">
                <div className="control-label">
                  <p className="person-type">Kids</p>
                  <p className="age-range">Ages 0-12</p>
                </div>
                <div className="controls">
                  <p
                    className="control control-decrement"
                    onClick={this.handleGuestsControlClick.bind(this, 'children', -1)}
                  >
                    <IconMinus className="icon icon-minus"/>
                  </p>
                  <p className="value">{this.state.children}</p>
                  <p
                    className="control control-increment"
                    onClick={this.handleGuestsControlClick.bind(this, 'children', 1)}
                  >
                    <IconPlus className="icon icon-plus"/>
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
        {/* rooms */}
        <div className={selectorRoomsClass}>
          <div
            className="box"
            onClick={this.handleBoxClick.bind(this, 'rooms')}
          >
            <div className="box-inner">
              <p className="label">Rooms</p>
              <p className="value">{this.state.rooms}</p>
            </div>
            <IconCaretDown className="icon icon-caret-down"/>
          </div>
          <div className="dropdown">
            <ol>
              {[1, 2, 3, 4, 5].map((option, i) => (
                <li
                  key={i}
                  className={this.state.rooms === option ? 'selected' : ''}
                  onClick={this.handleOptionClick.bind(this, 'rooms', option)}
                >
                  <p>{option}</p>
                  <IconCheck className="icon icon-check"/>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* beds */}
        <div className={selectorBedsClass}>
          <div
            className="box"
            onClick={this.handleBoxClick.bind(this, 'beds')}
          >
            <div className="box-inner">
              <p className="label">Beds</p>
              <p className="value">{this.state.beds}</p>
            </div>
            <IconCaretDown className="icon icon-caret-down"/>
          </div>
          <div className="dropdown">
            <ol>
              {[1, 2].map((option, i) => (
                <li
                  key={i}
                  className={this.state.beds === option ? 'selected' : ''}
                  onClick={this.handleOptionClick.bind(this, 'beds', option)}
                >
                  <p>{option}</p>
                  <IconCheck className="icon icon-check"/>
                </li>
              ))}
            </ol>
          </div>
        </div>
        {/* dates */}
        <div className={selectorDatesClass}>
          <div
            className="box"
            onClick={this.handleBoxClick.bind(this, 'dates')}
          >
            <div className="box-inner check-in">
              <p className="label">Check in</p>
              <p className="value">May 9, 2019</p>
            </div>
            <div className="box-inner check-out">
              <p className="label">Check out</p>
              <p className="value">May 16, 2019</p>
            </div>
            <IconCalendar className="icon icon-calendar"/>
          </div>
          <div className="dropdown">
            <p>DATES</p>
          </div>
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
