import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, FormControl } from "react-bootstrap";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

// Define the shape of a single todo
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Shape of the todos slice
interface TodosState {
  todo: Todo;
  todos: Todo[];
}

// Root state for Redux
interface RootState {
  todosReducer: TodosState;
}

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
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
