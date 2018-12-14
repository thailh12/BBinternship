import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    const { text } = this.state;

    return (
      <div className="header">
        <h1>Todo List</h1>

        <form className="create">
          <input
            id="inputAdd"
            onChange={this._handleChangeText.bind(this)}
            value={text}
            type="text"
            placeholder="Title..."
          />
          <button
            onClick={this.handleOnClick.bind(this)}
            type="button"
            id="buttonAdd"
          >
            Add
          </button>
        </form>
      </div>
    );
  }

  _emptyInput() {
    this.setState({
      text: ''
    });
  }

  _handleChangeText(e) {
    const { value } = e.target;

    this.setState({
      text: value
    });
  }

  handleOnClick() {
    const { text } = this.state;
    this.props.onCreate(text);
    this._emptyInput();
  }
}

export default Header;
