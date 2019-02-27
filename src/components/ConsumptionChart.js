import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import './consumptionchart.css';

const moment = require('moment')

class ConsumptionChart extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData: {},
      currentConsumption: 0, 
      activeFilterId : '-1',
      activeFilterName : 'Prédio',
      chartFilterConsumption: 'hour', 
    };
  }

  mountActiveDemandTree(dataset, filter){
    var intervalBar = [];
    var demandedBar = [];
    var period = filter;

    dataset.map(function(item, i){
      var timeFormatted = null;

      if(period === null || period.length === 0  || period === 'hour'){
        timeFormatted = moment(item.datetime).format('HH') + "h";
      } else if(period === 'day'){
        timeFormatted = moment(item.datetime).format('D');
      } else if(period === 'month'){
        timeFormatted = moment(item.datetime).format('MMM');
      } else if(period === 'year'){
        timeFormatted = moment(item.datetime).format('YYYY');
      } 
  
      intervalBar.push(timeFormatted);
      demandedBar.push(item.value);
    });

    return [intervalBar, demandedBar];
  }

//  async updateContractedDemandState(){
//    const apiContractedCall = await fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/contracted')
//    const apiContractedJSON = await apiContractedCall.json() 
//    this.setState({contractedDemand: apiContractedJSON.data.value})
//  }

  getActiveDemandGraphUrl(chartFilterConsumption, filtered){
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
    }

    return fetchUrl;
  }

  updateChartDataState(dataArray){
    var intervalBar = dataArray[0];
    var demandedBar = dataArray[1];

    var chart = {};
    chart.labels = intervalBar;
    chart.datasets = [];

    var demandedLine = {};
    demandedLine.label = 'Consumo em kW/h';
    demandedLine.data = demandedBar;
    demandedLine.backgroundColor = '#CCF2F7';
    chart.datasets.push(demandedLine);

    this.setState({
      chartData:chart
    })
  }

  async componentDidMount(){
    //await this.updateContractedDemandState();
 
    const apiDemandCall = await fetch(this.getActiveDemandGraphUrl(this.state.chartFilterConsumption, this.state.activeFilterId));
    const apiDemandJSON = await apiDemandCall.json();
    var dataArray = this.mountActiveDemandTree(apiDemandJSON.data, this.state.chartFilterConsumption);
    this.updateChartDataState(dataArray);
  }

  async componentWillReceiveProps(nextProps){
    const apiDemandUpdateCall = await fetch(this.getActiveDemandGraphUrl(nextProps.pass, nextProps.filtered.id));
    const apiDemandUpdateJSON = await apiDemandUpdateCall.json();
    var dataArray = this.mountActiveDemandTree(apiDemandUpdateJSON.data, nextProps.pass);

    this.updateChartDataState(dataArray);
  }

  render(){
    return (
      <div className="graphic">
        <div className="graphic_comsumption">
          <Line data={this.state.chartData} options={{title:{responsive: true, maintainAspectRatio: true}}} width={800} height={180} />
        </div>
      </div>
    )
  }
}

export default ConsumptionChart;