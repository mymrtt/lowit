import React, { Component } from 'react';

class Leitura extends Component {
  render(){
    return(
      <div className="container_leitura">
        <div className="container_leitura-itens">
          <p className="container_leitura-titulo">Demanda Atual</p>
          {/* a demanda */}
          <p className="container_leitura-paragrafo">40 kwh</p>
        </div>
        <div className="container_leitura-itens">
          <p className="container_leitura-titulo">Consumo atual (em Reais)</p>
          {/* o consumo */}
          <p className="container_leitura-paragrafo">R$ 45,36</p>
        </div>
        <div className="container_leitura-itens">
          <p className="container_leitura-titulo">Total de dispositivos conectados</p>
          {/* os dispositivos */}
          <p className="container_leitura-paragrafo">22</p>
        </div>
      </div>
    );
  }
}

export default Leitura;