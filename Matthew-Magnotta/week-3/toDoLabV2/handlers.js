const yo = require('yo-yo')

var fxns = require('./fxns.js')

var addBtn = document.getElementById('addBtn')
var doneBtn = 
addBtn.addEventListener('click', () => {
  var text = document.getElementById('itemInput').value 
  fxns.addToList(text)
  var element = fxns.list(fxns.toDoItems)
  document.getElementById('toDoItemContainer').appendChild(element)
})
