import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import App from './App';
import Leitura from '../components/Leitura';
import Dashboard from '../components/Dashboard';
import Dados from '../components/Dados';
import NoMatch from './NoMatch';

export class Routes extends Component {
  render() {
    return (
      <main className="container">
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/leitura' component={Leitura}/>
          <Route path='/dashboard' component={Dashboard}/>
          <Route path='/dados' component={Dados}/>
          <Route component={NoMatch} />
        </Switch>
      </main>
    )
  }
};

export default Routes;