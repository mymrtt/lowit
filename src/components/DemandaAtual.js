import React, { Component } from 'react';

class DemandaAtual extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      demandaAtual: '-',  
    };
  }

  componentDidMount(){
    fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/current', {mode: 'cors'})
    .then(res => res.json())
    .then(json => { 
    
      var leitura = JSON.parse(json.data.value);
      console.log(leitura);
      this.setState({
        demandaAtual: leitura.toFixed(3)
      })
    });
  }

  render(){
    return (
      <div className="container_grafico-info--items variacao_graficoInfo-items">
        <p className="container_grafico-info--title">Demanda Atual</p>
        <p className="container_grafico-info--paragraph">{this.state.demandaAtual}</p>
      </div>
    );
  }
}

export default DemandaAtual;