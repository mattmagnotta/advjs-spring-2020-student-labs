const http = require('http')
const fs = require('fs')
const path = require('path')
const st = require('st')
const Router = require('http-hash-router')

const port = 8000
const MESSAGES_PATH = 'static/messages.json'

const mount = st({ path: path.join(__dirname, '/static'), url: '/static' })
const router = Router()

// going to /static/<file-name> will serve the file <file-name>
router.set('/static/*', mount)

// requests to /messages are either a GET or a POST
router.set('/messages', function (req, res) {
  if (req.method === 'GET') {
    getMessages(req, res)
  } else if (req.method === 'POST') {
    postMessage(req, res)
    
  } else {
    res.statusCode = 400
    res.end('unsupported operation')
  }
})

// this is the POST handler for /messages
// this function should write a new message to the file
function postMessage (req, res) {
  console.log('inside postmessage funciton')
  let data = ''
  req.on('data', function (chunk) {
    data += chunk
  })

  req.on('end', function () {
    // at this point, data should be the entire json payload of the request
    fs.readFile(MESSAGES_PATH, 'utf8', (err, file) => {
      if (err){
        console.log(err);
      } else {
        obj = JSON.parse(file); //now it an object
        obj.table.push(data); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(MESSAGES_PATH, json, 'utf8', (err) => {
          if (err) {
            console.log(err)
          }
        });
    };
  })
}) 
    // TODO: write code here to add the message to the messages file

    // After writing to the file, we need to send up a response
    res.statusCode = 200
    res.end('Message posted successfully')
}

// this is the GET handler for /messages
// this function should respond with the list of messages
function getMessages (req, res) {
  // TODO: write code here to get your messages from the file

  // here is an example of how your messages might be formatted
  console.log('inside getmessage funciton')
  // const exampleMessages = [
  //   { text: 'hello! This is an example message.', date: new Date() },
  //   { text: 'This is another message.', date: new Date() }
  // ]

  // here we set the response code to 200 (success), and the content type to json
  // then we send up the response by stringifying the messages array
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(exampleMessages))
}

const server = http.createServer((req, res) => {
  router(req, res, {}, function onError (err) {
    if (err) {
      res.statusCode = err.statusCode || 500
      res.end(err.message)
    }
  })
})

server.listen(port)

console.log('Server listening on port:', port)
