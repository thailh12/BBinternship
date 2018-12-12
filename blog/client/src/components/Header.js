import React from 'react';
import { Link } from 'react-router-dom';
import User from '../containers/UserContainer';

export default class Header extends React.PureComponent {
  render() {
    const user = localStorage.getItem('user');

    return (
      <div>
        <div className="nav">
          <ul>
            <li>
              <a className="active" href="">
                Home
              </a>
            </li>
            <li>
              <Link to={`/post`} title="Post">
                Post
              </Link>
            </li>
            <li>
              {user ? (
                <Link to="/mypost" title={user}>
                  {user}
                </Link>
              ) : (
                <Link to={`/login`} title="Login">
                  login
                </Link>
              )}
            </li>
            <li>
              {user ? (
                <a onClick={() => User.logOut()} className="active" href="">
                  logout
                </a>
              ) : null}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
