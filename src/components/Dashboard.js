import React, { Component } from 'react';

import Filter from './Filter';

import GraficoConsumo from './GraficoConsumo';
import GraficoDemanda from './GraficoDemanda';

class Dashboard extends Component {
  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-conteudo">
          {/* <div> */}
            <div className="container_dashboard-info">
              <div className="container_info-items">
                <p className="container_info-title">Última atualização</p>
                <p className="container_info-paragraph">11/02/2019 09:52</p>
              </div>
              <div className="container_info-items">
                <p className="container_info-title">Temperatura</p>
                <p className="container_info-paragraph">19º</p>
              </div>
              <div className="container_info-items">
                <p className="container_info-title">Umidade</p>
                <p className="container_info-paragraph">72%</p>
              </div>
              <div className="container_info-items">
                <p className="container_info-title">Dispositivos conectados</p>
                <p className="container_info-paragraph">22</p>
              </div>
              <div className="container_info-items">
                <p className="container_info-title">Potência</p>
                <p className="container_info-paragraph">47,4 w</p>
              </div>
            </div>
          {/* </div> */}
          <div className="container_graficos">
          {/* <div className="container_graficos-consumoEdemanda"> */}
            <div className="container_grafico-consumo">
              {/* <div > */}
                <div className="container_grafico-info">
                  <div className="container_graficoInfo-items">
                    <p className="container_graficoInfo-title">Consumo atual (em Reais)</p>
                    {/* o consumo */}
                    <p className="container_graficoInfo-paragraph">R$ 45,36</p>
                  </div>
                  <div className="container_tabelaDispositivos-consumo">
                    <div className="tabela_dispositivos">
                      <h3 className="tabela_dispositivos-titulo">Selecione o Grupo/Dispositivo:</h3>
                      {/* <Filter /> */}
                      <p>Prédio Inteiro</p>
                      <p>1º Andar</p>
                      <p>Área de Lazer</p>
                      <p>Ar condicionado</p>
                      <p>2º Andar</p>
                      <p>3º Andar</p>
                    </div>
                  </div>
                {/* </div> */}
              </div>
              <GraficoConsumo/>
            </div>
            <div className="container_grafico-demanda">
              {/* <div> */}
                <div className="container_grafico-info">
                  <div className="container_graficoInfo-items">
                    <p className="container_graficoInfo-title">Demanda Atual</p>
                    {/* a demanda */}
                    <p className="container_graficoInfo-paragraph">2.999,65</p>
                  </div>
                  <div className="container_graficoInfo-items">
                    <p className="container_graficoInfo-title">Demanda Contratada</p>
                    {/* os dispositivos */}
                    <p className="container_graficoInfo-paragraph">3200</p>
                  </div>
                </div>
              {/* </div> */}
              <GraficoDemanda/>
            </div>
          {/* </div> */}
        </div>
        </div>


          <div className="container_tabelaDispositivos">
            <div className="tabela_dispositivos">
              <h3 className="tabela_dispositivos-titulo">Ligar ou Desligar Grupo/Dispositivo:</h3>
              <Filter />
              {/* <p>Prédio Inteiro</p>
              <p>1º Andar</p>
              <p>Área de Lazer</p>
              <p>Ar condicionado</p>
              <p>2º Andar</p>
              <p>3º Andar</p> */}
            </div>
          </div>

        {/* </div> */}
      </div>
    )
  }
}

export default Dashboard;