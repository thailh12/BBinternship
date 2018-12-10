import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 10px;
`;
export const Articles = props => {
  return (
    <Wrapper>
      <div className="card my-3">
        <div className="card-header">{props.title}</div>
        <div className="card-body">{props.body}</div>
        <div className="card-footer">
          author: <i>{props.author}</i>
        </div>
        <div style={{ width: '30%' }}>
          <button
            className="btn btn-danger"
            onClick={() => props.delete(props._id)}
          >
            Delete
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
