// Create web server
// Create a route to handle GET requests to /comments
// Read the comments.json file
// Send the comments back to the client as JSON

const express = require('express')
const app = express()
const fs = require('fs')

app.get('/comments', (req, res) => {
  fs.readFile('comments.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).send('An error occurred')
    }
    res.send(data)
  })
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})