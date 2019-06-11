import React from 'react';

// components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconCaretLeft from './icons/IconCaretLeft';
import IconCaretRight from './icons/IconCaretRight';
import IconInfo from './icons/IconInfo';
import IconPerson from './icons/IconPerson';
import IconBed from './icons/IconBed';

// styles
import './RoomCard.scss';



class RoomCard extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      compare: false
    };
  }

  handleChange = field => {
    if (field === 'compare') {
      this.setState(prevState => ({
        compare: !prevState.compare
      }));
    }
  }

  render () {
    return (
      <div className="RoomCard">
        <div className="image">
          <p className="inclusive-banner">Inclusive</p>
          <div class="nav nav-left">
            <IconCaretLeft className="icon-caret icon-caret-left"/>
          </div>
          <div class="nav nav-right">
            <IconCaretRight className="icon-caret icon-caret-right"/>
          </div>
        </div>
        <div className="info">
          <div className="type-rate">
            <p className="type">{this.props.room.type}</p>
            <div className="rate">
              <div className="discounted">
                <p className="amount">${this.props.room.rate.discounted.toFixed(2)}</p>
                <p className="period">
                  <span>per night</span>
                  <IconInfo className="icon-info"/>
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
              <IconPerson className="icon-person"/>
              <span>{this.props.room.capacity.min}-{this.props.room.capacity.max}</span>
            </p>
            <p className="size">{this.props.room.square_feet} ft<sup>2</sup></p>
          </div>
          <p className="beds">
            <IconBed className="icon-bed"/>
            <span>{this.props.room.bed_options}</span>
          </p>
          <div className="compare-select">
            <p className="compare">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.compare}
                    onChange={this.handleChange.bind(this, 'compare')}
                    value="compare"
                  />
                }
                label="Compare"
              />
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
