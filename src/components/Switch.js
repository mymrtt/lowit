import React, { Component } from 'react';
import {Treebeard} from 'react-treebeard';
import style from './FilterSwitch';

var treeData = "";

class Switch extends Component {
  constructor(props){
    super(props);
    this.state = {
      jsonDataSwitch: {},  
    };

    this.recursiveData = this.recursiveData.bind(this);
    this.onToggle = this.onToggle.bind(this);
  }

  onToggle(node, toggled){
    if(this.state.cursorSwitch){this.setate.cursorSwitch.active = false;}
    node.active = true;
    if(node.children){ node.toggled = toggled; }
    this.setState({ cursorSwitch: node });

    var tmp = {    
      id : node.id,
      name : node.name
    }

    this.props.action(tmp);
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
    fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/environments')
    .then(res => res.json())
    .then(json => { 

      treeData = "";

      json.data.environments.map(item => (
        this.recursiveData(item, treeData)
      ));

      var data = JSON.parse(treeData);
      this.setState({
        jsonDataSwitch: data
      })

    });
  }

  render(){
    return (
      <Treebeard
        data={this.state.jsonDataSwitch}
        onToggle={this.onToggle}
        style={style}
      />
    );
  }
}

export default Switch;