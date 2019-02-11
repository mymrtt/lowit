import React, { Component } from 'react';
import {Treebeard} from 'react-treebeard';

var treeData = "";

class Filter extends Component {

  constructor(props){
    super(props);

    this.state = {
      jsonData: {},  
      itens: {}
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
    treeData = treeData + "\"id\":" + "\"" + item.id + "\", ";
    treeData = treeData + "\"name\":" + "\"" + item.name + "\"";
    if(item.hasOwnProperty("children")){
      treeData = treeData + ", \"children\":" + "[";
      for(let i = 0; i < item.children.length; i++) {
        this.recursiveData(item.children[i]);
        if(i < (item.children.length - 1)) {
          treeData = treeData + ",";
        }
      }
      treeData = treeData + "]";
    }

    if(item.hasOwnProperty("devices")){
      treeData = treeData + ", \"children\":" + "[";

      for(let i = 0; i < item.devices.length; i++) {
        //console.log("-", item.children[i].name );
        this.recursiveData(item.devices[i]);
        if(i < (item.devices.length - 1)) {
          treeData = treeData + ",";
        }
      }

      treeData = treeData + "]";
    }
    treeData = treeData + "}";

    // console.log("", treeData );
  }

  componentDidMount(){
    fetch('https://zh7k3p5og1.execute-api.us-east-1.amazonaws.com/testing/environments')
    .then(res => res.json())
    .then(json => {

      json.data.environments.map(item => (
        this.recursiveData(item, treeData)
      ));

      var cama = JSON.parse(treeData);
      this.setState({
        jsonData: cama
      });
    });
  }

  render(){
    return (

      <Treebeard
        data={this.state.jsonData}
        onToggle={this.onToggle}
      />
    );
  }

}

export default Filter;