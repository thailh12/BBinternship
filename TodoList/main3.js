const app = document.querySelector('.app');

const data = [
  { title: 'task 1', done: false, priority: 2 },
  { title: 'task 2', done: false, priority: 2 },
  { title: 'task 3', done: false, priority: 1 },
  { title: 'task 4', done: false, priority: 3 }
];

class ToDo {
  constructor(selector) {
    this.data = data;
    this.el = document.querySelector(selector);
    this.el.innerHTML = this.constructor.template;
    this.form = this.el.querySelector('.form');
    this.taskList = this.el.querySelector('.task-list');
    this.title = this.el.querySelector('.title');
    this.sortData();
    this.el.onclick = e => {
      this.handleButtonClick(e);
    };
    this.el.onchange = e => {
      this.hanleOnChange(e);
    };
    this.render();
  }

  removeItem(index) {
    this.data.splice(index, 1);
    this.sortData();
    this.render();
  }

  addNew(item) {
    item = this.title.value;
    this.data.push({ title: item, done: false, priority: 2 });
    this.form.style.display = '';
    this.sortData();
    this.render();
  }

  hanleOnChange(e) {
    if (e.target.matches('input[type="checkbox"]')) {
      const parent = e.target.parentNode.parentNode;
      const index = parseInt(parent.dataset.index);
      this.data[index].done = e.target.checked;
    } else if (e.target.matches('select[name="priority"]')) {
      let index = parseInt(e.target.dataset.index);
      this.data[index].priority = parseInt(e.target.value);
      this.sortData();
      this.index = this.data[index].priority;
      this.render();
    }
  }

  handleButtonClick(e) {
    if (e.target.className === 'addBtn') this.addNew();
    if (e.target.matches('.close')) {
      const index = e.target.parentNode.dataset.index;
      this.removeItem(index);
    }
  }

  sortData() {
    this.data.sort((a, b) => {
      return b.priority - a.priority;
    });
  }

  render() {
    this.taskList.innerHTML = '';
    this.data.forEach((item, index) => {
      let taskCard = `<div class='card'>
                                <div class='task' data-index="${index}">
                                    <div>
                                        <input type="checkbox" ${
                                          item.done ? 'checked' : ''
                                        } />
                                        <span>${item.title}</span>
                                    </div>
                                    <div class="close" data-index="${index}">x</div>
                                </div>
                                <select data-index="${index}" name="priority" id="priority" class="priority">
                                        <option value="3" ${
                                          item.priority == 3 ? 'selected' : ''
                                        }>High</option>
                                        <option value="2" ${
                                          item.priority == 2 ? 'selected' : ''
                                        }>Normal</option>
                                        <option value="1" ${
                                          item.priority == 1 ? 'selected' : ''
                                        }>Low</option>
                                    </select>
                            </div>`;
      let div = document.createElement('div');
      div.innerHTML = taskCard;
      this.taskList.appendChild(div);
    });
  }
}

ToDo.template = `
    <header class="banner">
    <h1>To-do List</h1>
    </header>
    <div class='form'>
        <input id="input" class="title" type='text' name='task'>
        <button class="addBtn">Add task</button>
    </div>
    <div class="task-list"></div>

`;

new ToDo('.app');
new ToDo('.app2')
