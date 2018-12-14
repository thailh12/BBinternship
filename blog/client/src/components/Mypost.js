import React from 'react';
import { Subscribe } from 'unstated';

import { Articles } from './Articles';
import '../styles/Home.css';
import User from '../containers/UserContainer';

export default class Mypost extends React.PureComponent {
  componentDidMount() {
    User.getMyPost();
  }
  render() {
    return (
      <Subscribe to={[User]}>
        {({ state: { post } }) => {
          return (
            <div>
              {post ? (
                <div>
                  {User.state.post.map((item, index) => {
                    return (
                      <Articles
                        {...item}
                        delete={User.deletePost}
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
