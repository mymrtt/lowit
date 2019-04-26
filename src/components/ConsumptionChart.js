import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';

import './consumptionchart.css';

const moment = require('moment');
var numeral = require('numeral');

defaults.global.maintainAspectRatio = false

function formatNumber(num) {
  return (
    Number(num)
      .toFixed(countDecimals(num))
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}

var countDecimals = function (value) {
  if(Math.floor(value) === value) return 0;
  return value.toString().split(".")[1].length || 0; 
}

const options = {
  tooltips: {
    callbacks: {
        label: function(tooltipItem, data) {
            return `${formatNumber(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])}`;
        }
    }
},
  legend:{display: true,labels:{fontSize:8, boxWidth:20}},
  scales: {
       xAxes: [{
           stacked: false,
           ticks: {
            fontSize: 7
           }

       }],
       yAxes: [{
           stacked: false,
           ticks: {
            callback(value) {
              return Number(value).toLocaleString('pt-BR')
            },
            fontSize: 7
           }
       }]
   }
}


class ConsumptionChart extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData: {},
      currentConsumption: 0, 
      activeFilterId : '-1',
      activeFilterName : 'Prédio',
      chartFilterConsumption: 'hour', 
      chartFilterConsumptionType: false, 
    };
  }

  mountActiveDemandTree(dataset, filter, type){
    var intervalBar = [];
    var demandedBar = [];
    var period = filter;

    dataset.map(function(item, i){
      var timeFormatted = null;

      if(period === null || period.length === 0  || period === 'hour'){
        timeFormatted = moment(item.datetime).format('HH') + ":00" + "-" + moment(item.datetime).format('D') + "/" + moment(item.datetime).format('MM');
      } else if(period === 'day'){
        timeFormatted = moment(item.datetime).format('D') + "/" + moment(item.datetime).format('MMM') ;
      } else if(period === 'month'){
        timeFormatted = moment(item.datetime).format('MMM') + "/" + moment(item.datetime).format('YYYY');
      } else if(period === 'year'){
        timeFormatted = moment(item.datetime).format('YYYY');
      } 

      intervalBar.push(timeFormatted);

      if(type === true){
        demandedBar.push(item.value.toFixed(2));        
      } else {
        demandedBar.push(item.value.toFixed(3));
      }

    });

    console.log("demanded:" + demandedBar);

    return [intervalBar, demandedBar];
  }

//  async updateContractedDemandState(){
//    const apiContractedCall = await fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/contracted')
//    const apiContractedJSON = await apiContractedCall.json() 
//    this.setState({contractedDemand: apiContractedJSON.data.value})
//  }

  getActiveDemandGraphUrl(chartFilterConsumptionType, chartFilterConsumption, filtered){
    var fetchUrl = null;
    if(chartFilterConsumption === null || chartFilterConsumption.length === 0  || chartFilterConsumption === 'hour'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/graph?interval=hour';
    } else if(chartFilterConsumption === 'day'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/graph?interval=day';
    } else if(chartFilterConsumption === 'month'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/graph?interval=month';
    } else if(chartFilterConsumption === 'year'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/consumption/graph?interval=year';
    } 

    if(typeof filtered !== 'undefined' && filtered !== null){
      fetchUrl = fetchUrl + '&device_group=' + filtered;
      if(chartFilterConsumptionType === true){
        fetchUrl = fetchUrl + '&money=true';
      }
    }

    console.log('URL: ', fetchUrl);
    return fetchUrl;
  }

  updateChartDataState(dataArray, type){
    var intervalBar = dataArray[0];
    var demandedBar = dataArray[1];

    var chart = {};
    chart.labels = intervalBar;
    chart.datasets = [];

    var demandedLine = {};
    if(type === true){
      demandedLine.label = 'Consumo em R$';
    } else {
      demandedLine.label = 'Consumo em kWh';
    }

    demandedLine.data = demandedBar;

    demandedLine.backgroundColor = '#CCF2F7';
    demandedLine.borderColor = "#006400";


    chart.datasets.push(demandedLine);

    this.setState({
      chartData:chart
    })
  }

  async componentDidMount(){
    //await this.updateContractedDemandState();
 
    const apiDemandCall = await fetch(this.getActiveDemandGraphUrl(this.state.chartFilterConsumptionType, this.state.chartFilterConsumption, this.state.activeFilterId));
    const apiDemandJSON = await apiDemandCall.json();
    var dataArray = this.mountActiveDemandTree(apiDemandJSON.data, this.state.chartFilterConsumption, this.state.chartFilterConsumptionType);
    this.updateChartDataState(dataArray, this.state.chartFilterConsumptionType);
  }

  async componentWillReceiveProps(nextProps){
    console.log('nexprops', nextProps.type);
    const apiDemandUpdateCall = await fetch(this.getActiveDemandGraphUrl(nextProps.type, nextProps.pass, nextProps.filtered.id));
    const apiDemandUpdateJSON = await apiDemandUpdateCall.json();
    var dataArray = this.mountActiveDemandTree(apiDemandUpdateJSON.data, nextProps.pass, nextProps.type);

    this.updateChartDataState(dataArray, nextProps.type);
  }
  
  render(){
    return (
      <div className="graphics">
        <div className="ConsumptionChart">
          <Line 
            data={this.state.chartData} 
            options={options} 
            width={800} height={180} 
          />
        </div>
      </div>
    )
  }
}

export default ConsumptionChart;