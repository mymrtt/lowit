import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

// import Home from './Home';
import Leitura from '../screens/Leitura';
import Dashboard from '../screens/Dashboard';
import Dados from '../screens/Dados';
import NoMatch from './NoMatch';

import { PrivateRoute } from '../_components';
import { LoginPage } from '../LoginPage';

export class Routes extends Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path='/' component={Dashboard} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path='/leitura' component={Leitura}/>
        <PrivateRoute path='/dashboard' component={Dashboard}/>
        <PrivateRoute path='/dados' component={Dados}/>
        <Route component={NoMatch} />
      </Switch>
    )
  }
};

export default Routes;