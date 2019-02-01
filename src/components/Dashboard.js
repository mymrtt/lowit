import React, { Component } from 'react';

import FormSelectDash from './FormSelectDash';

// import ButtonOnOff from '';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      dados: [
      {   'dispositivos': 'Iluminação 2',
          'corrente': '2,3',
          'tensão': '3,1', 
          'unidade': '4', 
          'temperatura': '12', 
          'ligardesligar': <img src="" alt=""/>
        },
        {
          'dispositivos': 'Tomada 1',
          'corrente': '2,3',
          'tensão': '3,1', 
          'unidade': '4', 
          'temperatura': '12', 
          'ligardesligar': <img src="" alt=""/>
        },
        {
          'dispositivos': 'Ar condicionado',
          'corrente': '1,2',
          'tensão': '1,2', 
          'unidade': '1', 
          'temperatura': '17', 
          'ligardesligar': <img src="" alt=""/>
        },
        {
          'dispositivos': 'Iluminação 2',
          'corrente': '2,3',
          'tensão': '3,1', 
          'unidade': '4', 
          'temperatura': '12', 
          'ligardesligar': <img src="" alt=""/>
        },
        {
          'dispositivos': 'Tomada 2',
          'corrente': '1,2',
          'tensão': '1,2', 
          'unidade': '1', 
          'temperatura': '17', 
          'ligardesligar': <img src="" alt=""/>
        },
        {
          'dispositivos': 'Tomada 2',
          'corrente': '1,2',
          'tensão': '1,2', 
          'unidade': '1', 
          'temperatura': '17', 
          'ligardesligar': <img src="" alt=""/>
        }
      ]
    };
  }
  render(){
    return(
      <div className="container_dashboard">
        <FormSelectDash />
        <div className="container_tabela-cabecalho">
          <p className="cabecalho_itens">Dispositivos</p>
          <p className="cabecalho_itens">Corrente</p> 
          <p className="cabecalho_itens">Tensão</p> 
          <p className="cabecalho_itens">Unidade</p> 
          <p className="cabecalho_itens">Temperatura</p>
          <p className="cabecalho_itens">Ligar/Desligar</p> 
        </div>
        <div className="container_tabela-conteudo">
          {
            this.state.dados.map(item => {
              return (
                <div className="container_dashboard-conteudo">
                  <p value={item['dispositivos']} />
                  <input className="tabela_dispositivos-itens" type="number" value={item['corrente']} />
                  <input className="tabela_dispositivos-itens" type="number" value={item['tensao']} /> 
                  <input className="tabela_dispositivos-itens" type="number" value={item['unidade']} />
                  <input className="tabela_dispositivos-itens" type="number" value={item['temperatura']} />
                  <input className="tabela_dispositivos-itens  tabela_dispositivos-itens-btn" type="button" value={item['ligardesligar']} />
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Dashboard;