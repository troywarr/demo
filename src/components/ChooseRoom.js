import React from 'react';
import axios from 'axios';

// components
import OptionBar from './OptionBar';
import FilterSidebar from './FilterSidebar';
import SignInBar from './SignInBar';
import RoomResults from './RoomResults';

// styles
import './ChooseRoom.scss';



class ChooseRoom extends React.Component {

  state = {
    isLoading: false,
    hasLoaded: false,
    resultsCount: 0,
    queryParams: {},
    rooms: []
  };

  componentDidMount () {
    this.setState({ isLoading: true });
    axios.get('https://www.mocky.io/v2/5d101018300000ad034c9e1e?mocky-delay=2s').then(response => {
      this.setState({
        isLoading: false,
        hasLoaded: true,
        resultsCount: response.data.results.metadata.count,
        queryParams: response.data.queryParams,
        rooms: response.data.results.items
      });
    });
  }

  render () {
    const checkInDate = this.state.queryParams.checkInDate; // shortcut

    return (
      <section className="ChooseRoom">
        <div className="inner">
          <OptionBar/>
          <div className="filter-room">
            <FilterSidebar/>
            <div className="room">
              <SignInBar visible/>
              <RoomResults
                rooms={this.state.rooms}
                checkInDate={checkInDate}
                rangeLow={this.state.resultsCount > 0 ? 1 : 0}
                rangeHigh={Math.max(0, this.state.resultsCount)}
                resultsCount={this.state.resultsCount}
                isLoading={this.state.isLoading}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

}



export default ChooseRoom;
