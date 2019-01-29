import React, {Component} from 'react';

export class ButtonsMenu extends Component {

  ChooseBackgroundColor = () =>{
    switch(this.props.backgroundColor){
      case 'DarkBlue': 
        return '#00717F';
      default:
        return '#93DEE8';
    }
  }

  render(){
    return(
    <div className="container_buttons">
      <button className="btns_menu" style={{backgroundColor: this.ChooseBackgroundColor()}}>{this.props.value}</button>
    </div>
    );
  }
}

export default ButtonsMenu;