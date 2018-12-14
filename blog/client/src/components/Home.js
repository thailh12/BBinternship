import React from 'react';
import { Articles } from './Articles';

import '../styles/Home.css';

import Article from '../containers/AritclesContainer';

import { Subscribe } from 'unstated';

export default class Home extends React.PureComponent {
  componentDidMount() {
    Article.loadPost();
  }
  render() {
    return (
      <Subscribe to={[Article]}>
        {({ state: { articles } }) => {
          return (
            <div>
              {articles ? (
                <div>
                  {articles.map((item, index) => {
                    return <Articles {...item} key={index} />;
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
