import React from 'react';
import User from '../containers/UserContainer';
import { Link } from 'react-router-dom';

export default class Register extends React.Component {
  state = { username: '', password: '', cfpassword: '' };
  handleChangeField(key, ev) {
    this.state[key] = ev.target.value;
  }
  render() {
    return (
      <div className="col-12 col-lg-6 offset-lg-3">
        <input
          onChange={ev => this.handleChangeField('username', ev)}
          className="form-control my-3"
          placeholder="username"
        />
        <input
          onChange={ev => this.handleChangeField('password', ev)}
          className="form-control my-3"
          placeholder="password"
          type="password"
        />
        <input
          onChange={ev => this.handleChangeField('cfpassword', ev)}
          className="form-control my-3"
          placeholder="confirm password"
          type="password"
        />
        <div>
          Have account?{' '}
          <Link to="/login" title="login">
            login
          </Link>
        </div>
        <button
          onClick={() => User.register(this.state)}
          className=" form-control btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}
