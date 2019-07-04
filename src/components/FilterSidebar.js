import React from 'react';
import classNames from 'classnames';

// components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconSearch from './icons/IconSearch';
import IconCaretDown from './icons/IconCaretDown';

// styles
import './FilterSidebar.scss';



class FilterSidebar extends React.Component {

  state = {
    filter1: {
      isOpen: false,
      option1IsChecked: false,
      option2IsChecked: false,
      option3IsChecked: false,
      option4IsChecked: false
    },
    filter2: {
      isOpen: false,
      option1IsChecked: false,
      option2IsChecked: false,
      option3IsChecked: false,
      option4IsChecked: false
    },
    filter3: {
      isOpen: false,
      option1IsChecked: false,
      option2IsChecked: false,
      option3IsChecked: false,
      option4IsChecked: false
    },
    filter4: {
      isOpen: false,
      option1IsChecked: false,
      option2IsChecked: false,
      option3IsChecked: false,
      option4IsChecked: false
    }
  };

  // toggle open state of individual filters
  toggleFilter = filterName => {
    this.setState(prevState => ({
      [filterName]: {
        ...prevState[filterName],
        isOpen: !prevState[filterName].isOpen // toggle boolean value
      }
    }));
  }

  // handle clicks on filter labels
  handleLabelClick = filterName => {
    this.toggleFilter(filterName);
  }

  // toggle checked state of individual filter options
  toggleOption = (filterName, optionName) => {
    this.setState(prevState => ({
      [filterName]: {
        ...prevState[filterName],
        [`${optionName}IsChecked`]: !prevState[filterName][`${optionName}IsChecked`] // toggle boolean value
      }
    }));
  }

  // handle clicks on filter option checkboxes
  handleOptionClick = (filterName, optionName) => {
    this.toggleOption(filterName, optionName);
  }

  render () {
    const filter1Class = classNames({
      filter: true,
      open: this.state.filter1.isOpen
    });
    const filter2Class = classNames({
      filter: true,
      open: this.state.filter2.isOpen
    });
    const filter3Class = classNames({
      filter: true,
      open: this.state.filter3.isOpen
    });
    const filter4Class = classNames({
      filter: true,
      open: this.state.filter4.isOpen
    });

    return (
      <section className="FilterSidebar">
        <h3>Narrow your results</h3>
        <div className="search">
          <p>I'm looking for a room with</p>
          <div className="search-field">
            <input type="text"/>
            <button type="submit">
              <IconSearch className="icon icon-search"/>
            </button>
          </div>
        </div>
        <div className="filters">
          <ul>

            {/* filter 1 (placeholder) */}
            <li className={filter1Class}>
              <div
                className="filter-label"
                onClick={this.handleLabelClick.bind(this, 'filter1')}
              >
                <p>Filter name</p>
                <div className="toggle">
                  <IconCaretDown className="icon icon-caret-down"/>
                </div>
              </div>
              <div className="filter-options">
                <ul>
                  {['option1', 'option2', 'option3', 'option4'].map((optionName, i) => (
                    <li
                      className="option"
                      key={i}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.filter1[`${optionName}IsChecked`]}
                            onChange={this.handleOptionClick.bind(this, 'filter1', optionName)}
                            value={optionName}
                          />
                        }
                        label="Option"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* filter 2 (placeholder) */}
            <li className={filter2Class}>
              <div
                className="filter-label"
                onClick={this.handleLabelClick.bind(this, 'filter2')}
              >
                <p>Filter name</p>
                <div className="toggle">
                  <IconCaretDown className="icon icon-caret-down"/>
                </div>
              </div>
              <div className="filter-options">
                <ul>
                  {['option1', 'option2', 'option3', 'option4'].map((optionName, i) => (
                    <li
                      className="option"
                      key={i}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.filter2[`${optionName}IsChecked`]}
                            onChange={this.handleOptionClick.bind(this, 'filter2', optionName)}
                            value={optionName}
                          />
                        }
                        label="Option"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* filter 3 (placeholder) */}
            <li className={filter3Class}>
              <div
                className="filter-label"
                onClick={this.handleLabelClick.bind(this, 'filter3')}
              >
                <p>Filter name</p>
                <div className="toggle">
                  <IconCaretDown className="icon icon-caret-down"/>
                </div>
              </div>
              <div className="filter-options">
                <ul>
                  {['option1', 'option2', 'option3', 'option4'].map((optionName, i) => (
                    <li
                      className="option"
                      key={i}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.filter3[`${optionName}IsChecked`]}
                            onChange={this.handleOptionClick.bind(this, 'filter3', optionName)}
                            value={optionName}
                          />
                        }
                        label="Option"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* filter 4 (placeholder) */}
            <li className={filter4Class}>
              <div
                className="filter-label"
                onClick={this.handleLabelClick.bind(this, 'filter4')}
              >
                <p>Filter name</p>
                <div className="toggle">
                  <IconCaretDown className="icon icon-caret-down"/>
                </div>
              </div>
              <div className="filter-options">
                <ul>
                  {['option1', 'option2', 'option3', 'option4'].map((optionName, i) => (
                    <li
                      className="option"
                      key={i}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={this.state.filter4[`${optionName}IsChecked`]}
                            onChange={this.handleOptionClick.bind(this, 'filter4', optionName)}
                            value={optionName}
                          />
                        }
                        label="Option"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </li>

          </ul>
        </div>
      </section>
    );
  }

}



export default FilterSidebar;
