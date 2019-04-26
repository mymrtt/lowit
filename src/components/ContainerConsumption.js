import React, { Component } from 'react';
import ButtonsGraphic from './ButtonsGraphic';
import ConsumptionChart from './ConsumptionChart';
import Switch from './Switch';

import './ContainerConsumption.css';

class ContainerConsumption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartFilterConsumption: 'hour',
      chartFilterConsumptionType: false,
      consumptionTitle: 'Consumo mês atual (kWh)',
      consumptionValue: '-',
      data: { id: -1, name: 'Prédio' }
    };

    this.handleKw = this.handleKw.bind(this);
    this.handleRs = this.handleRs.bind(this);

    this.handleHour = this.handleHour.bind(this);
    this.handleDay = this.handleDay.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.childHandler = this.childHandler.bind(this)
  }

  async componentDidMount() {

    this.intervalID = setInterval(
      () => this.tick(),
      60000
    );

    var consulta = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/current'
    var precision = 0;

    fetch(consulta, { mode: 'cors' })
      .then(res => res.json())
      .then(json => {

        var leitura = JSON.parse(json.data);
        leitura = this.formatNumber(leitura, precision);
        this.setState({
          consumptionValue: leitura
        })
      });

  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  async tick() {

    var consulta = "";
    var precision = 0;

    if (this.state.chartFilterConsumptionType === true) {
      consulta = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/current?money=true'
      precision = 2;
    } else {
      consulta = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/current'
      precision = 0;
    }

    fetch(consulta, { mode: 'cors' })
      .then(res => res.json())
      .then(json => {

        var leitura = JSON.parse(json.data);
        leitura = this.formatNumber(leitura, precision);
        this.setState({
          consumptionValue: leitura
        })
      });

    this.setState({
      time: new Date().toLocaleString()
    });
  }

  childHandler(dataFromChild) {
    this.setState({
      data: dataFromChild
    });
  }

  handleKw = (event) => {
    this.setState({
      chartFilterConsumptionType: false,
      consumptionTitle: 'Consumo mês atual (kWh)'
    })

    var consulta = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/current'
    var precision = 0;

    fetch(consulta, { mode: 'cors' })
      .then(res => res.json())
      .then(json => {

        var leitura = JSON.parse(json.data);
        leitura = this.formatNumber(leitura, precision);
        this.setState({
          consumptionValue: leitura
        })
      });


  }

  handleRs = (event) => {
    this.setState({
      chartFilterConsumptionType: true,
      consumptionTitle: 'Consumo mês atual (R$)'
    })

    var consulta = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/current?money=true'
    var precision = 2;

    fetch(consulta, { mode: 'cors' })
      .then(res => res.json())
      .then(json => {

        var leitura = JSON.parse(json.data);
        leitura = this.formatNumber(leitura, precision);
        this.setState({
          consumptionValue: leitura
        })
      });
  }


  handleHour = (event) => {
    this.setState({
      chartFilterConsumption: 'hour'
    })
  }

  handleDay = (event) => {
    this.setState({
      chartFilterConsumption: 'day'
    })
  }

  handleMonth = (event) => {
    this.setState({
      chartFilterConsumption: 'month'
    })
  }

  handleYear = (event) => {
    this.setState({
      chartFilterConsumption: 'year'
    })
  }

  formatNumber(num, precision) {
    return (
      num
        .toFixed(precision)
        .replace('.', ',')
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
    )
  }


  render() {
    return (
      <div className="container_consumption">
        <div className="container_consumption-content">
          <div className="container_consumption-info">
            <div className="container_graphics-info--items">
              <p className="container_graphics-info--title">{this.state.consumptionTitle}</p>
              <p className="container_graphics-info--paragraph">{this.state.consumptionValue}</p>
            </div>
            <div className="container_table-devices--consumption">
              <div className="table_consumption-devices">
                <h3 className="table_devices-title">Filtro</h3>
                <div className="filter">
                  <Switch action={this.childHandler} />
                </div>
              </div>
            </div>
          </div>
          <div className="container_graphic-consumption">
            <div className="container_graphic-consumption--content">
              <div className="container_graphic-consumption--buttons">
                <input className="input_graphic-comsumption" type="text" value={this.state.data.name} />
                <div className="container_graphic-consumption--buttons-center">
                  <ButtonsGraphic value="kWh" onClick={() => this.handleKw()} />
                  <ButtonsGraphic value="R$" onClick={() => this.handleRs()} />
                </div>
                <div className="container_buttons">
                  <ButtonsGraphic value="Hora" onClick={() => this.handleHour()} />
                  <ButtonsGraphic value="Dia" onClick={() => this.handleDay()} />
                  <ButtonsGraphic value="Mês" onClick={() => this.handleMonth()} />
                  <ButtonsGraphic value="Ano" onClick={() => this.handleYear()} />
                </div>
              </div>
              <ConsumptionChart pass={this.state.chartFilterConsumption} type={this.state.chartFilterConsumptionType} filtered={this.state.data} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContainerConsumption;