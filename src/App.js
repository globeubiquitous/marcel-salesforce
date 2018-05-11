import React, { Component } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import MainContent from './components/main-content/MainContent';

import './App.css';

const contentSeed = [
  {
    id: 'products',
    title: 'Products',
    children: [
      {
        id: 'productCategoryA',
        title: 'Product Category A'
      }, {
        id: 'productCategoryB',
        title: 'Product Category B'
      }
    ]
  }, {
    id: 'parts',
    title: 'Parts',
    children: [
      {
        id: 'partCategoryA',
        title: 'Part Category A'
      }, {
        id: 'partCategoryB',
        title: 'Part Category B'
      }
    ]
  }
];

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
				<div className="main-content">
				  <MainContent content={contentSeed} />
				</div>
      </div>
    );
  }
}

export default App;
