import React, { Component } from 'react';
import { Line, defaults } from 'react-chartjs-2';
import './demandchart.css';

const moment = require('moment')
defaults.global.maintainAspectRatio = false

function formatNumber(num) {
  return (
    Number(num)
      .toFixed(0)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  )
}

const options = {
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        return `${formatNumber(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])}`;
      }
    }
  },
  legend: { display: true, labels: { fontSize: 8, boxWidth: 20 } },
  scales: {
    tooltips: {
      mode: 'index',
      intersect: true
    },
    xAxes: [{
      ticks: {
        fontSize: 7
      }

    }],

    yAxes: [{
      id: 'A',
      stacked: false,
      ticks: {
        callback(value) {
          return Number(value).toLocaleString('pt-BR')
        },

        fontSize: 7,
        beginAtZero: true,
        min: 0,
      },
      scaleLabel: {
        display: true,
        labelString: 'W',
        fontSize: 7
      },
      display: true,
    }]
  }
}

class DemandChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      contractedDemand: 0,
      chartFilterDemand: 'hour',
    };


  }

  mountActiveDemandTree(dataset, filter) {
    var period = filter;
    var intervalCreated = false;
    var interval = [];
    var colors = ['#F00000', '#F000CC', '#F0CC00', '#CCCCCC', '#AAAAAA', '#0000FF', '#F000FF', '#F0FF00', '#00CCCC', '#AA00AA', '#F0F0F0'];
    var colorIndex = 0;

    var chart = {};
    chart.datasets = [];

    for (const [key, value] of Object.entries(dataset)) {

      if (key == "contracted_demand") {
        var lineContracted = {};
        lineContracted.label = 'Demanda Contratada';

        var list = [];

        var arrayLength = value.length;
        for (var i = 0; i < arrayLength; i++) {
          list.push(value[i].value);
        }

        lineContracted.data = list;
        lineContracted.backgroundColor = "#006400";
        lineContracted.borderColor = "#006400";
        lineContracted.radius = 2;
        lineContracted.fill = false;


        chart.datasets.push(lineContracted);

      } else {
        var lineItem = {};
        lineItem.label = key;

        var lista = [];
        for (const [chave, valor] of Object.entries(value)) {
          lista.push(valor.value);

          if (intervalCreated === false) {
            var timeFormatted = null;
            if (period === null || period.length === 0 || period === 'hour') {
              timeFormatted = moment(valor.datetime).format('HH') + ":00" + "-" + moment(valor.datetime).format('D') + "/" + moment(valor.datetime).format('MM');
            } else if (period === 'day') {
              timeFormatted = moment(valor.datetime).format('D') + "/" + moment(valor.datetime).format('MMM');
            } else if (period === 'month') {
              timeFormatted = moment(valor.datetime).format('MMM') + "/" + moment(valor.datetime).format('YYYY');
            } else if (period === 'year') {
              timeFormatted = moment(valor.datetime).format('YYYY');
            }
            interval.push(timeFormatted);
          }

        }

        intervalCreated = true;

        lineItem.data = lista;
        lineItem.backgroundColor = colors[colorIndex];
        lineItem.radius = 2;

        if (lineItem.label !== 'Demanda Total') {
          lineItem.borderColor = colors[colorIndex];
          lineItem.fill = false;
          chart.datasets.push(lineItem);
        } else {
          lineItem.borderColor = colors[colorIndex];
          lineItem.fill = false;
          chart.datasets.push(lineItem);
        }
        colorIndex = colorIndex + 1;
      }

    }

    chart.labels = interval;

    this.setState({
      chartData: chart
    })

  }

  async updateContractedDemandState() {
    const apiContractedCall = await fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/contracted')
    const apiContractedJSON = await apiContractedCall.json()
    this.setState({ contractedDemand: apiContractedJSON.data.value })
  }

  getActiveDemandGraphUrl(chartFilterDemand) {
    var fetchUrl = null;

    if (chartFilterDemand === null || chartFilterDemand.length === 0 || chartFilterDemand === 'hour') {
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=hour';
    } else if (chartFilterDemand === 'day') {
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=day';
    } else if (chartFilterDemand === 'month') {
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=month';
    } else if (chartFilterDemand === 'year') {
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=year';
    }

    return fetchUrl;
  }

  async componentDidMount() {
    const apiDemandCall = await fetch(this.getActiveDemandGraphUrl(this.state.chartFilterDemand));
    const apiDemandJSON = await apiDemandCall.json();
    this.mountActiveDemandTree(apiDemandJSON.data, this.state.chartFilterDemand);

  }

  async componentWillReceiveProps(nextProps) {
    const apiDemandUpdateCall = await fetch(this.getActiveDemandGraphUrl(nextProps.pass));
    const apiDemandUpdateJSON = await apiDemandUpdateCall.json();
    this.mountActiveDemandTree(apiDemandUpdateJSON.data, nextProps.pass);
  }

  render() {
    return (
      <div className="DemandChart">
        <div className="DemandChart-content">
          <div className="graphics">
            <div className="container_DemandChart">
              <Line
                data={this.state.chartData}
                options={options}
                width={680} height={165}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DemandChart;