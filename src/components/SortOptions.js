import React from 'react';
import classNames from 'classnames';

// components
import IconTriangleDown from './icons/IconTriangleDown';

// styles
import './SortOptions.scss';



class SortOptions extends React.Component {

  state = {
    dropdownIsOpen: {
      price: false,
      size: false
    }
  };

  nodes = {};

  outsideBoxClickHandlers = {};

  // TODO: move this utility function to a central/shared utilities file
  capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
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

  // handle clicks on sort options
  handleOptionClick = (selectorName, optionValue) => {
    this.toggleDropdown(selectorName);
    this.props.handleSortOptionClick(selectorName, optionValue);
  }

  render () {
    const selectorPriceClass = classNames({
      selector: true,
      'selector-price': true,
      open: this.state.dropdownIsOpen.price
    });
    const selectorSizeClass = classNames({
      selector: true,
      'selector-size': true,
      open: this.state.dropdownIsOpen.size
    });

    return (
      <section className="SortOptions">

        {/* price selector */}
        <div
          className={selectorPriceClass}
          ref={node => { this.nodes.price = node; }}
        >
          <div
            className="box"
            onClick={this.handleBoxClick.bind(this, 'price')}
          >
            <p>Price</p>
            <IconTriangleDown className="icon icon-triangle-down"/>
          </div>
          <div className="dropdown">
            <ol>
              {['ascending', 'descending'].map((option, i) => (
                <li
                  key={i}
                  className={this.props.sorting.price === option ? 'selected' : ''}
                  onClick={this.handleOptionClick.bind(this, 'price', option)}
                >
                  <p>{this.capitalizeFirstLetter(option)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* room size selector */}
        <div
          className={selectorSizeClass}
          ref={node => { this.nodes.size = node; }}
        >
          <div
            className="box"
            onClick={this.handleBoxClick.bind(this, 'size')}
          >
            <p>Size</p>
            <IconTriangleDown className="icon icon-triangle-down"/>
          </div>
          <div className="dropdown">
            <ol>
              {['ascending', 'descending'].map((option, i) => (
                <li
                  key={i}
                  className={this.props.sorting.size === option ? 'selected' : ''}
                  onClick={this.handleOptionClick.bind(this, 'size', option)}
                >
                  <p>{this.capitalizeFirstLetter(option)}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </section>
    );
  }

}



export default SortOptions;
