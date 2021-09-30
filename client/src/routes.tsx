import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import InitialPage from './pages/InitialPage/index'
import Pokedex from './pages/Pokedex/index'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <InitialPage />
      </Route>
      <Route path="/pokedex">
        <Pokedex />
      </Route>
    </Switch>
  </Router>
)

export default Routes
