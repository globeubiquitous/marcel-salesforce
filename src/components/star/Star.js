import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Star.css';

class Star extends Component {
  render() {
    return(
      <div className="mytext">
        <p>Hi Charles, This is fourth page. Please provide mockup. Thanks.</p>
      </div>
    )
  }
}

export default withRouter(Star);
