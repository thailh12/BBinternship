import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import { Provider } from 'unstated';
import Login from './components/Login';
import Register from './components/Register';

export class Root extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Form} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </HashRouter>
    );
  }
}
