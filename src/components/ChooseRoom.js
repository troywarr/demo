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
    axios.get('http://www.mocky.io/v2/5d0018533200007a00eacb14').then(response => {
      console.log(response);
      this.setState({
        rooms: response.data.results.items
      });
    });
  }

  render () {
    return (
      <section className="ChooseRoom">
        <div className="inner">
          <OptionBar/>
          <div className="narrow-room">
            <NarrowResults/>
            <RoomResults
              rooms={this.state.rooms}
              resultsQty={this.state.rooms.length}
            />
          </div>
        </div>
      </section>
    );
  }

}



export default ChooseRoom;
