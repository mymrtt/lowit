import React, { Component } from 'react';
import ContainerDemand from '../components/ContainerDemand';
import ContainerRealtime from '../components/ContainerRealtime';
import ContainerConsumption from '../components/ContainerConsumption';
import SideDevices from '../components/SideDevices';

// import LowItIMG from '../Assets/lowitpqn.png';
// import DashPQNHover from '../Assets/dashpqnhover.png';
// import Menu from '../components/Menu';


import './dashboard.css';

class Dashboard extends Component {

  render(){
    return(
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
    )
  }
}

export default Dashboard;