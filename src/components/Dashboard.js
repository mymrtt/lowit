import React, { Component } from 'react';

import Filter from './Filter';

import GraficoConsumo from './GraficoConsumo';
import GraficoDemanda from './GraficoDemanda';

class Dashboard extends Component {
  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-conteudo">
          <div className="container_dashboard-info">
            <div className="container_info-items">
              <p className="container_info-title">Última atualização</p>
              {/* a atualizaçao*/}
              <p className="container_info-paragraph">11/02/2019</p>
              <p className="container_info-paragraph">09:52</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Temperatura</p>
              {/* os temperatura */}
              <p className="container_info-paragraph">19º</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Umidade</p>
              {/* a umidade */}
              <p className="container_info-paragraph">72%</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Dispositivos conectados</p>
              {/* os dispositivos */}
              <p className="container_info-paragraph">22</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Potência</p>
              {/* a potencia*/}
              <p className="container_info-paragraph">47,4 w</p>
            </div>
          </div>
        </div>

        <div className="container_graficos">
          <div className="container_graficos-consumoEdemanda">
            <div className="container_grafico-consumo">
              <div className="container_grafico-info">
                <div className="container_graficoInfo-items">
                  <p className="container_graficoInfo-title">Consumo atual (em Reais)</p>
                  {/* o consumo */}
                  <p className="container_graficoInfo-paragraph">R$ 45,36</p>
                </div>
                <div className="container_tabelaDispositivos-consumo">
                  <div className="tabela_dispositivos">
                    <h3 className="tabela_dispositivos-titulo">Selecione o Grupo/Dispositivo:</h3>
                    <Filter />
                  </div>
                </div>
              </div>
              <GraficoConsumo/>
            </div>
            <div className="container_grafico-demanda">
              <div className="container_grafico-info">
                <div className="container_graficoInfo-items">
                  <p className="container_graficoInfo-title">Demanda Atual</p>
                  {/* a demanda */}
                  <p className="container_graficoInfo-paragraph">2.999,65</p>
                </div>
                <div className="container_graficoInfo-items">
                  <p className="container_graficoInfo-title">Demanda Contratada</p>
                  {/* os dispositivos */}
                  <p className="container_graficoInfo-paragraph">3200</p>
                </div>
              </div>
              <GraficoDemanda/>
            </div>
          </div>
          <div className="container_tabelaDispositivos">
            <div className="tabela_dispositivos">
              <h3 className="tabela_dispositivos-titulo">Ligar ou Desligar Grupo/Dispositivo:</h3>
              {/* <Filter /> */}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;