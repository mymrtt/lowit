import React, { Component } from 'react';

import FormSelectDash from './FormSelectDash';

class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      inputext: '',
      value: '',
      toggleState: true
    };
  }

  changeColor = () => {
    this.setState({
      toggleState: !this.state.toggleState
    })
  }

  updateInpuText(event){
    this.setState({inputext: event.target.value.substr(0, 20)});
  }

  render(){
    return(
      <div className="ContainerDashboard" onload="plot();">
        <div>
          <FormSelectDash />
        </div>
        <div>
          <div>

            
            <div>
              <div className="containerTabela">
                <div className="ContainerTabelaCabecalho">
                  <div className="ContainerTabelaCabecalhoItems">
                    <p className="HeaderTable">Dispositivos</p>
                    <p className="HeaderTable">Corrente</p> 
                    <p className="HeaderTable">Tensão</p> 
                    <p className="HeaderTable">Unidade</p> 
                    <p className="HeaderTable">Temperatura</p>
                    <p className="HeaderTable">Ligar/Desligar</p> 
                  </div>
                </div>
                <div className="ContainerTabelaConteudo">
                  {/* {
                    this.state.pedidos.map(item => {
                      return (
                        <div>
                          <p className="CelTable" value={item['dispositivos']} />
                          <p className="CelTable" value={item['corrente']} /> 
                          <p className="CelTable" value={item['tensão']} /> 
                          <p className="CelTable" value={item['unidade']} />
                          <p className="CelTable" value={item['temperatura']} />
                          <p className="CelTable" value={item['ligardesligar']} />
                        </div>
                      )
                    })
                  } */}
                </div>
              </div>
            </div>














          </div>
          <div>
            {/* dispositivos */}
          </div>
        </div>
      
        
        {/* DISPOSITIVO 1 */}
        <div>
          <div>
            <label for="dispositivo1">Disposito 1</label>
            <input for="input_dispositivo1" type="number" className="inpuTextDashboard" name={this.state.inputext} value="" onChange={this.updateInpuText.bind(this)} onInput="plot();"/>
            <p></p>
          </div>
          <div className="container_btns">
            <input type="button" value="button" name="btn1" style={{backgroundColor: this.state.toggleState === true ? '#F44336' : '#4CAF50'}}
            className="btnOnOff" onClick={this.changeColor} />
          </div>
        </div>
        {/* DISPOSITIVO 1 */}
        {/* DISPOSITIVO 2 */}
        <div>
          <label for="dispositivo2">Disposito 2</label>
          <input for="input_dispositivo2" type="number" className="inpuTextDashboard" value={this.state.inputext} onChange={this.updateInpuText.bind(this)} onInput="plot();" />
          <p></p>
        </div>
        {/* DISPOSITIVO 2 */}
        {/* DISPOSITIVO 3 */} 
        <div>
        <label for="dispositivo3">Disposito 3</label>
          <input for="input_dispositivo3" type="number" className="inpuTextDashboard" value={this.state.inputext} onChange={this.updateInpuText.bind(this)} onInput="plot();" />
          <p></p>
        </div>
        {/* DISPOSITIVO 3 */}
        {/* DISPOSITIVO 4 */}
        <div> 
          <label for="dispositivo4">Disposito 4</label>
          <input for="input_dispositivo4" type="number" className="inpuTextDashboard" value={this.state.inputext} onChange={this.updateInpuText.bind(this)} onInput="plot();" />
          <p></p>
        </div>
        {/* DISPOSITIVO 4 */}
        {/* DISPOSITIVO 5 */}
        <div>
          <label for="dispositivo5">Disposito 5</label>
          <input for="input_dispositivo5" type="number" className="inpuTextDashboard" value={this.state.inputext} onChange={this.updateInpuText.bind(this)} onInput="plot();" />
          <p></p>
        </div>
        {/* DISPOSITIVO 5 */}
        {/* DISPOSITIVO 6 */}
        <div>
          <label for="dispositivo6">Disposito 6</label> 
          <input for="input_dispositivo6" type="number" className="inpuTextDashboard" value={this.state.inputext} onChange={this.updateInpuText.bind(this)} onInput="plot();" />
          <p></p>
        </div>
        {/* DISPOSITIVO 6 */}
      </div>
    );
  }
}

export default Dashboard;