import React from 'react';
import axios from 'axios';

// components
import OptionBar from './OptionBar';
import NarrowResults from './NarrowResults';
import RoomResults from './RoomResults';

// styles
import './ChooseRoom.scss';



class ChooseRoom extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      rooms: []
    };
  }

  componentDidMount () {
    axios.get('http://www.mocky.io/v2/5cfd757d3200007e00ccd521').then(response => {
      console.log(response);
      this.setState({
        rooms: response.data.rooms
      });
    });
  }

  render () {
    return (
      <div className="ChooseRoom">
        <OptionBar/>
        <NarrowResults/>
        <RoomResults rooms={this.state.rooms}/>
      </div>
    );
  }

}



export default ChooseRoom;
