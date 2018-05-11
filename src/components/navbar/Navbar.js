import React, { Component } from 'react';
import { Icon, IconSettings } from '@salesforce/design-system-react';
import SideNav, { Nav, NavIcon } from 'react-sidenav';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
			<IconSettings iconPath="/icons">
				<div style={{background: "#e9edf0", width: 50}}> 
					<SideNav highlightBgColor="#fff" defaultSelected="arrow">
							<Nav id='eye'>
								<NavIcon>
									<Icon
										assistiveText="Eye"
										category="utility"
										name="voicemail_drop"
										size="small"
									/>
								</NavIcon>
							</Nav>
							<Nav id='chart'>
								<NavIcon>
									<Icon
										assistiveText="Chart"
										category="utility"
										name="chart"
										size="small"
									/>
								</NavIcon>
							</Nav>
							<Nav id='arrow'>
								<NavIcon>
									<Icon
										assistiveText="Arrow"
										category="utility"
										name="dock_panel"
										size="small"
									/>
								</NavIcon>
							</Nav>
							<Nav id='star'>
								<NavIcon>
									<Icon
										assistiveText="Star"
										category="utility"
										name="favorite"
										size="small"
									/>
								</NavIcon>
							</Nav>
					</SideNav>
				</div>
			</IconSettings>
		);
  }
}

export default Navbar;
