const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')
const axios = require('axios');
const request = require('request');

app.use(cors())

app.get('/data', (req, res) => {
  request.get('http://codequiz.azurewebsites.net/data', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

    body = JSON.parse(body)
    console.log('body:', body);
    res.json( body )
  })
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})