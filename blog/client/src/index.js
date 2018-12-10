import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { Root } from './Router';
import { Provider } from 'unstated';

ReactDOM.render(
  <Provider>
    <Root />
  </Provider>,
  document.getElementById('app')
);
