import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import './stylesheets/main.scss';
import * as routes from "./UiConfigs/routes";

import Navigation from './components/presentational/Navigation';
import Landing from './components/container/Landing';
class App extends Component{
    render(){
        return (
            <div className="appContainer">
              <Navigation/>
              <Switch>
                    <Route
                        exact path={routes.LANDING}
                        component={Landing}

                    />
                </Switch>
            </div>
          );
    }
}
export default App;
