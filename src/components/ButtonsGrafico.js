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

  changeState = (e) =>{
    var newValue = 'hour';

    switch(this.props.option){
      case 'hour': 
        newValue = 'hour';
        break;
      case 'day': 
        newValue = 'day';
      break;
      case 'month': 
        newValue = 'month';
        break;
      case 'year': 
        newValue = 'year';
        break;
    }

    this.setState(state => ({
      demandFilterSelected: newValue
    }));

    console.log('clique:' + newValue);
  }



  render(){
    return(
      <button className="btns" onClick={(e) => this.changeState(e)} style={{backgroundColor: this.ChooseBackgroundColor()}}>{this.props.value}</button>
    );
  }
}

export default ButtonsGrafico;