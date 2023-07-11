const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log('Hello World!', new Date());
  res.send({
    message: 'Hello World!',
    timestamp: new Date()
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})