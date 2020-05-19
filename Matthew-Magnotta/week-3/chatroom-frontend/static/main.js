const yo = require('yo-yo')

console.log('hello world!')

function postMessage (text,username,room) {
  console.log('posting message')
  console.log(username)
  fetch('/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: text, date: new Date(), username: username , room: room})
  })
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

function getMessages () {
  fetch('/messages')
    .then(response => response.json())
    .then(data => {
      // console.log(data)
      yo.update(el, list(data))
    })
}

function list (items) {
  console.log(items)
  return yo`<ul>
  ${items.map(function (item) {
    return yo`<li>${item.username} : ${item.text}</li>`
  })}
  </ul>`
}
// setInterval(function(){ 
//   getMessages()
//  }, 1000);
 
 function getUsername() {
  var txt;
  var username = prompt("Enter your username:", "Harry Potter");
  if (username == null || username == "") {
    txt = "User cancelled the prompt.";
  } else {
    txt = username 
  }
  
  document.getElementById("newUsername").innerHTML = txt;
  return username
}

function filterRoom(room){
  fetch('/messages')
    .then(response => response.json())
    .then(data => {
      data = data.filter(item => item.room == room )
      yo.update(el, list(data))
    })

}
getUsername()
getMessages()
const el = list([])

document.getElementById('messageHistory').append(el)



document.getElementById('messageForm').onsubmit = function (e) {
  e.preventDefault()
  const text = document.getElementById('formValue').value
  const username = document.getElementById('newUsername').innerHTML
  const room = document.getElementById('room').value
  console.log(text)
  console.log(username)

  postMessage(text,username,room)
}


document.getElementById('filterForm').onsubmit = function (e) {
  e.preventDefault()
  const filterValue = document.getElementById('roomFilter').value
  console.log(filterValue)

  filterRoom(filterValue)
}
