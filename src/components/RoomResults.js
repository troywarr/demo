import React from 'react';

// components
import RoomCard from './RoomCard';

// styles
import './RoomResults.scss';



class RoomResults extends React.Component {

  render () {
    return (
      <section className="RoomResults">
        <div className="results-filters">
          <h2>Room Results</h2>
          <div className="filters">
            <p>Showing 1-{this.props.resultsQty} of {this.props.resultsQty} Results</p>
          </div>
        </div>
        <div className="room-cards">
          {this.props.rooms.map(room =>
            <RoomCard
              key={room.id}
              room={room}
            />
          )}
        </div>
      </section>
    );
  }

}



export default RoomResults;
