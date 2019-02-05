import React, { Component } from 'react';

class FormSelectDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="container_formSelectDashboard">
        <form onSubmit={this.handleSubmit}>
          <label className="container_formSelectDashboard-label">
            <select className="formSelectDashboard-select" onChange={this.handleChange}>
              <option value="">Prédio Inteiro</option>
              <option value="">1º Andar</option>
              <option value="">2º Andar</option>
              <option value="">3º Andar</option>
            </select>
            <select className="formSelectDashboard-select">
              {/* opçao apos escolher o andar */}
              <option value="">Sala de Vídeo</option>
              <option value="">Hall</option>
              <option value="">Sala de Palestras</option>
              <option value="">Área de Lazer</option>
            </select>
            {/* opçao escolhida */}
            <input className="formSelectDashboard-select" type="text" value="" name="" />
          </label>
        </form>
      </div>
    );
  }
}

export default FormSelectDashboard;