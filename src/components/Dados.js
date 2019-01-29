import React, { Component } from 'react';

class Dados extends Component {
  render(){
    return(
      <div className="container_dados">
        <div className="container_dados-itens">
          <p className="container_dados-titulo">Grupo</p>
          <p className="">Exemplo 1</p>
        </div>
        <div className="container_dados-itens">
          <p className="container_dados-titulo">Classe</p>
          <p className="">Exemplo 2</p>
        </div>
        <div className="container_dados-itens">
          <p className="container_dados-titulo">Sub-Grupo</p>
          <p className="">Exemplo 3</p>
        </div>
        <div className="container_dados-itens">
          <p className="container_dados-titulo">Sub-Classe</p>
          <p className="">Exemplo 4</p>
        </div>
      </div>
    );
  }
}

export default Dados;