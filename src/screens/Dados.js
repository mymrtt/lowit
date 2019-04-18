import React, { Component } from 'react';

import DashPQNHover from '../Assets/dashmobile.png';

import Menu from '../components/Menu';
import Header from '../components/Header';

import './dados.css';

class Dados extends Component {
  render(){
    return(
      <div className="container_dados">
        <Header />
        <Menu src={DashPQNHover} text="Dados"/>
        <div className="container_dados-content">
          <div className="container_dados-row">
            <div className="container_dados-items">
              <p className="container_dados-title">Grupo</p>
              <p className="container_dados-paragraph">Exemplo 1</p>
            </div>
            <div className="container_dados-items">
              <p className="container_dados-title">Classe</p>
              <p className="container_dados-paragraph">Exemplo 2</p>
            </div>
          </div>
          <div className="container_dados-row">
            <div className="container_dados-items">
              <p className="container_dados-title">Sub-Grupo</p>
              <p className="container_dados-paragraph">Exemplo 3</p>
            </div>
            <div className="container_dados-items">
              <p className="container_dados-title">Sub-Classe</p>
              <p className="container_dados-paragraph">Exemplo 4</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dados;