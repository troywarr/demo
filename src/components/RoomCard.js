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
    const isDiscounted = !!this.props.room.rates.discount;
    const imageStyle = {
      backgroundImage: `url(${this.props.room.imageUrls[0]})`
    };
    return (
      <div className="RoomCard">
        <div className="image" style={imageStyle}>
          {this.props.room.ribbonText && (
            <div className="ribbon">
              <p>{this.props.room.ribbonText}</p>
            </div>
          )}
          <div className="nav nav-left">
            <IconCaretLeft className="icon-caret icon-caret-left"/>
          </div>
          <div className="nav nav-right">
            <IconCaretRight className="icon-caret icon-caret-right"/>
          </div>
        </div>
        <div className="info">
          <div className="type-rate">
            <p className="type">{this.props.room.title}</p>
            <div className="rate">
              <div className="primary">
                <p className="amount">${isDiscounted ? this.props.room.rates.discountedRate.toFixed(2) : this.props.room.rates.originalRate.toFixed(2)}</p>
                <p className="period">
                  <span>per night</span>
                  <IconInfo className="icon-info"/>
                </p>
              </div>
              {isDiscounted && (
                <div className="secondary">
                  <p className="amount">${Math.round(this.props.room.rates.originalRate.toFixed(2))}</p>
                  <p className="marketing-text">{this.props.room.rates.marketingText}</p>
                </div>
              )}
            </div>
          </div>
          <div className="capacity-size">
            <p className="capacity">
              <IconPerson className="icon-person"/>
              <span>1-2</span>
            </p>
            <p className="size">300 ft<sup>2</sup></p>
          </div>
          <p className="beds">
            <IconBed className="icon-bed"/>
            <span>Queen or 2 doubles</span>
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
