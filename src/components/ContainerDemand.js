import React, { Component } from 'react';

import ButtonsGraphic from './ButtonsGraphic';
import DemandChart from './DemandChart';
import CurrentDemand from './CurrentDemand';
import ContractedDemand from './ContractedDemand';

import './containerdemand.css';

class ContainerDemand extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartFilterDemand: 'hour', 
    };

    this.handleHour = this.handleHour.bind(this);
    this.handleDay = this.handleDay.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
  }

  async componentDidMount(){

    this.intervalID = setInterval(
      () => this.tick(),
      60000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  async tick() {
    this.setState({
      time: new Date().toLocaleString()
    });
    console.log('DEMANDA', 'Demanda Atualizada');
  }

  handleHour = (event) => {
    console.log("hour");
    this.setState({
      chartFilterDemand: 'hour'
    })
  }

  handleDay = (event) => {
    console.log("day");
    this.setState({
      chartFilterDemand: 'day'
    })
  }

  handleMonth = (event) => {
    console.log("month");
    this.setState({
      chartFilterDemand: 'month'
    })
  }

  handleYear = (event) => {
    console.log("year");
    this.setState({
      chartFilterDemand: 'year'
    })
  }

  render(){
    return(
      <div className="ContainerDemand">
        <div className="container_demand-content">
          <div className="container_demand-content--info">
            <CurrentDemand />
            <ContractedDemand />
          </div>
          <div className="container_demand-content--chart">
            <div className="container_demand-content--buttons">
              <div className="container_buttons variation_btns-demand">
                <ButtonsGraphic value="Hora" onClick={() => this.handleHour()} />
                <ButtonsGraphic value="Dia" onClick={() => this.handleDay()} />
                <ButtonsGraphic value="Mês" onClick={() => this.handleMonth()} />
                <ButtonsGraphic value="Ano" onClick={() => this.handleYear()} />
              </div>
            </div>
            <DemandChart pass={this.state.chartFilterDemand} />
          </div>
        </div>
      </div>
    )
  }
}
  
  export default ContainerDemand;
