const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()

app.use(express.json())

app.post('/todo', function (req, res) {
  const createPayload = req.body
  const parsepayLoad = createTodo.safeParse(createPayload)
  if (!parsepayLoad.success) {
    res.status(411).json({ msg: 'you sent the wrong input' })
    return
  }
})

app.get('/todos', function (req, res) {})

app.put('/completed', function (req, res) {
  const updatePayload = req.body
  const parsepayLoad = updateTodo.safeParse(updatePayload)
  if (!parsepayLoad.success) {
    res.status(411).json({ msg: 'You sent the wrong inputs' })
    return
  }
})
