import React, { Component } from 'react';

import './dados.css';

class Dados extends Component {
  render(){
    return(
      <div className="container_dados">
        <div className="container_dados-row">
          <div className="container_dados-itens">
            <p className="container_dados-titulo">Grupo</p>
            <p className="container_dados-paragrafo">Exemplo 1</p>
          </div>
          <div className="container_dados-itens">
            <p className="container_dados-titulo">Classe</p>
            <p className="container_dados-paragrafo">Exemplo 2</p>
          </div>
        </div>
        <div className="container_dados-row">
          <div className="container_dados-itens">
            <p className="container_dados-titulo">Sub-Grupo</p>
            <p className="container_dados-paragrafo">Exemplo 3</p>
          </div>
          <div className="container_dados-itens">
            <p className="container_dados-titulo">Sub-Classe</p>
            <p className="container_dados-paragrafo">Exemplo 4</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Dados;