import React, { Component } from 'react';

import Switch from './Switch';

import GraficoConsumo from './GraficoConsumo';
import ContainerDemanda from './ContainerDemanda';
import DispositivosLateral from './DispositivosLateral';

import './dashboard.css';

class Dashboard extends Component {
  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-content">
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
              <div className="container_grafico-consumo--info">
                <div className="container_grafico-info--items">
                  <p className="container_grafico-info--title">Consumo atual (Em R$)</p>
                  <p className="container_grafico-info--paragraph">R$ 45,36</p>
                </div>
                <div className="container_tabela-dispositivos--consumo">
                  <div className="tabela_consumo-dispositivos">
                    <h3 className="tabela_dispositivos-title">Selecione o Grupo/Dispositivo:</h3>
                    <div className="filter">
                      <Switch/>
                    </div>
                  </div>
                </div>
              </div>
              <GraficoConsumo/>
            </div>
            <ContainerDemanda />
          </div>
        </div>
        <DispositivosLateral />
      </div>
    )
  }
}

export default Dashboard;