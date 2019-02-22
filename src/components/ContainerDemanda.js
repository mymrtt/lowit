import React, { Component } from 'react';

import Filter from './Filter';
import Switch from './Switch';

import GraficoConsumo from './GraficoConsumo';
import GraficoDemanda from './GraficoDemanda';

import ButtonsGrafico from './ButtonsGrafico'
import DemandaAtual from './DemandaAtual';
import DemandaContratada from './DemandaContratada';


class ContainerDemanda extends Component {
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

        <div className="container_grafico-demanda">
        <div className="container_buttonsGrafico-demanda">
          <div className="container_buttons variacao_btns-demanda">
            <ButtonsGrafico value="Hora" backgroundColor='Grey' onClick={() => this.handleHour()} />
            <ButtonsGrafico value="Dia" backgroundColor='Grey' onClick={() => this.handleDay()} />
            <ButtonsGrafico value="Mês" backgroundColor='Grey' onClick={() => this.handleMonth()} />
            <ButtonsGrafico value="Ano" backgroundColor='Grey' onClick={() => this.handleYear()} />
          </div>
        </div>
        <div className="container_demanda-conteudo">
          <div className="container_graficoDemanda-info">
            <DemandaAtual />
            <DemandaContratada />
          </div>
          <GraficoDemanda pass={this.state.chartFilterDemand} />
        </div>
      </div>


        )
  }
}
  
  export default ContainerDemanda;