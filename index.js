const express = require('express')
const app = express()
const port = 8000

const users = [
  {
    id: 1,
    name: 'bara'
  },
  {
    id: 2,
    name: 'jo'
  },
  {
    id: 3,
    name: 'ajin'
  },
  {
    id: 4,
    name: 'sakti'
  }
]

app.get('/', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.get('/users', (req, res) => {
  res.send({
    message: 'list of users',
    data: users
  })
})
app.listen(port, () => console.log(`example app listening on port ${port}`))
