import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../model/model";
import "./styles.css";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({
  todos,
  setTodos,
  completedTodos,
  setCompletedTodos,
}) => {
  return (
    <div className="container">
      <Droppable droppableId="todosList">
        {(provided, snapshot) => (
          <div
            className= {`todos ${snapshot.isDraggingOver ? 'dragactive' : ''}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className="todos__heading">Yet 2do</span>

            {todos.map((todo, index) => (
              <TodoItem
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <Droppable droppableId="todosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${snapshot.isDraggingOver ? 'dragcomplete' : ''}`}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            <span className="todos__heading">2dofied </span>

            {completedTodos.map((todo, index) => (
              <TodoItem
                index={index}
                todo={todo}
                key={todo.id}
                todos={todos}
                setTodos={setCompletedTodos}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default TodoList;
