import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

// import ButtonsGraphic from './ButtonsGraphic';

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
    var intervalBar = [];
    var demandedBar = [];
    var contractedBar = [];
    var period = filter;
    var contracted = this.state.contractedDemand;

    dataset.map(function(item, i){
      var timeFormatted = null;
//      console.log(item);

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
      contractedBar.push(contracted);
    });

    return [intervalBar, demandedBar, contractedBar];
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

  updateChartDataState(dataArray){
    var intervalBar = dataArray[0];
    var demandedBar = dataArray[1];
    var contractedBar = dataArray[2];

//    console.log('interval: ');
//    console.log(intervalBar);

//    console.log('demanded: ');
//    console.log(demandedBar);

//    console.log('contracted: ');
//    console.log(contractedBar);

    var chart = {};
    chart.labels = intervalBar;
    chart.datasets = [];

    var demandedLine = {};
    
    demandedLine.label = 'Demanda Medida';
    demandedLine.data = demandedBar;
    demandedLine.backgroundColor = '#CCF2F7';
    chart.datasets.push(demandedLine);

    var contractedLine = {};
    contractedLine.label = 'Demanda Contratada';
    contractedLine.data = contractedBar;
    contractedLine.fill = false;
    contractedLine.borderColor = '#FF0000';
    contractedLine.backgroundColor = '#FF0000';
    chart.datasets.push(contractedLine);

    this.setState({
      chartData:chart
    })
  }

  async componentDidMount(){
    await this.updateContractedDemandState();
 
    const apiDemandCall = await fetch(this.getActiveDemandGraphUrl(this.state.chartFilterDemand));
    const apiDemandJSON = await apiDemandCall.json();

    var dataArray = this.mountActiveDemandTree(apiDemandJSON.data, this.state.chartFilterDemand);

    this.updateChartDataState(dataArray);
  }

  async componentWillReceiveProps(nextProps){
    const apiDemandUpdateCall = await fetch(this.getActiveDemandGraphUrl(nextProps.pass));
    const apiDemandUpdateJSON = await apiDemandUpdateCall.json();
    var dataArray = this.mountActiveDemandTree(apiDemandUpdateJSON.data, nextProps.pass);

    this.updateChartDataState(dataArray);
  }

  render(){
    return (
      <div className="container_graphicDemand">
        {/* <div className="container_graphicDemand-content"> */}
          <div className="graphic">
            <div className="graphicDemand">
              <Line data={this.state.chartData} options={{title:{responsive: true, maintainAspectRatio: true}}} width={680} height={165} />
            </div>
          </div>
        {/* </div> */}
      </div>
    )
  }
}

export default DemandChart;