var fxns = require('./fxns')

const form = document.getElementById('toDoItemForm')
form.addEventListener('submit', event => {
  event.preventDefault()
  const input = document.getElementById('toDoItem')

  const text = input.value.trim()
  if (text !== '') {
    fxns.addTodo(text)
    input.value = ''
    input.focus()
  }
  fxns.createToDO(todoItems)
//   fxns.createHTML(fxns.todoItems, text)
//   const toDoItemDivRemove = document.querySelectorAll('.toDoItemClass')
//   for (let i = 0; i < toDoItemDivRemove.length; i++) {
//     // var remove = function(){
//     //   this.remove();
//     // };
//     toDoItemDivRemove[i].addEventListener('click', fxns.removeTodo, false)
//   }
// })

module.exports
