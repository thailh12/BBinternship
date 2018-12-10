import React from 'react';
import { Container } from 'unstated';
import axios from 'axios';
import { API } from '../../config';
import { Redirect, withRouter } from 'react-router-dom';

class UserContainer extends Container {
  state = {
    username: '',
    password: ''
  };
  register = async info => {
    let data = Object.assign({
      username: info.username,
      password: info.password
    });
    const url = `${API}/user/`;
    axios.post(url, data);
    window.location.href = 'http://localhost:3000/#/login';
  };
  login = async () => {
    const url = `${API}/user/login`;
    const body = Object.assign({
      username: this.state.username,
      password: this.state.password
    });

    let res = await axios.post(url, body);
    if (typeof res.data === 'object') {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.user);
      window.location.href = 'http://localhost:3000/';
    }
  };
  logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };
}

let User = new UserContainer();

export default User;
