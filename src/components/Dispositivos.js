import React, { Component } from 'react';

class Dispositivo extends Component {
  constructor(props){
    super(props);
    this.state = {
      toggleState: true
    }
  }

  // changeColor(){
  //   if(this.state.toggleState === true){
  //     return '#F44336'
  //   }
  //   return '#4CAF50'
  // }

  changeColor = () => {
    this.setState({
      toggleState: !this.state.toggleState
    })
  }

  render() {
    return(
      <div className="container_dispositivos">
        <p>Dispositivos Conectados</p> 
        <div>
          <div className="container_btns">
            <div className="btn">
              <p>Disposito 1</p>
              <input type="button" value="button" name="btn1" style={{backgroundColor: this.state.toggleState === true ? '#F44336' : '#4CAF50'}}
            className="btnOnOff" onClick={this.changeColor} />
            </div>
            <div className="btn">
              <p>Disposito 2</p>
              <input type="button" value="button" name="btn2" style={{backgroundColor: this.state.toggleState === true ? '#F44336' : '#4CAF50'}}
            className="btnOnOff" onClick={this.changeColor} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dispositivo;