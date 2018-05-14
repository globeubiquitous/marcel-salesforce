import React, { Component } from 'react';
import { CardEmpty, Card, CardFilter, ButtonGroup, Button, Icon, IconSettings } from '@salesforce/design-system-react';

import './PageNavbar.css';

const sampleItems = [
	{ name: 'Cloudhub' },
	{ name: 'Cloudhub + Anypoint Connectors' },
	{ name: 'Cloud City' },
];

class PageNavbar extends Component {
  render() {
    // const isEmpty = this.state.items.length === 0;
    return (
      <div className="product-navbar">
          <div className="catalog-navbar">
            <div className="catalog-label">
              <strong><span>Product catalog</span></strong>
            </div>
            <div className="btn-group">
              <div className="slds-button-group">
                <Button className="slds-button" label="Manual" />
                <Button className="slds-button" label="Recommendation" />
              </div>
            </div>
          </div>

          <div className="filter-navbar">
            <div className="filter-title">
              <span>Filter</span>
            </div>
            <div className="filter-icon">
              <IconSettings iconPath="/icons">
                <Icon
                  assistiveText="Filter"
                  category="utility"
                  name="tracker"
                  size="small"
                />
              </IconSettings>
            </div>
            <div className="filter-input">
              <IconSettings iconPath="/icons">
                <div className="slds-grid slds-grid--vertical">
                  {/* <Card
                    id="ExampleCard"
                    filter={
                      (!isEmpty || this.state.isFiltering) && (
                        <CardFilter onChange={this.handleFilterChange} />
                      )
                    }
                  >
                  </Card> */}
                </div>
			        </IconSettings>
            </div>				
          </div>

      </div>
    );
  }
}

export default PageNavbar;
