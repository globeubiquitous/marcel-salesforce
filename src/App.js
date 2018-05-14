import React, { Component } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/main-content/MainContent';
import PageNavbar from './components/page-navbar/PageNavbar';
import Eye from './components/eye/Eye';
import Chart from './components/chart/Chart';
import Star from './components/star/Star';
import {
  Route,
  Redirect,
  HashRouter
} from "react-router-dom";
import { contentSeed } from './Content'

import './App.css';

class App extends Component {
  render() {
    return (
      <HashRouter>
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
            <Route exact path="/" render={() => <Redirect to={{ pathname: '/arrow' }} />} />
            <Route path="/eye" component={Eye}/>
            <Route path="/chart" component={Chart}/>
            <Route path="/arrow" render={() => <MainContent content={contentSeed} />} />
            <Route path="/star" component={Star}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
