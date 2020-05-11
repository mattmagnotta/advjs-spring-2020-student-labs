var http = require('http')
var fs = require('fs')
var path = '/Users/matthewmagnotta/code/advjs-spring-2020-student-labs/Matthew-Magnotta/week-2/chatroom/messages.txt'
var util = require('./utility.js')
var express = require('express')
var server = express()
var port = 8000
var path = require('path')
var bodyParser = require('body-parser')
var trumpet = require('trumpet')
var tr = trumpet()
var through = require('through2')
// fs.readFile('./index.html', function (err, html) {
//   if (err) {
//     throw err 
//   }
//   http.createServer(function (req, res) {
//     res.write(html)
//     if (req.method === 'GET') {
//       var stream = fs.createReadStream(path)
//       stream.pipe(res)
//     }
//     if (req.method === 'POST') {
//       req.on('data', function (data) {
//         var time = util.dateToTime()
//         // var date = new Date()
//         let message = ''
//         message += '\n' + time + ': ' + data
//         fs.appendFile(path, message, (err) => {
//           if (err) throw err
//           console.log('The "message" was appended to file!')
//           res.end('successfully sent message')
//         })
//       })
//     }
//   }).listen(8000)
// })
server.use(bodyParser.urlencoded({ extended: true })); 
server.get('/', (req, res)=>{
  res.sendFile(path.join(__dirname + '/index.html'))
})

server.listen(port, () => {
  console.log('server listening on' + port)
})

server.post('/send_message/', (req, res) => {
  tr.pipe('/index.html')
  var ws = tr.select('.message').createWriteStream('/index.html')
  ws.end('text')

  fs.createReadStream(__dirname + '/index.html').pipe(tr)
  res.sendFile(path.join(__dirname + '/index.html'))
  
})