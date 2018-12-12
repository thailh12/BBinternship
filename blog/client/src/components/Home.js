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
          );
        }}
      </Subscribe>
    );
  }
}
