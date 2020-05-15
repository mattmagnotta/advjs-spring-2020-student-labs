const yo = require('yo-yo')
const todoItems = []



function list (todoItems) {
  return yo`<ul>
    ${todoItems.map(function (item, index) {
      return yo`<li class=${item.completed ? 'done' : 'todo'}>
        <span>${item.text}</span>
        <button onclick=${() => done(index)}>Done</button>
      </li>`
    })}
  </ul>`
}

function addTodo (text) {
  const todo = {
    text,
    checked: false,
    id: Date.now()
  }
  todoItems.push(todo)
}
function removeTodo () {
  this.remove()
}

function createToDo (list) {
  list.map(function(item, index){
    return yo`<li>
    <span> ${list.text}</span>
    </li>`
  }
}

module.exports = {
  createHTML,
  addTodo,
  removeTodo,
  todoItems
}
