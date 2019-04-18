import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container_app">
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
