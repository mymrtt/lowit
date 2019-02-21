import React, { Component } from 'react';

import Filter from './Filter';
import Switch from './Switch';

import GraficoConsumo from './GraficoConsumo';
import GraficoDemanda from './GraficoDemanda';

import ButtonsGrafico from './ButtonsGrafico'
import DemandaAtual from './DemandaAtual';
import DemandaContratada from './DemandaContratada';


class Dashboard extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-conteudo">
          <div className="container_dashboard-info">
            <div className="container_info-items">
              <p className="container_info-title">Última atualização</p>
              <p className="container_info-paragraph">11/02/2019 09:52</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Temperatura</p>
              <p className="container_info-paragraph">19º</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Umidade</p>
              <p className="container_info-paragraph">72%</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Dispositivos conectados</p>
              <p className="container_info-paragraph">22</p>
            </div>
            <div className="container_info-items">
              <p className="container_info-title">Potência</p>
              <p className="container_info-paragraph">47,4 w</p>
            </div>
          </div>
          <div className="container_graficos">
            <div className="container_grafico-consumo">
              <div className="container_graficoConsumo-info">
                <div className="container_graficoInfo-items">
                  <p className="container_graficoInfo-title">Consumo atual (Em R$)</p>
                  <p className="container_graficoInfo-paragraph">R$ 45,36</p>
                </div>
                <div className="container_tabelaDispositivos-consumo">
                  <div className="tabela_consumo-dispositivos">
                    <h3 className="tabela_dispositivos-titulo">Selecione o Grupo/Dispositivo:</h3>
                    <div className="filter">
                      <Switch/>
                    </div>
                  </div>
                </div>
              </div>
              <GraficoConsumo/>
            </div>
            <div className="container_grafico-demanda">
              <div className="container_buttonsGrafico-demanda">
                <div className="container_buttons variacao_btns-demanda">
                  <ButtonsGrafico value="Hora" option='hour' backgroundColor='Grey'/>
                  <ButtonsGrafico value="Dia" option='day' backgroundColor='Grey'/>
                  <ButtonsGrafico value="Mês" option='month' backgroundColor='Grey'/>
                  <ButtonsGrafico value="Ano" option='year' backgroundColor='Grey'/>
                </div>
              </div>
              <div className="container_demanda-conteudo">
                <div className="container_graficoDemanda-info">
                  <DemandaAtual />
                  <DemandaContratada />
                </div>
                <GraficoDemanda/>
              </div>
            </div>
          </div>
        </div>
        <div className="container_dispositivosLateral">
          <div className="container_tabelaDispositivos">
            <div className="tabela_dispositivos-lateral">
              <h3 className="tabela_dispositivos-titulo">Ligar ou Desligar Grupo/Dispositivo:</h3>
              <div className="filter">
                <Filter />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;