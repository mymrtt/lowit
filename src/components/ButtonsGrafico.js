import React, {Component} from 'react';

export class ButtonsGrafico extends Component {

  ChooseBackgroundColor = () =>{
    switch(this.props.backgroundColor){
      case 'Grey': 
        return '##F8F8F8';
      default:
        return '#93DEE8';
    }
  }

  render(){
    return(
    <div className="buttonsGrafico">
      <button className="btns" style={{backgroundColor: this.ChooseBackgroundColor()}}>{this.props.value}</button>
    </div>
    );
  }
}

export default ButtonsGrafico;