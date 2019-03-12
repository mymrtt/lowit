import React, { Component } from 'react';

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
      var activePower = dataset.power + " w";

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
        <div className="container_dashboard-info">
        <div className="container_info-items">
          <h3 className="container_info-title">Última atualização</h3>
          <div className="container_info-paragraphs--att">
            <p className="container_info-paragraph">{this.state.lastReadDate}</p>
            <p className="container_info-paragraph--hour">{this.state.lastReadHour}</p>
          </div>
        </div>
        <div className="container_info-items">
          <h3 className="container_info-title">Temperatura</h3>
          <p className="container_info-paragraph">{this.state.temperature}</p>
        </div>
        <div className="container_info-items">
          <h3 className="container_info-title">Umidade</h3>
          <p className="container_info-paragraph">{this.state.umidity}</p>
        </div>
        <div className="container_info-items">
          <h3 className="container_info-title">Dispositivos conectados</h3>
          <p className="container_info-paragraph">{this.state.connectedDevices}</p>
        </div>
        <div className="container_info-items">
          <h3 className="container_info-title">Potência</h3>
          <p className="container_info-paragraph">{this.state.power}</p>
        </div>
      </div>
    )
  }
}

export default ContainerRealtime;