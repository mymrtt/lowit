import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Routes from './Routes';
import Menu from './Menu';


import Header from '../components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container_app">
          <Header />
          <Menu/>
          <Routes/>
          {/* <div className="container_conteudo"> */}
          <div>
            <div>
              <a href="/Leitura" />
            </div>
            <div>
              <a href="/Dashboard" />
            </div>
            <div>
              <a href="/Dados" />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
