import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <div className="d-flex gap-2 mb-3">
      <FormControl
        value={todo.title}
        onChange={(e) =>
          dispatch(setTodo({ ...todo, title: e.target.value }))
        }
      />
      <Button
        variant="warning"
        id="wd-update-todo-click"
        onClick={() => dispatch(updateTodo(todo))}
      >
        Update
      </Button>
      <Button
        variant="success"
        id="wd-add-todo-click"
        onClick={() => dispatch(addTodo(todo))}
      >
        Add
      </Button>
    </div>
  );
}
