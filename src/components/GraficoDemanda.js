import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

// import ButtonsGrafico from './ButtonsGrafico'

class GraficoDemanda extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
          {
            label: 'Hora',
            data:[
              20,
              25,
              30,
              20,
              50,
              40,
              20,
              30,
              10,
              30,
              20,
              60
            ],
            backgroundColor: '#CCF2F7'  
          },
          {
            label: 'Dia',
            data:[
              30,
              25,
              15,
              40,
              35,
              45,
              20,
              10,
              15,
              10,
              20,
              60
            ],
            backgroundColor: '#CCF2F7'  
          },
          {
            label: 'Mês',
            data:[
              40,
              50,
              80,
              25,
              20,
              30,
              70,
              120,
              50,
              30,
              45,
              50
            ],
            backgroundColor: '#CCF2F7'
          },
          {
            label: 'Ano',
            data:[
              100,
              150,
              200,
              300,
              100,
              120,
              350,
              240,
              140,
              80,
              100,
              200
            ],
            backgroundColor: '#CCF2F7'
          }
        ]
      }
    }
  }

  static defaultProps = {
    // displayTitle:true,
    // displayLegend: true,
    // legendPosition:'right',
  }

  render(){
    return (
      <div className="container_graficoDemanda">
        <div className="container_grafico-conteudoDemanda">
          {/* <div className="container_buttonsGrafico-demanda">
            <div className="buttonsGrafico">
              <ButtonsGrafico value="Hora" backgroundColor='Grey'/>
              <ButtonsGrafico value="Dia" backgroundColor='Grey'/>
              <ButtonsGrafico value="Mês" backgroundColor='Grey'/>
              <ButtonsGrafico value="Ano" backgroundColor='Grey'/>
            </div>
          </div> */}
          <div className="grafico">
            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '8px'}}>
              <h3 className="grafico_textos">Demanda</h3>
              <Line data={this.state.chartData} options={{title:{responsive: true, maintainAspectRatio: true}}} width={600} height={115} />
              <p className="grafico_textos">Mês</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GraficoDemanda;