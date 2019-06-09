import React from 'react';

// components
import OptionBar from './OptionBar';
import NarrowResults from './NarrowResults';
import RoomResults from './RoomResults';

// styles
import './ChooseRoom.scss';



class ChooseRoom extends React.Component {

  constructor (props) {
    super(props);
    this.rooms = [
      {
        id: 0,
        inclusive: true,
        type: 'Villa King',
        rate: {
          discounted: 179.33,
          full: 199.26
        },
        occupants: {
          min: 1,
          max: 2
        },
        square_feet: 301,
        bed_options: 'Queen or 2 doubles'
      },
      {
        id: 1,
        inclusive: true,
        type: 'Villa Double',
        rate: {
          discounted: 186,
          full: 206.67
        },
        occupants: {
          min: 1,
          max: 2
        },
        square_feet: 301,
        bed_options: 'Queen or 2 doubles'
      },
      {
        id: 2,
        inclusive: true,
        type: 'Villa Double w/ Living Room',
        rate: {
          discounted: 417.41,
          full: 463.79
        },
        occupants: {
          min: 1,
          max: 2
        },
        square_feet: 301,
        bed_options: 'Queen or 2 doubles'
      },
      {
        id: 3,
        inclusive: false,
        type: 'Villa King',
        rate: {
          discounted: 179.33,
          full: 199.26
        },
        occupants: {
          min: 1,
          max: 2
        },
        square_feet: 301,
        bed_options: 'Queen or 2 doubles'
      },
      {
        id: 4,
        inclusive: true,
        type: 'Villa Double',
        rate: {
          discounted: 186,
          full: 206.67
        },
        occupants: {
          min: 1,
          max: 2
        },
        square_feet: 301,
        bed_options: 'Queen or 2 doubles'
      }
    ];
  }

  render () {
    return (
      <div className="ChooseRoom">
        <OptionBar/>
        <NarrowResults/>
        <RoomResults rooms={this.rooms}/>
      </div>
    );
  }

}



export default ChooseRoom;
