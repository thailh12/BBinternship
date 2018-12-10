import React from 'react';
import { API } from '../../config';
import axios from 'axios';
import styled from 'styled-components';
import Article from '../containers/AritclesContainer';
import { Redirect } from 'react-router-dom';
const Wrapper = styled.div`
  margin: 10px;
`;
export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  handleChangeField(key, ev) {
    this.setState({
      [key]: ev.target.value
    });
  }
  handleSubmit() {
    const { title, body } = this.state;
    const token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = token;
    axios.post(`${API}/articles`, {
      title,
      body
    });
  }
  render() {
    const { title, body } = this.state;
    const token = localStorage.getItem('token');

    return (
      <Wrapper>
        {token ? (
          <div className="col-12 col-lg-6 offset-lg-3">
            <input
              onChange={ev => this.handleChangeField('title', ev)}
              value={title}
              className="form-control my-3"
              placeholder="Article Title"
            />
            <textarea
              onChange={ev => this.handleChangeField('body', ev)}
              className="form-control my-3"
              placeholder="Article Body"
              value={body}
            />

            <button
              onClick={() => Article.newPost(this.state)}
              className=" form-control btn btn-primary"
            >
              Submit
            </button>
          </div>
        ) : (
          <Redirect to="/login" />
        )}
      </Wrapper>
    );
  }
}
