const express = require('express')
const path = require('path')

// set static folder
app.use(express.static(path.join(__dir, 'public')))

const app = express()
const port = 3000


app.listen(port, () => console.log('server running on: ' + port))