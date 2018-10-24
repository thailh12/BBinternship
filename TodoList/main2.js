class Todo {
  constructor(selector) {
    this.el = document.querySelector(selector);
    this.el.innerHTML = this.constructor.template;
    this.el.addEventListener(
      'click',
      function(e) {
        if (e.target.tagName === 'LI') {
          e.target.classList.toggle('checked');
        }
        if (e.target.tagName === 'BUTTON') {
          let li = document.createElement('li');
          let inputValue = this.querySelector('#input').value;
          // let inputValue = document.getElementById('input').value;
          let t = document.createTextNode(inputValue);
          let span = document.createElement('SPAN');
          let txt = document.createTextNode('\u00D7');
          span.className = 'close';
          span.appendChild(txt);
          li.appendChild(span);
          li.appendChild(t);
          this.appendChild(li);
          this.querySelector('#input').value = '';

          let close = document.getElementsByClassName('close');
          for (let i = 0; i < close.length; i++) {
            close[i].onclick = function() {
              let div = this.parentElement;
              div.style.display = 'none';
            };
          }
        }
      },
      false
    );
  }
}

Todo.template = `
<h2>Todo List</h2>
 <div class="header">
<input id="input" type="text" placeholder="to do">
<button class="addBtn" >add</button>
</div>

<ul id="list"></ul>`;

new Todo('.app', { data: [{ title: 'task 1', done: false, priority: 2 }] });
new Todo('.app2');
new Todo('.app3');
