import { useState } from "react";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";

// Define the shape of a Todo item
interface Todo {
  id: number;
  title: string;
}

// Define the shape of the entire Redux state
interface RootState {
  todosReducer?: {
    todos?: Todo[];
  };
}

export default function ArrayStateVariable() {
  // Properly type the selector
  const todos = useSelector(
    (state: RootState) => state.todosReducer?.todos || []
  );

  const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  console.log("Todos from Redux:", todos);

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>

      <ListGroup>
        {todos.map((todo) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>

      <hr />

      <button onClick={addElement}>Add Element</button>
      <ul>
        {array.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteElement(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />
    </div>
  );
}
