import React, { useState } from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import "./App.css";
import InputField from "./component/InputField";
import TodoList from "./component/TodoList";
import { Todo } from "./model/model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleInputChange = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    )
      return;

      let add, 
      active = todos, 
      complete = completedTodos

      if (source.droppableId === 'todosList') {
        add = active[source.index]
        active.splice(source.index, 1)
      } else {
        add = complete[source.index]
        complete.splice(source.index, 1)
      }

      if (destination.droppableId === 'todosList') {
        active.splice(destination.index, 0, add)
      } else {
        complete.splice(destination.index, 0, add)
      }

      setCompletedTodos(complete)
      setTodos(active)
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <span className="heading">2dofi</span>
        <InputField
          todo={todo}
          setTodo={setTodo}
          handleInput={handleInputChange}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
