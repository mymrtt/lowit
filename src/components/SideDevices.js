import React, { Component } from 'react';
import Filter from './Filter';

import './sidedevices.css';

class SideDevices extends Component {
  render(){
    return(
      <div className="container_devices-side">
        <div className="container_table-devices">
          <div className="table_devices-side-content">
            <h3 className="table_devices-title">Ligar ou Desligar Grupo/Dispositivo:</h3>
            <div className="filter">
              <Filter />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideDevices;