import React, { Component } from 'react';
import { Icon, IconSettings } from '@salesforce/design-system-react';
import PropTypes from 'prop-types';

import './ItemsPanel.css';

class ItemsPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    };
  }

  selectItem(item) {
    this.setState({
      selectedItem: item
    });
  }

  getActiveClassName(item) {
    const { selectedItem } = this.state;
    return (selectedItem && selectedItem.id === item.id) ? 'active' : '';
  }

  render() {
    const { items } = this.props;
    const { selectedItem } = this.state;
    let childrenList = null;
    const itemsList = items.map(item => (
      <div key={item.id} className="item">
        <div className={this.getActiveClassName(item)}>
          <span className="item-title">{item.title}</span>
          <a className="item-expander" onClick={() => {this.selectItem(item)}}>
            <IconSettings iconPath="/icons">
              <Icon
                category="utility"
                name="chevronright"
                size="small"
              />
            </IconSettings>
          </a>
        </div>
      </div>
    ));
    if (selectedItem) {
      if (selectedItem.children && selectedItem.children.length > 0) {
        childrenList = (<ItemsPanel items={selectedItem.children} />);
      }
    }

    return (
      <div className="items-panel">
        <div className="items-list list">
          {itemsList}
        </div>
        {childrenList &&
          <div className="children-list list">
            {childrenList}
          </div>
        }
      </div>
    );
  }
}

ItemsPanel.propTypes = {
  items: PropTypes.any
};

export default ItemsPanel;
