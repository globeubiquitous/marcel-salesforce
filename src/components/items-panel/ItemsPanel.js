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
      <div key={item.id} className="item-wrapper">
        <div className={this.getActiveClassName(item)}>
          <div className="item">
            <div className="left-sub sub">
              {item.price && 
              <div>
              {/* <input type="text" /> */}
                <fieldset className="slds-form-element">
                  <div className="slds-form-element__control">
                    <span className="slds-radio">
                      <input type="radio" id={item.id} name="options" value="radio-23" onClick={() => {this.selectItem(item)}} />
                      <label className="slds-radio__label" htmlFor={item.id}>
                        <span className="slds-radio_faux"></span>
                        <span className="slds-form-element__label item-title-service"><strong>{item.title}</strong></span>
                      </label>
                    </span>
                  </div>
                </fieldset>
                </div>
              }
              {!item.price &&
                <span className="item-title">{item.title}</span>
              }
            </div>
          </div>
          <div className="right-sub sub">
            {item.price ? (
              <div>
                <span className="right-sub-price"><strong>{item.price}</strong></span>
                <a className="add-icon">
                  <IconSettings iconPath="/icons">
                    <Icon
                      category="utility"
                      name="add"
                      size="xx-small"
                    />
                  </IconSettings>
                </a>
              </div>
            ) : (
              <div className="item">
                <a className="item-expander" onClick={() => {this.selectItem(item)}}>
                  <IconSettings iconPath="/icons">
                    <Icon
                      category="utility"
                      name="chevronright"
                      size="x-small"
                    />
                  </IconSettings>
                </a>
              </div>
            )
            }
          </div>
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
