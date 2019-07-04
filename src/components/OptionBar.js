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
    dropdownIsOpen: {
      guests: false,
      rooms: false,
      beds: false,
      dates: false
    },
    checkInDate: '2009-07-01',
    checkOutDate: '2009-07-03',
    adultsCount: 1,
    teensCount: 0,
    kidsCount: 0,
    roomCount: 1,
    bedCount: 1
  };

  nodes = {};

  outsideBoxClickHandlers = {};

  componentDidMount () {
    this.setStateFromQueryParams();
    this.ranges = { // TODO: get these from API(s) & save to state (or do in a parent component & pass props from above)
      adultsCount: [1, 5],
      teensCount: [0, 5],
      kidsCount: [0, 5]
    };
  }

  // toggle open state of individual selector dropdowns
  toggleDropdown = selectorName => {
    if (typeof this.outsideBoxClickHandlers[selectorName] !== 'function') {
      this.outsideBoxClickHandlers[selectorName] = this.handleOutsideBoxClick.bind(this, selectorName);
    }
    if (this.state.dropdownIsOpen[selectorName]) {
      document.removeEventListener('click', this.outsideBoxClickHandlers[selectorName], false);
    } else {
      document.addEventListener('click', this.outsideBoxClickHandlers[selectorName], false);
    }
    this.setState(prevState => ({
      dropdownIsOpen: {
        ...prevState.dropdownIsOpen,
        [selectorName]: !prevState.dropdownIsOpen[selectorName] // toggle boolean value
      }
    }));
  }

  // handle clicks on selector boxes
  handleBoxClick = selectorName => {
    this.toggleDropdown(selectorName);
  }

  // handle clicks outside of selector boxes
  handleOutsideBoxClick = (selectorName, event) => {
    if (this.nodes[selectorName].contains(event.target)) { // ignore clicks on the component itself
      return;
    }
    this.handleBoxClick(selectorName);
  }

  // handle clicks on options in selector dropdowns
  handleOptionClick = (selectorName, stateProp, value) => {
    this.setState({ [stateProp]: value });
    this.toggleDropdown(selectorName);
  }

  // handle clicks on plus/minus icons in "guests" dropdown
  handleGuestsControlClick = (stateProp, increment) => {
    this.setState(prevState => {
      let value = prevState[stateProp] + increment; // calculate new value
      // stay in bounds
      value = Math.max(this.ranges[stateProp][0], value);
      value = Math.min(this.ranges[stateProp][1], value);
      return { [stateProp]: value };
    });
  }

  // read query parameters from the URL and pre-populate the selectors
  setStateFromQueryParams () {
    const urlParams = new URLSearchParams(window.location.search);
    const paramKeys = ['checkInDate', 'checkOutDate', 'adultsCount', 'teensCount', 'kidsCount', 'roomCount'];
    const newState = {};
    paramKeys.forEach(paramKey => {
      const paramVal = urlParams.get(paramKey);
      if (paramVal !== null) {
        switch (paramKey) {
          case 'checkInDate':
          case 'checkOutDate':
            newState[paramKey] = paramVal;
            break;
          case 'adultsCount':
          case 'teensCount':
          case 'kidsCount':
          case 'roomCount':
            newState[paramKey] = parseInt(paramVal, 10);
            break;
          default:
            break;
        }
      }
    });
    this.setState(newState);
  }

  // given individual counts of adults, teens, and kids, return a string in the format "1 adult, 1 teen, 2 kids"
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
      open: this.state.dropdownIsOpen.guests
    });
    const selectorRoomsClass = classNames({
      selector: true,
      'selector-rooms': true,
      'selector-simple': true,
      open: this.state.dropdownIsOpen.rooms
    });
    const selectorBedsClass = classNames({
      selector: true,
      'selector-beds': true,
      'selector-simple': true,
      open: this.state.dropdownIsOpen.beds
    });
    const selectorDatesClass = classNames({
      selector: true,
      'selector-dates': true,
      open: this.state.dropdownIsOpen.dates
    });

    return (
      <section className="OptionBar">

        {/* guests selector */}
        <div
          className={selectorGuestsClass}
          ref={node => { this.nodes.guests = node; }}
        >
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
                  <p className="age-range">Ages 13-17+</p>
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

        {/* rooms selector */}
        <div
          className={selectorRoomsClass}
          ref={node => { this.nodes.rooms = node; }}
        >
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

        {/* beds selector */}
        <div
          className={selectorBedsClass}
          ref={node => { this.nodes.beds = node; }}
        >
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

        {/* dates selector */}
        <div
          className={selectorDatesClass}
          ref={node => { this.nodes.dates = node; }}
        >
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
            {/* TODO: add calendar here */}
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
