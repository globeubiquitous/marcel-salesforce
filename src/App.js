import React, { Component } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/main-content/MainContent';
import PageNavbar from './components/page-navbar/PageNavbar';
import { contentSeed } from './Content'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
					<Header />
        </header>
        <div className="navbar">
					<Navbar />
				</div>
        <div className="page-navbar">
					<PageNavbar />
				</div>
				<div className="main-content">
				  <MainContent content={contentSeed} />
				</div>
      </div>
    );
  }
}

export default App;
