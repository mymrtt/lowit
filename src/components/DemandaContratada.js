import React, { Component } from 'react';

class DemandaContratada extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      demandaContratada: '-',  
    };
  }

  componentDidMount(){
    fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/demand/contracted', {mode: 'cors'})
    .then(res => res.json())
    .then(json => { 
    
      var leitura = JSON.parse(json.data.value);
      console.log(leitura);
      this.setState({
        demandaContratada: leitura.toFixed(3)
      })
    });
  }

  render(){
    return (
      <div className="container_grafico-info--items variacao_graficoInfo-items">
        <p className="container_grafico-info--title">Demanda Contratada</p>
        <p className="container_grafico-info--paragraph">{this.state.demandaContratada}</p>
      </div>
    );
  }
}

export default DemandaContratada;