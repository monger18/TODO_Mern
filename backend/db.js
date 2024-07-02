const mongoose = require('mongoose')

mongoose.connect(
  'mongodb+srv://rahulraj18sep200051:VfSLNDTHCH9wzLzS@cluster0.l14wczj.mongodb.net/'
)
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
})

const todos = mongoose.model('todos', todoSchema)
module.exports = {
  todos,
}
