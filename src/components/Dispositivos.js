// import React, { Component } from 'react';

// class Dispositivos extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       toggleState: true,
//       inputext: '',
//       value: '',
//     }
//   }

//   changeColor = () => {
//     this.setState({
//       toggleState: !this.state.toggleState
//     })
//   }

//   updateInpuText(event){
//     this.setState({inputext: event.target.value.substr(0, 20)});
//   }

//   render() {
//     return(
//       <div className="container_dispositivos" onLoad="plot();">
//         <div className="container_dispositivos-blocos">
//           {/* um bloco */}
//           <div className="dispositivos_blocos">
//             <input  type="number" className="input_dispositivos" name={this.state.inputext} value="" onChange={this.updateInpuText.bind(this)} onInput="plot();"/>
//           </div>
//           {/* um bloco */}
//           {/* dois blocos */}
//           <div className="dispositivos_blocos">
//             <input type="number" className="input_dispositivos" name={this.state.inputext} value="" onChange={this.updateInpuText.bind(this)} onInput="plot();"/>
//           </div>
//           {/* dois blocos */}
//           {/* 3 blocos */}
//           <div className="dispositivos_blocos">
//             <input type="number" className="input_dispositivos" name={this.state.inputext} value="" onChange={this.updateInpuText.bind(this)} onInput="plot();"/>
//           </div>
//           {/* 3 blocos */}
//           {/* 4 blocos */}
//           <div className="dispositivos_blocos">
//             <input type="number" className="input_dispositivos" name={this.state.inputext} value="" onChange={this.updateInpuText.bind(this)} onInput="plot();"/>
//           </div>
//           {/* 4 blocos */}
//           {/* 5 blocos */}
//           <div className="dispositivos_blocos">
//             <div className="container_btns">
//               <input type="button" value="button" name="btn1"  style={{backgroundColor: this.state.toggleState === true ? '#F44336' : '#4CAF50'}}
//               className="btnOnOff" onClick={this.changeColor} />
//             </div>
//           </div>
//           {/* 5 blocos */}
//         </div>
//       </div>
//     );
//   }
// }

// export default Dispositivos;