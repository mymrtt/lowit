import React from 'react';

import axios from 'axios';

export default class TabelaDispositivos extends React.Component {

  state = {
    persons: [],
  }

  componentDidMount() {
    axios.get(`https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/environments`)
      .then(res => {
        console.log(res)
        const persons = res.data.data.environments;
        console.log(persons)
        console.log('-------------------')
        this.setState({ persons });
      })
  }

  renderDevices = (salas) => {
    return(
      salas.devices.map(devices =>
        <li>
          {devices.name}
        </li>  
      )
    )
  }

  renderSalas = (andar) => {
    return(
      andar.children.map(salas => 
      <li>{salas.name}
        {this.renderDevices(salas)}
      </li>)
    )
  }

  renderAndar = (person) => {
    return(
      person.children.map(andar => 
      <li>{andar.name}
        {this.renderSalas(andar)}
      </li>)
    )
  }

  render() {
    return (
      <div>
        <ul>
          { this.state.persons.map(person =>
            <li>{person.name}
              {this.renderAndar(person)}
            </li>)}
        </ul>
      </div>
    )
  }
}