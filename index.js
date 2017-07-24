const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World v1.1!')
})


app.get('/healthz', function (req, res) {
  res.send('OK')
})


app.get('/readiness', function (req, res) {
  res.send('OK')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})