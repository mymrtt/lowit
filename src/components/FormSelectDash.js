import React, { Component } from 'react';

class FormSelectDash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <select value={this.state.value} onChange={this.handleChange} title="Prédio Inteiro">
            <option value="">1º Andar</option>
            <option value="">2º Andar</option>
            <option value="">3º Andar</option>
          </select>
        </label>
      </form>
    );
  }
}

export default FormSelectDash;