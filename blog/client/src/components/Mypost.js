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

export default class Mypost extends React.Component {
  componentDidMount() {
    User.getMyPost();
  }
  render() {
    const user = localStorage.getItem('user');

    return (
      <Subscribe to={[User]}>
        {({ state: { post } }) => {
          return (
            <div>
              {post ? (
                <div>
                  {User.state.post.map((item, index) => {
                    console.log('1');
                    return (
                      <Articles
                        {...item}
                        delete={Article.deletePost}
                        owner={true}
                        key={index}
                      />
                    );
                  })}
                </div>
              ) : null}
            </div>
          );
        }}
      </Subscribe>
    );
  }
}
