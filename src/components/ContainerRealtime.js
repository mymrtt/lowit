import React, { Component } from 'react';

import './ContainerRealtime.css';

const moment = require('moment')

class ContainerRealtime extends Component {
  constructor(props){
    super(props);

    this.state = {
      time: new Date().toLocaleString(),
      lastReadDate: '-', 
      lastReadHour: '-', 
      temperature: '-', 
      umidity: '-', 
      connectedDevices: '-', 
      power: '-' 
    };

  }

  async componentDidMount(){
    this.intervalID = setInterval(
      () => this.tick(),
      3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  async tick() {

    const apiRealtimeCall = await fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/realtime');
    const apiRealtimeJSON = await apiRealtimeCall.json();
    this.processResult(apiRealtimeJSON.data);
    this.setState({
      time: new Date().toLocaleString()
    });
  }

  processResult(dataset){
    if(dataset !== null && dataset != ''){
      var activeDate = moment(dataset.last_read).format('DD/MM/YY');
      var activeHour = moment(dataset.last_read).format('HH:mm:ss');
      var activeTemperature = dataset.temperature + " º";
      var activeUmidity = dataset.umidity + " %";
      var activeConnectedDevices = dataset.connected_devices;
      var activePower = dataset.power.toFixed(2) + " kW";

      this.setState({
        lastReadDate: activeDate, 
        lastReadHour: activeHour, 
        temperature: activeTemperature, 
        umidity: activeUmidity, 
        connectedDevices: activeConnectedDevices, 
        power: activePower 
      })
    }
  }
  
  render(){
    return(
      <div className="ContainerRealTime">
        <div className="ContainerRealTime-items">
          <h3 className="ContainerRealTime-title">Última Atualização</h3>
          <div className="ContainerRealTime-paragraphs--att">
            <p className="ContainerRealTime-paragraph">{this.state.lastReadDate}</p>
            <p className="ContainerRealTime-paragraph--hour">{this.state.lastReadHour}</p>
          </div>
        </div>
        <div className="ContainerRealTime-items">
          <h3 className="ContainerRealTime-title">Temperatura</h3>
          <p className="ContainerRealTime-paragraph">{this.state.temperature}</p>
        </div>
        <div className="ContainerRealTime-items">
          <h3 className="ContainerRealTime-title">Umidade</h3>
          <p className="ContainerRealTime-paragraph">{this.state.umidity}</p>
        </div>
        <div className="ContainerRealTime-items">
          <h3 className="ContainerRealTime-title">Dispositivos Conectados</h3>
          <p className="ContainerRealTime-paragraph">{this.state.connectedDevices}</p>
        </div>
        <div className="ContainerRealTime-items">
          <h3 className="ContainerRealTime-title">Potência</h3>
          <p className="ContainerRealTime-paragraph">{this.state.power}</p>
        </div>
      </div>
    )
  }
}

export default ContainerRealtime;