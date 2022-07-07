import React from "react";
import { Todo } from "../model/model";
import "./styles.css";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos__heading">Yet 2do</span>

        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      <div className="todos remove">
        <span className="todos__heading">2dofied </span>

        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
