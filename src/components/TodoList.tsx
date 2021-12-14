import React from "react";
import TodoForm from "./TodoForm";
import TodoListItem from "./TodoListItem";

export interface Todo {
  id: string;
  name: string;
}

interface TodoListProps {}
interface TodoListState {
  todos: Todo[];
  showList: boolean;
}

class TodoList extends React.Component<TodoListProps, TodoListState> {
  constructor(props: TodoListProps) {
    super(props);
    this.state = {
      todos: [],
      showList: true,
    };
  }

  addTodo = (todo: Todo) => {
    this.setState((state) => ({
      ...state,
      todos: [...state.todos, todo],
    }));
  };

  removeTodo = (id: Todo["id"]) => {
    this.setState((state) => ({
      ...state,
      todos: state.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleList = () => {
    this.setState((state) => ({
      ...state,
      showList: !state.showList,
    }));
  };

  render(): React.ReactNode {
    const { todos, showList } = this.state;
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
        <TodoForm
          addTodo={this.addTodo}
          toggleList={this.toggleList}
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
        />
        {showList ? this.renderTodos(todos) : null}
      </div>
    );
  }

  renderTodos(todos: Todo[]) {
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
            onDelete={this.removeTodo}
            style={{ marginBottom: "0.5rem" }}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
