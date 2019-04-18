import React, { Component } from 'react';

import DashPQNHover from '../Assets/dashmobile.png';
import Menu from '../components/Menu';

import Header from '../components/Header';

import './leitura.css';

class Leitura extends Component {
  render(){
    return(
      <div className="container_leitura">
        <Header />
        <Menu src={DashPQNHover} text="Leitura" />
        <div>
          {/* <div className="container_leitura-content">
            <div className="container_leitura-itens">
            <p className="container_leitura-titulo">Demanda Atual</p>
            <p className="container_leitura-paragrafo">40 kwh</p>
            </div>
            <div className="container_leitura-itens">
              <p className="container_leitura-titulo">Total de dispositivos conectados</p>
              <p className="container_leitura-paragrafo">22</p>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Leitura;