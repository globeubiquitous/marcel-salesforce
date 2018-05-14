import React, { Component } from 'react';
import { PageHeader, Icon, IconSettings } from '@salesforce/design-system-react';

import './Header.css';

class Header extends Component {
  render() {
    const navRight = (
			<div className="header-right">
		    <div className="header-right-sub header-right-title">
          <div className="sub upper">
            <span>Version 1 (draft)</span>
          </div>
          <div className="sub bottom">
            <span>save as new version</span>
          </div>
        </div>
        <div className="header-right-sub header-right-comments">
          <div className="sub message-icon">
          	<IconSettings iconPath="/icons">
							<div className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
								<div className="slds-col--padded">
									<Icon
										assistiveText="comments"
										category="action"
										name="share_post"
										size="small"
									/>
								</div>
							</div>
						</IconSettings>
          </div>
          <div className="sub comments">
						<span>No comments</span>
					</div>
        </div>
				<div className="header-right-sub header-right-action">
					<div className="sub">
						<IconSettings iconPath="/icons">
							<div className="slds-grid slds-grid--pull-padded slds-grid--vertical-align-center">
								<div className="slds-col--padded">
									<Icon
										assistiveText="add"
										category="action"
										name="new"
										size="small"
									/>
								</div>
							</div>
						</IconSettings>
					</div>
				</div>
			</div>
		);
    return (
      <IconSettings iconPath="/icons">
				<PageHeader
					className="sl-header"
					navRight={navRight}
					iconAssistiveText="Back"
					iconCategory="utility"
					iconName="chevronleft"
					iconSize="small"
					title="Medware Health - Quote 18-456"
					truncate
					variant="objectHome"
				/>
			</IconSettings>
    );
  }
}

export default Header;
