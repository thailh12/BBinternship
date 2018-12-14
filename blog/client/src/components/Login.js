import React from 'react';
import User from '../containers/UserContainer';
import { Link } from 'react-router-dom';

export default class Login extends React.PureComponent {
  handleChangeField(key, ev) {
    User.state[key] = ev.target.value;
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
        <div>
          Don't have account?{' '}
          <Link to="/register" title="register">
            register
          </Link>
        </div>
        <button
          onClick={() => User.login()}
          className=" form-control btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }
}
