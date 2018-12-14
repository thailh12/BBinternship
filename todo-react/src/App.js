import React, { Component } from 'react';
import './style.css';
import Header from './Header';
import TodoList from './TodoList';
import { getTodos, saveTodos } from './services/StorageServices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    const todos = getTodos();

    this.setState({
      todos: todos
    });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="TodoApp">
        <Header onCreate={this.handleOnCreate.bind(this)} />
        <TodoList
          todos={todos}
          onToggle={this.handleToggle.bind(this)}
          onDeleteTodo={this.handleDelete.bind(this)}
        />
      </div>
    );
  }

  handleToggle(id) {
    const { todos } = this.state;
    const todo = todos[id];

    todo.done = !todo.done;

    this.setState({
      todos: todos
    });

    this._saveToLocalStorage();
  }

  handleDelete(id) {
    const { todos } = this.state;

    todos.splice(id, 1);

    this.setState({
      todos: todos
    });

    this._saveToLocalStorage();
  }

  handleOnCreate(text) {
    const { todos } = this.state;

    todos.push({
      text: text,
      done: false
    });

    this.setState({
      todos: todos
    });

    this._saveToLocalStorage();
  }

  _saveToLocalStorage() {
    const { todos } = this.state;

    saveTodos(todos);
  }
}

export default App;
