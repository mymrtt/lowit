import React, { Component } from 'react';
import BtnOnpqnIMG from '../Assets/btnonpqn.png';
import BtnOffpqnIMG from '../Assets/btnoffpqn.png';

class ButtonsDashboard extends Component {

  ChangeBackgroundButton = () => {
    switch(this.props.backgroundImage){
      case 'BtnOn':
        return {BtnOnpqnIMG};
      default:
        return {BtnOffpqnIMG};
    }
  }

  render(){
    return(
      <div>
        <input className="btnOff_dashboard" type="button" style={{backgroundImage: this.ChangeBackgroundButton()}}>{this.props.value}</input>
      </div>
    );
  }
}

export default ButtonsDashboard;