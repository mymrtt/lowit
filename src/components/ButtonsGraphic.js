import React, { Component } from 'react';

class ButtonsGraphic extends Component {

  render(){
    return(
      <button className="btns" option={this.props.option} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default ButtonsGraphic;