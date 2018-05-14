import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Eye.scss';

class Eye extends Component {
  render() {
    return(
      <div className="mytext">
        <p>Hi Charles, This is first page. Please provide mockup. Thanks.</p>
      </div>
    )
  }
}

export default withRouter(Eye);
