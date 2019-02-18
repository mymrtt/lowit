import React, { Component } from 'react';

import Filter from './Filter';

import GraficoConsumo from './GraficoConsumo';
import GraficoDemanda from './GraficoDemanda';

import ButtonsGrafico from './ButtonsGrafico'


class Dashboard extends Component {
  render(){
    return(
      <div className="container_dashboard">
        <div className="container_dashboard-conteudo">
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
          <div className="container_graficos">
            <div className="container_grafico-consumo">
              <div className="container_graficoConsumo-info">
                <div className="container_graficoInfo-items">
                  <p className="container_graficoInfo-title">Consumo atual (Em R$)</p>
                  <p className="container_graficoInfo-paragraph">R$ 45,36</p>
                </div>
                <div className="container_tabelaDispositivos-consumo">
                  <div className="tabela_consumo-dispositivos">
                    <h3 className="tabela_dispositivos-titulo">Selecione o Grupo/Dispositivo:</h3>
                    <div className="filter">
                      {/* <Filter /> */}
                      <p>Prédio Inteiro</p>
                      <p>1º Andar</p>
                      <p>Área de Lazer</p>
                      <p>Ar condicionado</p>
                      <p>2º Andar</p>
                      <p>3º Andar</p>
                    </div>
                  </div>
                </div>
              </div>
              <GraficoConsumo/>
            </div>
            <div className="container_grafico-demanda">
              <div className="container_buttonsGrafico-demanda">
                <div className="container_buttons variacao_btns-demanda">
                  <ButtonsGrafico value="Hora" backgroundColor='Grey'/>
                  <ButtonsGrafico value="Dia" backgroundColor='Grey'/>
                  <ButtonsGrafico value="Mês" backgroundColor='Grey'/>
                  <ButtonsGrafico value="Ano" backgroundColor='Grey'/>
                </div>
              </div>
              <div className="container_demanda-conteudo">
                <div className="container_graficoDemanda-info">
                  <div className="container_graficoInfo-items variacao_graficoInfo-consumo--items">
                    <p className="container_graficoInfo-title variacao_graficoInfo-consumo--title">Demanda Atual</p>
                    <p className="container_graficoInfo-paragraph variacao_graficoInfo-consumo--paragraph">2.999,65</p>
                  </div>
                  <div className="container_graficoInfo-items variacao_graficoInfo-consumo--items">
                    <p className="container_graficoInfo-title variacao_graficoInfo-consumo--title">Demanda Contratada</p>
                    <p className="container_graficoInfo-paragraph variacao_graficoInfo-consumo--paragraph">3200</p>
                  </div>
                </div>
                <GraficoDemanda/>
              </div>
            </div>
          </div>
        </div>
        <div className="container_dispositivosLateral">
          <div className="container_tabelaDispositivos">
            <div className="tabela_dispositivos-lateral">
              <h3 className="tabela_dispositivos-titulo">Ligar ou Desligar Grupo/Dispositivo:</h3>
              <div className="filter">
                <Filter />
                {/* <p>Prédio Inteiro</p>
                <p>1º Andar</p>
                <p>Área de Lazer</p>
                <p>Ar condicionado</p>
                <p>2º Andar</p>
                <p>3º Andar</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;