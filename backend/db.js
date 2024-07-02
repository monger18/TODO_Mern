const mongoose = require('mongoose')
const { boolean } = require('zod')

mongoose.connect(
  'mongodb+srv://rahulraj18sep200051:VfSLNDTHCH9wzLzS@cluster0.l14wczj.mongodb.net/'
)
const todoSchema =
  mongoose.Schema[
    {
      title: String,
      description: String,
      completed: Boolean,
    }
  ]

const todo = mongoose.model('todo', todoSchema)
module.exports = {
  todo,
}
