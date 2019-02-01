import React, { Component } from 'react';

class FormSelectDash extends React.Component {
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
      <div className="container_formselectdash">
        <form onSubmit={this.handleSubmit}>
          <label className="container_formselectdash-label">
            <select className="formselectdash-select" onChange={this.handleChange}>
              <option value="">Prédio Inteiro</option>
              <option value="">1º Andar</option>
              <option value="">2º Andar</option>
              <option value="">3º Andar</option>
            </select>
            <select className="formselectdash-select">
              {/* opçao apos escolher o andar */}
              <option value="">Sala de Vídeo</option>
              <option value="">Hall</option>
              <option value="">Sala de Palestras</option>
              <option value="">Área de Lazer</option>
            </select>
            {/* opçao escolhida */}
            <input className="formselectdash-select" type="text" value="" name="" />
          </label>
          {/* <label>
            <input type="text" value="" name="andar" />
            <input type="text" value="Tomada 2" name="" />
          </label> */}
        </form>
      </div>
    );
  }
}

export default FormSelectDash;