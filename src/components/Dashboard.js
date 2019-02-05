import React, { Component } from 'react';

import FormSelectDashboard from './FormSelectDashboard';
import ButtonsDashboard from './ButtonsDashboard';
import GraphicDashboard from './GraphicDashboard';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      dados: [
      {   'dispositivos': 'Iluminação 2',
          'corrente': '2.3',
          'tensao': '3.1', 
          'unidade': '4', 
          'temperatura': '12', 
          'ligardesligar': <ButtonsDashboard />
        },
        {
          'dispositivos': 'Tomada 1',
          'corrente': '2.3',
          'tensao': '3.1', 
          'unidade': '4', 
          'temperatura': '12', 
          'ligardesligar': <ButtonsDashboard />
        },
        {
          'dispositivos': 'Ar condicionado',
          'corrente': '1.2',
          'tensao': '1.2', 
          'unidade': '1', 
          'temperatura': '17', 
          'ligardesligar': <ButtonsDashboard />
        },
        {
          'dispositivos': 'Iluminação 2',
          'corrente': '2.3',
          'tensao': '3.1', 
          'unidade': '4', 
          'temperatura': '12', 
          'ligardesligar': <ButtonsDashboard />
        },
        {
          'dispositivos': 'Tomada 2',
          'corrente': '1.2',
          'tensao': '1.2', 
          'unidade': '1', 
          'temperatura': '17', 
          'ligardesligar': <ButtonsDashboard />
        },
        {
          'dispositivos': 'Tomada 3',
          'corrente': '1.2',
          'tensao': '1.2', 
          'unidade': '1', 
          'temperatura': '17', 
          'ligardesligar': <ButtonsDashboard />
        }
      ]
    };
  }
  render(){
    return(
      <div className="container_dashboard">
        <div className="container_tabela">
          <FormSelectDashboard />
          <div className="container_tabela-cabecalho">
            <p className="tabela_cabecalho-itens">Dispositivos</p>
            <p className="tabela_cabecalho-itens">Corrente</p> 
            <p className="tabela_cabecalho-itens">Tensão</p> 
            <p className="tabela_cabecalho-itens">Unidade</p> 
            <p className="tabela_cabecalho-itens">Temperatura</p>
            <p className="tabela_cabecalho-itens">Ligar/Desligar</p> 
          </div>
          <div className="container_tabela-conteudo">
            {
              this.state.dados.map(item => {
                return (
                  <div className="container_tabela-inputs">
                    <input className="tabela_inputs-dispositivos tabela_inputs" value={item['dispositivos']} />
                    <input className="tabela_inputs" type="number" value={item['corrente']} />
                    <input className="tabela_inputs" type="number" value={item['tensao']} /> 
                    <input className="tabela_inputs" type="number" value={item['unidade']} />
                    <input className="tabela_inputs" type="number" value={item['temperatura']} />
                    <input className="tabela_inputs  tabela_inputs-btn" type="button" value={item['ligardesligar']} backgroundColor='BtnOn'/>
                  </div>
                )
              })
            }
          </div>
        </div>
        <GraphicDashboard legendPosition="left"/>
      </div>
    )
  }
}

export default Dashboard;