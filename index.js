const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 8000
let nextId = 5
app.use(bodyParser.json())
let users = [
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

app.post('/users', (req, res) => {
  const newUser = {
    id: nextId,
    name: req.body.name
  }

  const newUsers = users.concat(newUser)
  nextId++
  users = newUsers
  res.send({
    message: 'created new user',
    newUser: newUser,
    users: users
  })
})

app.delete('/users', (req, res) => {
  users = []
  res.send({
    message: 'All User has been deleted',
    users: users
  })
})

app.delete('/users/id:', (req, res) => {
  const id = number(req.params.id)
  users = users.filter(user => user.id !== id)
  res.send({ message: 'one user has been removed', id: id })
})

app.put('/users/id:', (req, res) => {
  const id = number(req.params.id)
  const newName = req.body.name

  const newUsers = users.map(user => {
    if (user.id === id) {
      user.name = newName
      return user
    } else {
      return user
    }
  })

  res.send({
    message: 'one user has been updated',
    id: id,
    newName: newName
  })
})

app.listen(port, () => console.log(`example app listening on port ${port}`))
