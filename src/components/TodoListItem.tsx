import React from "react";
import { Todo } from "../todo";

interface TodoListItemProps {
  todo: Todo;
  onDelete: (id: Todo["id"]) => void;
  style?: React.CSSProperties;
}
interface TodoListItemState {}

class TodoListItem extends React.Component<
  TodoListItemProps,
  TodoListItemState
> {
  constructor(props: TodoListItemProps) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      todo: { id, name },
      style,
    } = this.props;
    return (
      <li
        style={{
          ...style,
          padding: "1rem",
          borderRadius: "4px",
          backgroundColor: "white",
          color: "black",
        }}
        onClick={() => this.props.onDelete(id)}
      >
        {name}
      </li>
    );
  }
}

export default TodoListItem;
