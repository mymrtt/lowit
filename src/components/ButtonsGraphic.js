import React, {Component} from 'react';

class ButtonsGraphic extends Component {

  // ChooseBackgroundColor = () =>{
  //   switch(this.props.backgroundColor){
  //     case 'Grey': 
  //       return '##F8F8F8';
  //     default:
  //       return '#93DEE8';
  //   }
  // }
  
  render(){
    return(
      <button className="btns" option={this.props.option} onClick={this.props.onClick}>{this.props.value}</button>
    );
  }
}

export default ButtonsGraphic;