import React, { Component } from 'react';
import Filter from './Filter';

import './dispositivoslateral.css';

class DispositivosLateral extends Component {
  render(){
    return(
      <div className="container_dispositivosLateral">
        <div className="container_tabelaDispositivos">
          <div className="tabela_dispositivos-lateral">
            <h3 className="tabela_dispositivos-title">Ligar ou Desligar Grupo/Dispositivo:</h3>
            <div className="filter">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DispositivosLateral;