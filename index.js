const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => {
  res.send({
    message: 'hello world'
  })
})
app.listen(port, () => console.log(`example app listening on port ${port}`))
