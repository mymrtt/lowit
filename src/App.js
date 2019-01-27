import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import Dispositivos from './components/Dispositivos';


class App extends Component {
  render() {
    return (
      <div className="container_conteudo">
        <Header />
        <div className="container_infos">
          <div className="">
            <p>Consumo atual</p>
            {/* o consumo */}
          </div>
          <div className="">
            <p>Demanda atual</p>
            {/* a demanda */}
          </div>
          <div className="">
            <p>Dispositivos Conectados</p>
          </div>
        </div>
        <div className="">
          <h2>Monitoramento de consumo elétrico por hora</h2>
          <div>
            <div>
              <Dispositivos />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
