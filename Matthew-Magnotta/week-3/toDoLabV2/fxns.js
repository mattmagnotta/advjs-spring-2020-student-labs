const yo = require('yo-yo')

const toDoItems = []

function addToList(text){
  const todo = {
    text,
    completed: false,
  }
  toDoItems.push(todo)
}

function list (items) {
  return yo`<ul>
    ${items.map(function (item, index) {
      return yo`<li class=${item.completed ? 'done' : 'todo'}>
        <span>${item.text}</span>
        ${item.completed ? '' : yo`<button onclick=${() => done(index)}>Done</button>`}
      </li>`
    })}
  </ul>`
}
function done (index) {
  toDoItems[index].completed = true
  yo.update(element, list(toDoItems))
}
console.log(toDoItems)
var element = list(toDoItems)
console.log(element)
document.body.appendChild(element)
module.exports = {
  addToList,
  list,
  done,
  toDoItems,
}