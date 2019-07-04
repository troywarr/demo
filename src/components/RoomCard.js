import React from 'react';

// components
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconCaretLeft from './icons/IconCaretLeft.js';
import IconCaretRight from './icons/IconCaretRight.js';
import IconInfo from './icons/IconInfo.js';
import IconPerson from './icons/IconPerson.js';
import IconBed from './icons/IconBed.js';
import RateBreakdownModal from './RateBreakdownModal';

// styles
import './RoomCard.scss';



class RoomCard extends React.Component {

  state = {
    compare: false,
    modalIsOpen: false
  };

  // toggle modal open/close state
  toggleModal = () => {
    this.setState(prevState => ({
      modalIsOpen: !prevState.modalIsOpen
    }));
  }

  // handle clicks on the primary room rate
  handlePrimaryRateClick = () => {
    this.toggleModal();
  }

  // handle clicks on the "Compare" checkbox
  handleCompareChange = field => {
    if (field === 'compare') {
      this.setState(prevState => ({
        compare: !prevState.compare
      }));
    }
  }

  render () {
    const isDiscounted = !!this.props.room.rates.discount;
    const amount = isDiscounted ? this.props.room.rates.discountedRate : this.props.room.rates.originalRate;
    const imageStyle = {
      backgroundImage: `url(${this.props.room.imageUrls[0]})`
    };

    return (
      <>

        {/* room card */}
        <section className="RoomCard">
          <div className="image" style={imageStyle}>
            {this.props.room.ribbonText && (
              <div className="ribbon">
                <p>{this.props.room.ribbonText}</p>
              </div>
            )}
            <div className="nav nav-left">
              <IconCaretLeft className="icon icon-caret icon-caret-left"/>
            </div>
            <div className="nav nav-right">
              <IconCaretRight className="icon icon-caret icon-caret-right"/>
            </div>
          </div>
          <div className="info">
            <div className="type-rate">
              <p className="type">{this.props.room.title}</p>
              <div className="rate">
                <div
                  className="primary"
                  onClick={this.handlePrimaryRateClick.bind(this, this.props.room)}
                >
                  <p className="amount">${amount.toFixed(2)}</p>
                  <p className="period">
                    <span>per night</span>
                    <IconInfo className="icon icon-info"/>
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

            {/* TODO: populate this from Room Search Results API data (design pending) */}
            <div className="capacity-size">
              <p className="capacity">
                <IconPerson className="icon icon-person"/>
                <span>1-2</span>
              </p>
              <p className="size">
                300 ft<sup>2</sup>
              </p>
            </div>

            {/* TODO: populate this from Room Search Results API data (design pending) */}
            <p className="beds">
              <IconBed className="icon icon-bed"/>
              <span>Queen or 2 doubles</span>
            </p>

            <div className="compare-select">
              <p className="compare">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={this.state.compare}
                      onChange={this.handleCompareChange.bind(this, 'compare')}
                      value="compare"
                    />
                  }
                  label="Compare"
                />
              </p>
              <button
                type="button"
                className="select"
              >Select</button>
            </div>
          </div>
        </section>

        {/* rate breakdown modal */}
        <RateBreakdownModal
          isOpen={this.state.modalIsOpen}
          toggle={this.toggleModal}
          room={this.props.room}
          isDiscounted={isDiscounted}
          amount={amount}
          checkInDate={this.props.checkInDate}
        />

      </>
    );
  }

}



export default RoomCard;
