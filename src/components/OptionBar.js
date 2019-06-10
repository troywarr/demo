import React from 'react';

// styles
import './OptionBar.scss';



class OptionBar extends React.Component {

  render () {
    return (
      <section className="OptionBar">
        <div className="box box-guests">

        </div>
        <div className="box box-rooms">

        </div>
        <div className="box box-beds">

        </div>
        <div className="box box-dates">

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
