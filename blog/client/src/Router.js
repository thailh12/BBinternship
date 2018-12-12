import React from 'react';
import { BrowserRouter, Route, Switch, HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Form from './components/Form';
import { Provider } from 'unstated';
import Login from './components/Login';
import Register from './components/Register';
import Mypost from './components/Mypost';
import Header from './components/Header';

export class Root extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/post" component={Form} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mypost" component={Mypost} />
        </div>
      </HashRouter>
    );
  }
}
