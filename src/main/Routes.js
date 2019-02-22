import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from '../components/Home';
import Leitura from '../components/Leitura';
import Dashboard from '../components/Dashboard';
import Dados from '../components/Dados';
import NoMatch from './NoMatch';

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/leitura' component={Leitura}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/dados' component={Dados}/>
        <Route component={NoMatch} />
      </Switch>
    )
  }
};

export default Routes;