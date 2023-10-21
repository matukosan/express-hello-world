const express = require('express')
const app = express()
const port = 8080
const host = '0.0.0.0'

app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send({
    message: 'Hello World!',
    timestamp: new Date()
  })
})

app.listen(port, host, () => {
  console.log(`Example app listening on ${host}:${port}`)
})