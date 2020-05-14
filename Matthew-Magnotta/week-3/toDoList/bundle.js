(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var fxns = require('./fxns')
var handlers = require('./handlers.js')



},{"./fxns":2,"./handlers.js":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
var fxns = require('./fxns')

const form = document.getElementById('toDoItemForm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.getElementById('toDoItem');
 
  const text = input.value.trim();
  
  if (text !== '') {
    fxns.addTodo(text);
    input.value = '';
    input.focus();
  }
  fxns.createHTML(fxns.todoItems,text)
  const toDoItemDivRemove = document.querySelectorAll('.toDoItemClass')
  for (let i = 0; i < toDoItemDivRemove.length; i++) {

    // var remove = function(){
    //   this.remove();
    // };
   toDoItemDivRemove[i].addEventListener('click', fxns.removeTodo, false)
 }

});
 module.exports
},{"./fxns":2}]},{},[1]);
