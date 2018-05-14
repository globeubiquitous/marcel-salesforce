import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Chart.css';

class Chart extends Component {
  render() {
    return(
      <div className="mytext">
        <p>Hi <strong>Charles</strong>, This is second page. Please provide mockup. Thanks.</p>
      </div>
    )
  }
}

export default withRouter(Chart);
