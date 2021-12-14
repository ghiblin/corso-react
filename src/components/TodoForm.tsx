import React from "react";
import { v4 } from "uuid";
import { Todo } from "../todo";

interface ReactFormProps {
  addTodo: (todo: Todo) => void;
  toggleList: () => void;
  style?: React.CSSProperties;
}
interface ReactFormState {
  name: string;
}

class TodoForm extends React.Component<ReactFormProps, ReactFormState> {
  constructor(props: ReactFormProps) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState((state) => ({
      ...state,
      name: evt.target.value,
    }));
  };

  handleEnter = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    switch (evt.key) {
      case "Enter":
        this.handleAddTodo();
        break;
    }
  };

  handleAddTodo = () => {
    const { name } = this.state;
    if (!name) return;
    const todo: Todo = {
      id: v4(),
      name,
    };
    this.props.addTodo(todo);
    this.setState((state) => ({ ...state, name: "" }));
  };

  render(): React.ReactNode {
    const { style } = this.props;
    const { name } = this.state;
    return (
      <div style={{ ...style, display: "flex" }}>
        <input
          value={name}
          style={{ flex: 1 }}
          onChange={this.handleNameChange}
          onKeyDown={this.handleEnter}
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
          onClick={this.handleAddTodo}
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
          onClick={this.props.toggleList}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default TodoForm;
