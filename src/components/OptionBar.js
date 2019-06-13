import React from 'react';
import classNames from 'classnames';
import moment from 'moment';

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
    checkInDate: '2009-07-01',
    checkOutDate: '2009-07-03',
    adultsCount: 1,
    teensCount: 0,
    kidsCount: 0,
    roomCount: 1,
    bedCount: 1
  };

  componentDidMount () {
    this.setStateFromQueryParams();
  }

  setStateFromQueryParams () {
    const urlParams = new URLSearchParams(window.location.search);
    const parsedParams = {
      checkInDate: urlParams.get('checkInDate'),
      checkOutDate: urlParams.get('checkOutDate'),
      adultsCount: parseInt(urlParams.get('adultsCount'), 10),
      teensCount: parseInt(urlParams.get('teensCount'), 10),
      kidsCount: parseInt(urlParams.get('kidsCount'), 10),
      roomCount: parseInt(urlParams.get('roomCount'), 10)
    };
    const state = {};
    Object.keys(parsedParams).forEach(prop => {
      const value = parsedParams[prop];
      if (typeof value !== 'undefined') {
        state[prop] = value;
      }
    });
    console.log(state);
    this.setState(state);
  }

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

  handleOptionClick = (selectorName, stateProp, value) => {
    this.setState({ [stateProp]: value });
    this.toggleDropdown(selectorName);
  }

  handleGuestsControlClick = (stateProp, increment) => {
    this.setState(prevState => {
      const ranges = {
        adultsCount: [1, 5],
        teensCount: [0, 5],
        kidsCount: [0, 5]
      };
      let value = prevState[stateProp] + increment; // calculate new value
      // stay in bounds
      value = Math.max(ranges[stateProp][0], value);
      value = Math.min(ranges[stateProp][1], value);
      return { [stateProp]: value };
    });
  }

  getGuestsString (adultsCount, teensCount, kidsCount) {
    const guests = {
      adult: {
        count: adultsCount,
        singular: 'adult',
        plural: 'adults'
      },
      teen: {
        count: teensCount,
        singular: 'teen',
        plural: 'teens'
      },
      kid: {
        count: kidsCount,
        singular: 'kid',
        plural: 'kids'
      }
    };
    const stringSegments = [];
    Object.keys(guests).forEach(personType => {
      if (guests[personType].count > 0) {
        stringSegments.push(`${guests[personType].count} ${guests[personType].count === 1 ? guests[personType].singular : guests[personType].plural}`);
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
              <p className="value">{this.getGuestsString(this.state.adultsCount, this.state.teensCount, this.state.kidsCount)}</p>
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
                    onClick={this.handleGuestsControlClick.bind(this, 'adultsCount', -1)}
                  >
                    <IconMinus className="icon icon-minus"/>
                  </p>
                  <p className="value">{this.state.adultsCount}</p>
                  <p
                    className="control control-increment"
                    onClick={this.handleGuestsControlClick.bind(this, 'adultsCount', 1)}
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
                    onClick={this.handleGuestsControlClick.bind(this, 'teensCount', -1)}
                  >
                    <IconMinus className="icon icon-minus"/>
                  </p>
                  <p className="value">{this.state.teensCount}</p>
                  <p
                    className="control control-increment"
                    onClick={this.handleGuestsControlClick.bind(this, 'teensCount', 1)}
                  >
                    <IconPlus className="icon icon-plus"/>
                  </p>
                </div>
              </li>
              <li className="kids">
                <div className="control-label">
                  <p className="person-type">Kids</p>
                  <p className="age-range">Ages 0-12</p>
                </div>
                <div className="controls">
                  <p
                    className="control control-decrement"
                    onClick={this.handleGuestsControlClick.bind(this, 'kidsCount', -1)}
                  >
                    <IconMinus className="icon icon-minus"/>
                  </p>
                  <p className="value">{this.state.kidsCount}</p>
                  <p
                    className="control control-increment"
                    onClick={this.handleGuestsControlClick.bind(this, 'kidsCount', 1)}
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
              <p className="value">{this.state.roomCount}</p>
            </div>
            <IconCaretDown className="icon icon-caret-down"/>
          </div>
          <div className="dropdown">
            <ol>
              {[1, 2, 3, 4, 5].map((option, i) => (
                <li
                  key={i}
                  className={this.state.roomCount === option ? 'selected' : ''}
                  onClick={this.handleOptionClick.bind(this, 'rooms', 'roomCount', option)}
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
              <p className="value">{this.state.bedCount}</p>
            </div>
            <IconCaretDown className="icon icon-caret-down"/>
          </div>
          <div className="dropdown">
            <ol>
              {[1, 2].map((option, i) => (
                <li
                  key={i}
                  className={this.state.bedCount === option ? 'selected' : ''}
                  onClick={this.handleOptionClick.bind(this, 'beds', 'bedCount', option)}
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
              <p className="value">{moment(this.state.checkInDate).format('MMMM D, YYYY')}</p>
            </div>
            <div className="box-inner check-out">
              <p className="label">Check out</p>
              <p className="value">{moment(this.state.checkOutDate).format('MMMM D, YYYY')}</p>
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
