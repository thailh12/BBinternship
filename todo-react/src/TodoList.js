import React, {Component} from "react";
import Todo from "./Todo";
import PropTypes from "prop-types";

class TodoList extends Component {
    render() {
        const {todos} = this.props;

        return (
            <div className="main">
                <ul id="list">
                    {
                        todos.map((data, index) => {
                            return (
                                <Todo onToggle={this._handleToggle.bind(this, index)}
                                      onRemove={this._handleRemoveTodo.bind(this, index)} key={index} data={data}/>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }

    _handleToggle(id) {
        this.props.onToggle(id);
    }

    _handleRemoveTodo(id) {
        this.props.onDeleteTodo(id);
    }
}

TodoList.propTypes = {
    onToggle: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
};

export default TodoList;