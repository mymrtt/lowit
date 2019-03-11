import React, { Component } from 'react';
import axios from 'axios';

// import Switch from '../components/Switch';

import ContainerDemand from '../components/ContainerDemand';
import ContainerConsumption from '../components/ContainerConsumption';
import SideDevices from '../components/SideDevices';

import './dashboard.css';

class Dashboard extends Component {

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    try {
      const response = this.getApiData()
      console.log(response)
    }catch(err){
      console.log(err)
    }
  }

  getApiData = () => {
    axios({
      url: 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/realtime',
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
  }

  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-content">
          {/* <div id="datas"> */}
            <div className="container_dashboard-info">
              <div className="container_info-items">
                <h3 className="container_info-title">Última atualização</h3>
                <div className="container_info-paragraphs--att">
                  <p className="container_info-paragraph">11/02/2019</p>
                  <p className="container_info-paragraph--hour">09:52</p>
                </div>
              </div>
              <div className="container_info-items">
                <h3 className="container_info-title">Temperatura</h3>
                <p className="container_info-paragraph">19º</p>
              </div>
              <div className="container_info-items">
                <h3 className="container_info-title">Umidade</h3>
                <p className="container_info-paragraph">72%</p>
              </div>
              <div className="container_info-items">
                <h3 className="container_info-title">Dispositivos conectados</h3>
                <p className="container_info-paragraph">22</p>
              </div>
              <div className="container_info-items">
                <h3 className="container_info-title">Potência</h3>
                <p className="container_info-paragraph">47,4 w</p>
              </div>
            </div>
          {/* </div> */}
          <div className="container_graphics">
            <ContainerConsumption />
            <ContainerDemand />
          </div>
        </div>
        <SideDevices />
      </div>
    )
  }
}

export default Dashboard;