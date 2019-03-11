import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './demandchart.css';

const moment = require('moment')

class DemandChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData: {},
      //chartDataDemand: {}, 
      contractedDemand: 0, 
      chartFilterDemand: 'hour', 
    };
  }

  mountActiveDemandTree(dataset, filter){
    var period = filter;
    var intervalCreated = false;
    var interval = [];
    var colors = ['#F00000', '#F000CC', '#F0CC00', '#CCCCCC', '#AAAAAA', '#0000FF', '#F000FF', '#F0FF00', '#00CCCC', '#AA00AA', '#F0F0F0'];
    var colorIndex = 0;

    var chart = {};
    chart.datasets = [];

    for (const [key, value] of Object.entries(dataset)) {
      console.log(key, value);

      if(key == "contracted_demand"){
        var lineContracted = {};
        lineContracted.label = 'Demanda Contratada';
        lineContracted.data = value.value;
        lineContracted.borderColor = '#FF0000';
        lineContracted.backgroundColor = '#FF0000';
        lineContracted.fill = false;
//        chart.datasets.push(lineContracted);
      } else {
        var lineItem = {};
        lineItem.label = key;

        var lista = [];
        for (const [chave, valor] of Object.entries(value)) {
          lista.push(valor.value);

          if(intervalCreated === false){
            var timeFormatted = null;
            if(period === null || period.length === 0  || period === 'hour'){
              timeFormatted = moment(valor.datetime).format('HH') + "h";
            } else if(period === 'day'){
              timeFormatted = moment(valor.datetime).format('D');
            } else if(period === 'month'){
              timeFormatted = moment(valor.datetime).format('MMM');
            } else if(period === 'year'){
              timeFormatted = moment(valor.datetime).format('YYYY');
            } 
            interval.push(timeFormatted);
          }

        }

        intervalCreated = true; //Só monta o intervalo uma vez 

        lineItem.data = lista;
        lineItem.backgroundColor = colors[colorIndex];
        colorIndex = colorIndex + 1;
        chart.datasets.push(lineItem);
      }

    }

    chart.labels = interval;

    this.setState({
      chartData:chart
    })

    console.log("xxxxxxxx", chart);

  }

  async updateContractedDemandState(){
    const apiContractedCall = await fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/contracted')
    const apiContractedJSON = await apiContractedCall.json() 
    this.setState({contractedDemand: apiContractedJSON.data.value})
  }

  getActiveDemandGraphUrl(chartFilterDemand){
    var fetchUrl = null;

    if(chartFilterDemand === null || chartFilterDemand.length === 0  || chartFilterDemand === 'hour'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=hour';
    } else if(chartFilterDemand === 'day'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=day';
    } else if(chartFilterDemand === 'month'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=month';
    } else if(chartFilterDemand === 'year'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=year';
    } 

    return fetchUrl;
  }

  async componentDidMount(){
    //await this.updateContractedDemandState();
 
    const apiDemandCall = await fetch(this.getActiveDemandGraphUrl(this.state.chartFilterDemand));
    const apiDemandJSON = await apiDemandCall.json();
    this.mountActiveDemandTree(apiDemandJSON.data, this.state.chartFilterDemand);

  }

  async componentWillReceiveProps(nextProps){
    const apiDemandUpdateCall = await fetch(this.getActiveDemandGraphUrl(nextProps.pass));
    const apiDemandUpdateJSON = await apiDemandUpdateCall.json();
    this.mountActiveDemandTree(apiDemandUpdateJSON.data, nextProps.pass);

  }

  render(){
    return (
      <div className="container_graphicDemand">
        <div className="container_graphicDemand-content">
          <div className="graphic">
            <div className="graphicDemand">
              <Line data={this.state.chartData} options={{title:{responsive: true, maintainAspectRatio: true}}} width={680} height={165} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DemandChart;