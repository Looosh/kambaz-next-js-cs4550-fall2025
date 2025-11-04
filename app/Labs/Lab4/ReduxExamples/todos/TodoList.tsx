import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList() {
  const { todos } = useSelector((state: any) => state.todosReducer);

  return (
    <div id="wd-todo-list">
      <h2>Todo List</h2>
      <TodoForm />
      <ListGroup>
        {todos.map((todo: any) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ListGroup>
    </div>
  );
}
