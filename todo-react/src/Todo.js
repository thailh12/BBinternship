import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { text, done } = this.props.data;

    return (
      <li className={done ? 'done' : ''}>
        <span onClick={this._handleClickToggle.bind(this)}>{text}</span>
        <span onClick={this._handleClickRemove.bind(this)} className="close">
          x
        </span>
      </li>
    );
  }

  _handleClickToggle() {
    this.props.onToggle();
  }

  _handleClickRemove() {
    this.props.onRemove();
  }
}

export default Todo;
