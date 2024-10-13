import { useState } from 'react'
import './App.css'

//this component renders a todo list, with task name, completion state and uses the ID as a key

type Todo = {
  text: string
  completed: boolean
}

function App() {
  const [todoList, setTodoList] = useState<Todo[]>([])

  const addTodo = (text: string) => {
    setTodoList([...todoList, { text, completed: false }])
  }

  const removeTodo = (text: string) => {
    setTodoList(todoList.filter((todo) => todo.text !== text))
  }

  return (

    <div className="App">
      <h1>Todo List</h1>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.text}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => setTodoList(todoList.map((t) => (t.text === todo.text ? { ...t, completed: !t.completed } : t)))}
            />
            {todo.text}
          </li>
        ))}
      </ul>
      <input
        
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            const input = e.target as HTMLInputElement;
            addTodo(input.value);
            input.value = '';
          }
        }}
      />
    </div>

  )
}

export default App
