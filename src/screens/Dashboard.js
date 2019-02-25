import React, { Component } from 'react';

import Switch from '../components/Switch';

import ConsumptionChart from '../components/ConsumptionChart';
import ContainerDemand from '../components/ContainerDemand';
import SideDevices from '../components/SideDevices';

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
          <div className="container_graphics">
            <div className="container_graphic-consumo">
              <div className="container_graphic-consumo--info">
                <div className="container_graphic-info--items">
                  <p className="container_graphic-info--title">Consumo atual (Em R$)</p>
                  <p className="container_graphic-info--paragraph">R$ 45,36</p>
                </div>
                <div className="container_table-devices--consumption">
                  <div className="table_consumption-devices">
                    <h3 className="table_devices-title">Selecione o Grupo/Dispositivo:</h3>
                    <div className="filter">
                      <Switch/>
                    </div>
                  </div>
                </div>
              </div>
              <ConsumptionChart />
            </div>
            <ContainerDemand />
          </div>
        </div>
        <SideDevices />
      </div>
    )
  }
}

export default Dashboard;