import React, {Component} from 'react';

import Menu from '../components/Menu';

export class NoMatch extends Component {
  render(){
    return(
      <div>
        <Menu />
        <h1 className="nomatch">Conteúdo não encontrado!</h1>
      </div>
    );
  }
};

export default NoMatch;