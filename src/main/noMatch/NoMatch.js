import React, {Component} from 'react';

import Header from '../../components/Header';
import Menu from '../../components/Menu';

import './NoMatch.css';

export class NoMatch extends Component {
  render(){
    return(
      <div className="noMatch">
        <Header />
        <Menu />
        <h1 className="noMatch_title">Conteúdo não encontrado!</h1>
      </div>
    );
  }
};

export default NoMatch;