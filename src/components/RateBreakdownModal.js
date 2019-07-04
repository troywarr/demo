import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import moment from 'moment';

// components
import IconClose from './icons/IconClose.js';

// styles
import './RateBreakdownModal.scss';



function RateBreakdownModal(props) {

  const closeX = (
    <div
      className="close-x"
      onClick={props.toggle}
    >
      <IconClose className="icon icon-close"/>
    </div>
  );
  const rateBreakdown = props.room.rateBreakdown; // shortcut
  const showTaxesFeesSection = typeof rateBreakdown.resortFee !== 'undefined' ||
                               typeof rateBreakdown.occupancyTax !== 'undefined' ||
                               typeof rateBreakdown.countySalesTax !== 'undefined' ||
                               typeof rateBreakdown.stateTax !== 'undefined';

  return (
    <Modal
      isOpen={props.isOpen}
      toggle={props.toggle}
      className="RateBreakdownModal"
    >
      <ModalHeader
        toggle={props.toggle}
        close={closeX}
      >Rate Breakdown</ModalHeader>
      <ModalBody>

        {/* base rate section */}
        <div className="breakdown-section base">
          <table>
            <tbody>
              <tr className="main">
                <th>Room Type</th>
                <td></td>
              </tr>
              <tr className="extra">
                <td>{props.room.title}</td>
                <td></td>
              </tr>
              <tr className="main">
                <th>Rate Type</th>
                <td>USD ${props.amount.toFixed(2)}/ni</td>
              </tr>
              <tr className="extra">
                <td>
                  {props.isDiscounted ? 'Discounted' : 'Standard'} Rate
                  <br/>
                  {moment(props.checkInDate).format('dddd, MMMM D, YYYY')}
                </td>
                <td></td>
              </tr>
              <tr className="main">
                <th>Room Total</th>
                <td>USD ${rateBreakdown.roomTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* taxes & fees section */}
        {showTaxesFeesSection && (
          <div className="breakdown-section taxes-fees">
            <h6>Taxes and Fees</h6>
            <table>
              <tbody>
                {rateBreakdown.resortFee && (
                  <tr>
                    <th>Resort Fee</th>
                    <td>USD ${rateBreakdown.resortFee.toFixed(2)}</td>
                  </tr>
                )}
                {rateBreakdown.occupancyTax && (
                  <tr>
                    <th>Occupancy Tax</th>
                    <td>USD ${rateBreakdown.occupancyTax.toFixed(2)}</td>
                  </tr>
                )}
                {rateBreakdown.countySalesTax && (
                  <tr>
                    <th>County Sales Tax</th>
                    <td>USD ${rateBreakdown.countySalesTax.toFixed(2)}</td>
                  </tr>
                )}
                {rateBreakdown.stateTax && (
                  <tr>
                    <th>State Tax</th>
                    <td>USD ${rateBreakdown.stateTax.toFixed(2)}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* total due section */}
        <div className="breakdown-section due">
          <table>
            <tbody>
              <tr>
                <th>Due Now</th>
                <td>${rateBreakdown.dueNow.toFixed(2)}</td>
              </tr>
              <tr>
                <th>Due at the Resort</th>
                <td>${rateBreakdown.dueAtResort.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </div>

      </ModalBody>
    </Modal>
  );

}



export default RateBreakdownModal;
