import React from 'react';

// components


// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faChevronLeft, faChevronRight, faUser, faBed } from '@fortawesome/free-solid-svg-icons';

// styles
import './RoomCard.scss';



class RoomCard extends React.Component {

  render () {
    return (
      <div className="RoomCard">
        <div className="image">
          <p className="inclusive-banner">Inclusive</p>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="icon-chevron icon-chevron-left"
          />
          <FontAwesomeIcon
            icon={faChevronRight}
            className="icon-chevron icon-chevron-right"
          />
        </div>
        <div className="info">
          <div className="type-rate">
            <p className="type">{this.props.room.type}</p>
            <div className="rate">
              <div className="discounted">
                <p className="amount">${this.props.room.rate.discounted.toFixed(2)}</p>
                <p className="period">
                  <span>per night</span>
                  <FontAwesomeIcon
                    icon={faInfoCircle}
                    className="icon-info-circle"
                  />
                </p>
              </div>
              <div className="full">
                <p className="amount">${Math.round(this.props.room.rate.full)}</p>
                <p className="discount-percentage">10% off</p>
              </div>
            </div>
          </div>
          <div className="capacity-size">
            <p className="capacity">
              <FontAwesomeIcon
                icon={faUser}
                className="icon-user"
              />
              <span>{this.props.room.capacity.min}-{this.props.room.capacity.max}</span>
            </p>
            <p className="size">{this.props.room.square_feet} ft<sup>2</sup></p>
          </div>
          <p className="beds">
            <FontAwesomeIcon
              icon={faBed}
              className="icon-bed"
            />
            <span>{this.props.room.bed_options}</span>
          </p>
          <div className="compare-select">
            <p className="compare">
              <input type="checkbox" id="compare-0"/>
              <label htmlFor="compare-0">Compare</label>
            </p>
            <button
              type="button"
              className="select"
            >Select Room</button>
          </div>
        </div>
      </div>
    );
  }

}



export default RoomCard;
