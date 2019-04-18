import React, { Component } from 'react';
import ContainerDemand from '../components/ContainerDemand';
import ContainerRealtime from '../components/ContainerRealtime';
import ContainerConsumption from '../components/ContainerConsumption';
import SideDevices from '../components/SideDevices';

import DashPQNHover from '../Assets/dashmobile.png';
import Menu from '../components/Menu';
import Header from '../components/Header';


import './dashboard.css';

class Dashboard extends Component {

  render(){
    return(
      <div className="Dashboard">
        <Header />
        <Menu src={DashPQNHover} text="Dashboard"/>
        <div className="container_dashboard">
          <div className="container_dashboard-content">
            <ContainerRealtime />
            <div className="container_graphics">
              <ContainerConsumption />
              <ContainerDemand />
            </div>
          </div>
          <SideDevices />
        </div>
      </div>
    )
  }
}

export default Dashboard;