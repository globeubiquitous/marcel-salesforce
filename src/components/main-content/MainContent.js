import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemsPanel from '../items-panel/ItemsPanel';

import './MainContent.css';

class MainContent extends Component {
  render() {
    const { content } = this.props;

    return (
      <div className="main-content-items">
        <ItemsPanel items={content} />
      </div>
    );
  }
}

MainContent.propTypes = {
  content: PropTypes.any
};

export default MainContent;
