import React from 'react';

// components
import SortOptions from './SortOptions';
import Loading from './Loading';
import RoomCard from './RoomCard';

// styles
import './RoomResults.scss';



class RoomResults extends React.Component {

  state = {
    sorting: {
      price: 'descending',
      size: 'descending'
    }
  };

  // handle clicks on sort options
  handleSortOptionClick = (selectorName, optionValue) => {
    this.setState(prevState => ({
      sorting: {
        ...prevState.sorting,
        [selectorName]: optionValue
      }
    }));
  }

  render () {
    return (
      <section className="RoomResults">
        <div className="title-filters-sorting">
          <h2>Room Results</h2>
          {!this.props.isLoading && (
            <div className="filters">
              <p>Showing {this.props.rangeLow}-{this.props.rangeHigh} of {this.props.resultsCount} Results</p>
            </div>
          )}
          {!this.props.isLoading && (
            <div className="sorting">
              <SortOptions
                handleSortOptionClick={this.handleSortOptionClick}
                sorting={this.state.sorting}
              />
            </div>
          )}
        </div>
        {this.props.isLoading ? (
          <Loading message="Loading..."/>
        ) : (
          <div className="room-cards">
            {this.props.rooms.map((room, i) =>
              <RoomCard
                key={i}
                room={room}
                checkInDate={this.props.checkInDate}
              />
            )}
          </div>
        )}
      </section>
    );
  }

}



export default RoomResults;
