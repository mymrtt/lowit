import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const moment = require('moment')

class GraficoDemanda extends Component{
  constructor(props){
    super(props);

    this.state = {
      chartFilterDemand : '',
      chartDataDemand: {}, 
      demandaContratada: 0, 
    };
  }

  static defaultProps = {
    // displayTitle:true,
    // displayLegend: true,
    // legendPosition:'right',
  }

  async componentDidMount(){
    var acumuladorLabel = [];
    var acumuladorValor = [];
    var acumuladorContratadaValor = [];

    const contratada = await fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/contracted')
    const leitura = await contratada.json() 
    this.setState({demandaContratada: leitura.data.value})

    this.setState({chartFilterDemand: 'day'}) //TODO apenas para forçar a primeira visão como dia
    

    var fetchUrl = null;
    if(this.state.chartFilterDemand == null || this.state.chartFilterDemand.length == 0  || this.state.chartFilterDemand == 'hour'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=hour';
    } else if(this.state.chartFilterDemand == 'day'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=day';
    } else if(this.state.chartFilterDemand == 'month'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=month';
    } else if(this.state.chartFilterDemand == 'year'){
      fetchUrl = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/graph?interval=year';
    } 

    fetch(fetchUrl)
    .then(res => res.json())
    .then(json => { 

      json.data.map(item => (
        this.montarGrafico(item, this.state.demandaContratada, acumuladorLabel, acumuladorValor, acumuladorContratadaValor)
      ));

//      var data = JSON.parse(treeData);
      console.log(acumuladorLabel);
      console.log(acumuladorValor);

      var chart = {};
      chart.labels = acumuladorLabel;
      chart.datasets = [];
      var level = {};
      level.label = 'Demanda Medida';
      level.data = acumuladorValor;
      level.backgroundColor = '#CCF2F7';
      chart.datasets.push(level);

      var level2 = {};
      level2.label = 'Demanda Contratada';
      level2.data = acumuladorContratadaValor;
      chart.datasets.push(level2);


      console.log(chart);

      this.setState({
        chartData:chart
      })
    });
  }

  montarGrafico(item, dado, label, valor, valor2){

    var p = null;

    if(this.state.chartFilterDemand == null || this.state.chartFilterDemand.length == 0  || this.state.chartFilterDemand == 'hour'){
      p = moment(item.datetime).format('HH') + "h";
    } else if(this.state.chartFilterDemand == 'day'){
      p = moment(item.datetime).format('DD/MM');
    } else if(this.state.chartFilterDemand == 'month'){
      p = moment(item.datetime).format('MM/YY');
    } else if(this.state.chartFilterDemand == 'year'){
      p = moment(item.datetime).format('YYYY');
    } 

    label.push(p);
    valor.push(item.value);
    valor2.push(dado);
  }

  render(){
    return (
      <div className="container_graficoDemanda">
        <div className="container_grafico-conteudoDemanda">
          <div className="grafico">
            <div className="grafico_demanda">
              <Line data={this.state.chartData} options={{title:{responsive: true, maintainAspectRatio: true}}} width={600} height={115} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GraficoDemanda;