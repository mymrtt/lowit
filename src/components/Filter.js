import React, { Component } from 'react';
import {Treebeard, decorators} from 'react-treebeard';
import style from './FilterTheme';
// import BtnOn from '../Assets/btnonpqn.png';
// import BtnOff from '../Assets/btnoffpqn.png';


var treeData = "";

export function updateOnOff(nome, id, position) {

  var url = 'https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/devices/'+ id;



  (async () => {
    const rawResponse = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"status": position})
    });
    const content = await rawResponse.json();

    if(content !== null && content.data.updated === true){
      if(position === 1) alert(nome + ' ligado com sucesso!');
      else alert(nome + ' desligado com sucesso!');

    } else {

      if(position === 1) alert('ocorreu um erro ao ligar ' + nome);
      else alert('ocorreu um erro ao desligar ' + nome);

    }

  })();
}

var modifiedDecorators = Object.assign({},decorators, { Header: (props) => {

  if(props.node.id !== '-1'){
    return (
      <div style={props.style.base}>
        <div style={props.style.title} className="container_filter">
        {props.node.name}
            <a href='#' className="buttonoff" onClick={() => updateOnOff(props.node.name, props.node.id, 1)}> ● </a>
            <a href='#' className="buttonon" onClick={() => updateOnOff(props.node.name, props.node.id, 0)}>●</a>
        </div>
      </div>
    );
  } else {
    return (
      <div style={props.style.base}>
        <div style={props.style.title}>
          {props.node.name}
        </div>
      </div>
    );
  }

}});

class Filter extends Component {

  constructor(props){
    super(props);
    this.state = {
      jsonData: {},  
    };

    this.recursiveData = this.recursiveData.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled){
    if(this.state.cursor){this.state.cursor.active = false;}
    node.active = true;
    if(node.children){ node.toggled = toggled; }
    this.setState({ cursor: node });
  }

  recursiveData(item, data){
    treeData = treeData + "{";

    var tmpId = '';

    if(typeof item.device_id !== 'undefined'){
      tmpId = tmpId + item.device_id; 
    };

    tmpId = tmpId + '-' + item.id;
    treeData = treeData + "\"id\":" + "\"" + tmpId + "\", ";

    tmpId = '';

    treeData = treeData + "\"name\":" + "\"" + item.name + "\"";
      if(item.hasOwnProperty("children") || item.hasOwnProperty("devices") ){
        treeData = treeData + ", \"children\":" + "[";

        if(item.hasOwnProperty("children")){
          for(let i = 0; i < item.children.length; i++) {
            this.recursiveData(item.children[i]);
            if(i < (item.children.length - 1)) {
              treeData = treeData + ",";
            }
          }
        }

        if(item.hasOwnProperty("devices")){
          if(item.hasOwnProperty("children")){
            treeData = treeData + ",";
          }

          for(let i = 0; i < item.devices.length; i++) {
          //console.log("-", item.children[i].name );
            this.recursiveData(item.devices[i]);
            if(i < (item.devices.length - 1)) {
              treeData = treeData + ",";
            }
          }
        }

        treeData = treeData + "]";
      }

    treeData = treeData + "}";

  }

  componentDidMount(){
    fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/environments?connectable_only=true')
    .then(res => res.json())
    .then(json => { 

      treeData = "";

      json.data.environments.map(item => (
        this.recursiveData(item, treeData)
      ));

      var data = JSON.parse(treeData);
      console.log(data);
      this.setState({
        jsonData: data
      })
    });
  }

  render(){
    return (
      <Treebeard
        data={this.state.jsonData}
        onToggle={this.onToggle}
        onClick={this.handleDay}
        style={style}
        decorators={modifiedDecorators}
      />
    );
  }
}

export default Filter;