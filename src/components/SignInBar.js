import React from 'react';

// components
import IconProfile from './icons/IconProfile.js';
import IconClose from './icons/IconClose.js';

// styles
import './SignInBar.scss';



class SignInBar extends React.Component {

  state = {
    isEnabled: true
  };

  onCloseClick = () => {
    this.setState(prevState => ({ isEnabled: !prevState.isEnabled }));
  }

  render () {
    if (this.props.visible && this.state.isEnabled) {
      return (
        <section className="SignInBar">
          <p className="message">
            <IconProfile className="icon icon-profile"/>
            <span>Sign in to unlock member rates on your stay!</span>
          </p>
          <p className="link">
            <a href="/">Sign in</a>
          </p>
          <div
            className="close-x"
            onClick={this.onCloseClick}
          >
            <IconClose className="icon icon-close"/>
          </div>
        </section>
      );
    } else {
      return null;
    }
  }

}



export default SignInBar;
