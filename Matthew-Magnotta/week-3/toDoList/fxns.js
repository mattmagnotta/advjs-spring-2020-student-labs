let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };
  todoItems.push(todo);
}
function removeTodo() {
  this.remove()
}

function createHTML(list,text){
  var toDoItemDiv = document.createElement("DIV")
  var lastElement = list[list.length -1]
  var toDoContainer = document.getElementById('todo')
  toDoItemDiv.innerHTML = lastElement.text
  toDoItemDiv.setAttribute('class', 'toDoItemClass')
  toDoContainer.after(toDoItemDiv)
}


module.exports = {
  createHTML,
  addTodo,
  removeTodo,
  todoItems,
}