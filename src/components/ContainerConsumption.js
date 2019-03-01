import React, { Component } from 'react';

import ButtonsGraphic from './ButtonsGraphic';
import ConsumptionChart from './ConsumptionChart';
import Switch from './Switch';

//import './containerdemand.css';

class ContainerConsumption extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartFilterConsumption: 'hour', 
      data: {id: -1, name: 'Prédio'}
    };

    this.handleHour = this.handleHour.bind(this);
    this.handleDay = this.handleDay.bind(this);
    this.handleMonth = this.handleMonth.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.childHandler = this.childHandler.bind(this)
  }


   /*
    Function that gets called when
    we bubble up our `return` from Child 
  */
  childHandler(dataFromChild) {
    // log our state before and after we updated it
    console.log('%cPrevious Parent State: ' + JSON.stringify(this.state), "color:orange");
    this.setState({
        data: dataFromChild
    },() => console.log('Updated Parent State:', this.state));
  }

  handleHour = (event) => {
    console.log("hour");
    this.setState({
      chartFilterConsumption: 'hour'
    })
  }

  handleDay = (event) => {
    console.log("day");
    this.setState({
      chartFilterConsumption: 'day'
    })
  }

  handleMonth = (event) => {
    console.log("month");
    this.setState({
      chartFilterConsumption: 'month'
    })
  }

  handleYear = (event) => {
    console.log("year");
    this.setState({
      chartFilterConsumption: 'year'
    })
  }


  render(){
    return(
      <div className="container_consumption">
        <div className="container_consumption-content">
          <div className="container_consumption--info">
            <div className="container_graphic-info--items">
              <p className="container_graphic-info--title">Consumo atual (Em R$)</p>
              <p className="container_graphic-info--paragraph">R$ 45,36</p>
            </div>
            <div className="container_table-devices--consumption">
              <div className="table_consumption-devices">
                <h3 className="table_devices-title">Filtro</h3>
                <div className="filter">
                  <Switch action={this.childHandler}/>
                </div>
              </div>
            </div>
          </div>
          <div className="container_graphic-consumption">
            <div className="container_graphic-consumption--content">
              <div className="container_graphic-consumption--buttons">
                <input className="input_graphic" type="text" value={this.state.data.name}/>
                <div className="container_graphic-consumption--buttons-centro">
                  <button className="btns">kW/h</button>
                  <button className="btns">R$</button>
                </div>
                <div className="container_buttons">
                  <ButtonsGraphic value="Hora" backgroundColor='Grey' onClick={() => this.handleHour()}/>
                  <ButtonsGraphic value="Dia" backgroundColor='Grey' onClick={() => this.handleDay()}/>
                  <ButtonsGraphic value="Mês" backgroundColor='Grey' onClick={() => this.handleMonth()}/>
                  <ButtonsGraphic value="Ano" backgroundColor='Grey' onClick={() => this.handleYear()}/>
                </div>
              </div>
              <ConsumptionChart pass={this.state.chartFilterConsumption} filtered={this.state.data} />
            </div>
          </div> 
        </div>
      </div>
    )
  }
}
  
  export default ContainerConsumption;