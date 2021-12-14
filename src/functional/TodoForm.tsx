import { useState, CSSProperties } from "react";
import { v4 } from "uuid";
import { Todo } from "../todo";

interface ReactFormProps {
  addTodo: (todo: Todo) => void;
  toggleList: () => void;
  style?: CSSProperties;
}

const TodoForm = ({ addTodo, toggleList, style }: ReactFormProps) => {
  const [name, setName] = useState<string>("");

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setName(evt.target.value);
  };

  const handleEnter = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    switch (evt.key) {
      case "Enter":
        handleAddTodo();
        break;
    }
  };

  const handleAddTodo = () => {
    if (!name) return;

    const todo: Todo = {
      id: v4(),
      name,
    };
    addTodo(todo);
    setName("");
  };

  return (
    <div style={{ ...style, display: "flex" }}>
      <input
        value={name}
        style={{ flex: 1 }}
        onChange={handleNameChange}
        onKeyDown={handleEnter}
      />
      <button
        style={{
          padding: "8px",
          width: "100px",
          borderRadius: "4px",
          backgroundColor: "#ccc",
          color: "white",
          marginLeft: "0.5rem",
        }}
        onClick={handleAddTodo}
      >
        Add
      </button>
      <button
        style={{
          padding: "8px",
          width: "100px",
          borderRadius: "4px",
          backgroundColor: "blue",
          color: "white",
          marginLeft: "0.5rem",
        }}
        onClick={toggleList}
      >
        Toggle
      </button>
    </div>
  );
};

export default TodoForm;
