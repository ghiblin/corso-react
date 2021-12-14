import { useState } from "react";
import { Todo } from "../todo";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [showList, setShowList] = useState(true);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (id: Todo["id"]) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleList = () => {
    setShowList(!showList);
  };

  const renderTodos = (todos: Todo[]) => {
    if (!todos.length) {
      return (
        <div
          style={{
            backgroundColor: "red",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          No todo to show
        </div>
      );
    }
    return (
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onDelete={removeTodo}
            style={{ marginBottom: "0.5rem" }}
          />
        ))}
      </ul>
    );
  };

  return (
    <div
      style={{
        backgroundColor: "azure",
        maxWidth: "450px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "2rem",
      }}
    >
      <h3>Functional version</h3>
      <TodoForm
        addTodo={addTodo}
        toggleList={toggleList}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      />
      {showList ? renderTodos(todos) : null}
    </div>
  );
};

export default TodoList;
