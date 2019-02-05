import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class GraphicDashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets:[
          {
            label: 'Consumo por dia',
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
            label: 'Consumo por mês',
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

  render(){
    return (
      <div className="container_graphicDashboard">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              // text:'Consumo '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default GraphicDashboard;