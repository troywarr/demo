import React from 'react';

// components
import { Spinner } from 'reactstrap';

// styles
import './Loading.scss';



function Loading(props) {

  return (
    <section className="Loading">
      <div className="inner">
        <Spinner
          color="dark"
          className="Spinner"
        />
        <p className="message">{props.message}</p>
      </div>
    </section>
  );

}



export default Loading;
