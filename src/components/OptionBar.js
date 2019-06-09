import React from 'react';

// styles
import './OptionBar.scss';



class OptionBar extends React.Component {

  render () {
    return (
      <div className="OptionBar">
        <div className="guests-box">
        </div>
        <div className="rooms-box">
        </div>
        <div className="beds-box">
        </div>
        <div className="dates-box">
        </div>
        <button>Search Dates</button>
      </div>
    );
  }

}



export default OptionBar;
