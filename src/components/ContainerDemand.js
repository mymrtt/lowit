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
      <div className="container_graphic-demand">
        <div className="container_buttons-graphic--demand">
          <div className="container_buttons variation_btns-demand">
            <ButtonsGraphic value="Hora" backgroundColor='Grey' onClick={() => this.handleHour()} />
            <ButtonsGraphic value="Dia" backgroundColor='Grey' onClick={() => this.handleDay()} />
            <ButtonsGraphic value="Mês" backgroundColor='Grey' onClick={() => this.handleMonth()} />
            <ButtonsGraphic value="Ano" backgroundColor='Grey' onClick={() => this.handleYear()} />
          </div>
        </div>
        <div className="container_demand-content">
          <div className="container_graphic-demand--info">
            <CurrentDemand />
            <ContractedDemand />
          </div>
          <DemandChart pass={this.state.chartFilterDemand} />
        </div>
      </div>
    )
  }
}
  
  export default ContainerDemand;