import { useState } from 'react'

export function CreateTodo() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value
          console.log(value)
          setTitle(value)
        }}
      ></input>
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value
          console.log(value)
          setTitle(value)
        }}
      ></input>
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch('http://localhost:3000/todo', {
            method: 'POST',
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              contentType: 'application/json',
            },
          }).then(async function (res) {
            const data = await res.json()
            console.log(data)
            alert('Todo added')
          })
        }}
      >
        Add a Todo
      </button>
    </div>
  )
}
