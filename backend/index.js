const express = require('express')
const { createTodo, updateTodo } = require('./types')
const { todos } = require('./db')
const app = express()

app.use(express.json())

app.post('/todo', async function (req, res) {
  const createPayload = req.body
  const parsepayLoad = createTodo.safeParse(createPayload)
  if (!parsepayLoad.success) {
    res.status(411).json({ msg: 'you sent the wrong input' })
    return
  }

  await todos.create({
    title: createPayload.title,
    description: createPayload.description,
    completed: false,
  })
  res.json({ msg: 'Todo created' })
})

app.get('/todos', async function (req, res) {
  const todo = await todos.find({})
  res.json({ todo })
})

app.put('/completed', async function (req, res) {
  const updatePayload = req.body
  const parsepayLoad = updateTodo.safeParse(updatePayload)
  if (!parsepayLoad.success) {
    res.status(411).json({ msg: 'You sent the wrong inputs' })
    return
  }

  await todos.updateOne({ _id: req.body.id }, { $set: { completed: true } })
  res.json({ msg: 'Todo mark as completed' })
})

app.listen(3000, function () {
  console.log('Server started')
})
