import React from 'react';

// components
import RoomCard from './RoomCard';

// styles
import './RoomResults.scss';



class RoomResults extends React.Component {

  render () {
    return (
      <div className="RoomResults">
        <h2>Room Results</h2>
        <div className="room-cards">
          {this.props.rooms.map(room =>
            <RoomCard
              key={room.id}
              room={room}
            />
          )}
        </div>
      </div>
    );
  }

}



export default RoomResults;
