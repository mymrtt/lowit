import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// import Home from './Home';
import Leitura from '../screens/Leitura';
import Dashboard from '../screens/Dashboard';
import Dados from '../screens/Dados';
import NoMatch from './NoMatch';

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route path='/leitura' component={Leitura}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/dados' component={Dados}/>
        <Route component={NoMatch} />
      </Switch>
    )
  }
};

export default Routes;