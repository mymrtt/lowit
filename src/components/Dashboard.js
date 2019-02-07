import React, { Component } from 'react';

// import TabelaDispositivos from './TabelaDispositivos';

import GraficoConsumo from './GraficoConsumo';
import GraficoDemanda from './GraficoDemanda';

// import ListaTabela from './ListaTabela';
// import TabelaDispositivos from './TabelaDispositivos';

class Dashboard extends Component {
  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-consumoedemanda">
          <div className="container_dashboard-consumo">
            <div className="container_tabela">
              <div className="container_tabela-itens">
                <p className="container_tabela-titulo">Consumo atual (em Reais)</p>
                {/* o consumo */}
                <p className="container_tabela-paragrafo">R$ 45,36</p>
              </div>
              <div className="container_tabelaDispositivos-consumo">
                <div className="tabela_dispositivos">
                  {/* <TabelaDispositivos /> */}
                  <h3 className="tabela_dispositivos-titulo">selecione o grupo/dispositivos</h3>
                  <p>predio inteiro</p>
                  <p>1 andar</p>
                  <p>area de lazer</p>
                  <p>iluminaçao 2</p>
                </div>
              </div>
            </div>
              <GraficoConsumo/>
          </div>
          <div className="container_dashboard-demanda">
            <div className="container_tabela">
              <div className="container_tabela-itens">
                <p className="container_tabela-titulo">Demanda Atual</p>
                {/* a demanda */}
                <p className="container_tabela-paragrafo">40 kwh</p>
              </div>
              <div className="container_tabela-itens">
                <p className="container_tabela-titulo">Total de dispositivos conectados</p>
                {/* os dispositivos */}
                <p className="container_tabela-paragrafo">22</p>
              </div>
            </div>
            <GraficoDemanda/>
          </div>
        </div>
        <div className="container_tabelaDispositivos">
          <div className="tabela_dispositivos">
            {/* <TabelaDispositivos /> */}
            <h3 className="tabela_dispositivos-titulo">Ligar ou Desligar Grupo/Dispositivo:</h3>
            <p>predio inteiro</p>
            <p>1 andar</p>
            <p>area de lazer</p>
            <p>iluminaçao 2</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;