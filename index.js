const express = require('express')
const app = express()
const bodyParser = require ('body-parser')
const port = 8000
let NextId = 5
app.use(bodyParser.json())
Let users = [
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
    if(req.body.name){
        const newUser= {
            id:NextId,
            name: req.body.name
        }}
        users: users.concat(newUser)
        NextId++
        res.send({
            message: 'created new user',
            newUser: newUser,
            Data: users
        })
        
})
app.listen(port, () => console.log(`example app listening on port ${port}`))
