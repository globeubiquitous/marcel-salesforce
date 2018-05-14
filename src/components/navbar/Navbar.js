import React, { Component } from 'react';
import { Icon, IconSettings } from '@salesforce/design-system-react';
import SideNav, { Nav, NavIcon } from 'react-sidenav';
import {
	Link,
	HashRouter,
} from "react-router-dom";
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
			<HashRouter>
			<IconSettings iconPath="/icons">
				<div className="side-navbar" style={{background: "#e9edf0", width: 50}}> 
					<SideNav highlightBgColor="#fff" defaultSelected="arrow">
						<Nav id='eye'>
							<NavIcon>
								<Link to="/eye">
									<Icon
										assistiveText="Eye"
										category="utility"
										name="voicemail_drop"
										size="small"
									/>
								</Link>
							</NavIcon>
						</Nav>
						<Nav id='chart'>
							<NavIcon>
								<Link to='/chart'>
									<Icon
										assistiveText="Chart"
										category="utility"
										name="chart"
										size="small"
									/>
								</Link>
							</NavIcon>
						</Nav>
						<Nav id='arrow'>
							<NavIcon>
							<Link to='/arrow'>
								<Icon
									assistiveText="Arrow"
									category="utility"
									name="dock_panel"
									size="small"
								/>
								</Link>
							</NavIcon>
						</Nav>
						
						<Nav id='star'>
							<NavIcon>
							<Link to="/star">
								<Icon
									assistiveText="Star"
									category="utility"
									name="favorite"
									size="small"
								/>
								</Link>
							</NavIcon>
						</Nav>
					</SideNav>
				</div>
			</IconSettings>
			</HashRouter>
		);
  }
}

export default Navbar;
