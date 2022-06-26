import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import TodoList from './component/TodoList';
import { Todo } from './model/model';

const App: React.FC =() => {

  const [todo, setTodo] = useState<string> ('')
  const [todos, setTodos] = useState<Todo[]> ([])

  const handleInputChange = (e: React.FormEvent) => {
    e.preventDefault() 

    if(todo) {
      setTodos([...todos, {id:Date.now(), todo: todo, isDone: false }])
      setTodo('')
    }
  }

  console.log(todo)
  console.log(todos);
  

  return (
    <div className="App">
      <span className='heading'>2d0fi</span>
      <InputField todo={todo} setTodo={setTodo} handleInput={handleInputChange}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
