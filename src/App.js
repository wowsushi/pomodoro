import React from 'react'
import { HashRouter, Route } from 'react-router-dom'

import './App.css';
import Home from './containers/Home.js'
import Todos from './containers/Todos.js'
import Analytics from './containers/Analytics.js'
import Ringtones from './containers/Ringtones.js'


class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Route exact path="/" component={Home} />
        <Route path="/todos" component={Todos} />
        <Route path="/analytics" component={Analytics} />
        <Route path="/ringtones" component={Ringtones} />
      </HashRouter>
    )
  }
}

export default App;
