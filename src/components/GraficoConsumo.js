import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

import ButtonsGrafico from './ButtonsGrafico';

class GraficoConsumo extends Component{
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
            backgroundColor: '#00717F'  
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
            backgroundColor: '#93DEE8'  
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
            backgroundColor: '#00717F'
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
            backgroundColor: '#00717F'
          }
        ]
      }
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    // location:''
  }

  chartData = canvas => {
    const data = this.state.data;

    return data;
  }

  render(){
    return (
      <div className="container_grafico">
        <div className="container_buttonsGrafico">
          <input className="input_grafico" type="text" />
          <div className="buttonsGrafico">
            <ButtonsGrafico value="Hora" backgroundColor='Grey'/>
            <ButtonsGrafico value="Dia" backgroundColor='Grey'/>
            <ButtonsGrafico value="Mês" backgroundColor='Grey'/>
            <ButtonsGrafico value="Ano" backgroundColor='Grey'/>
          </div>
        </div>
        <div style={{ position: "relative", width: '95%', height: '50%', backgroundColor: '#fff', justifyContent: 'flex-end' }}>
          <h3>Consumo</h3>
          <Line
            data={this.state.chartData}
            options={{
              title:{
                display:this.props.displayTitle,
                // text:'Consumo '+this.props.location,
                  
                fontSize:20
              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosition
              }
            }}
          />
        </div>
      </div> 
    )
  }
}

export default GraficoConsumo;