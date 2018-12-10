import React from 'react';
import { API } from '../../config';
import { Articles } from './Articles';
import Form from './Form';
import axios from 'axios';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import User from '../containers/UserContainer';
import Article from '../containers/AritclesContainer';

import { Subscribe } from 'unstated';

export default class Home extends React.Component {
  componentDidMount() {
    Article.loadPost();
  }
  render() {
    const user = localStorage.getItem('user');

    return (
      <Subscribe to={[Article]}>
        {({ state: { articles }, loadPost, newPost, deletePost }) => {
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
                      <Link to="" title={user}>
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
                      <a
                        onClick={() => User.logOut()}
                        className="active"
                        href=""
                      >
                        logout
                      </a>
                    ) : null}
                  </li>
                </ul>
              </div>
              <div>
                {articles ? (
                  <div>
                    {articles.map((item, index) => {
                      return (
                        <Articles
                          {...item}
                          delete={Article.deletePost}
                          key={index}
                        />
                      );
                    })}
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
