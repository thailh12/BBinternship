import React from 'react';
import './styles.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { name: 'Angular', category: 'todo' },
        { name: 'React', category: 'todo' },
        { name: 'Vue', category: 'complete' },
        { name: 'NodeJS', category: 'complete' }
      ]
    };
  }

  onDragStart(ev, id) {
    ev.dataTransfer.setData('id', id);
  }

  onDragOver(ev) {
    ev.preventDefault();
  }

  onDrop(ev, cat) {
    let id = ev.dataTransfer.getData('id');

    let tasks = this.state.tasks.filter(task => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    this.setState({
      ...this.state,
      tasks
    });
  }

  render() {
    var tasks = {
      todo: [],
      complete: []
    };

    this.state.tasks.forEach(t => {
      tasks[t.category].push(
        <div
          key={t.name}
          onDragStart={e => this.onDragStart(e, t.name)}
          draggable
          className="draggable"
        >
          {t.name}
        </div>
      );
    });

    return (
      <div className="container-drag">
        <div>React Drag and Drop</div>
        <div
          className="todo"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => {
            this.onDrop(e, 'todo');
          }}
        >
          <span className="task-header">TODO</span>
          {tasks.todo}
        </div>
        <div
          className="droppable"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, 'complete')}
        >
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}
