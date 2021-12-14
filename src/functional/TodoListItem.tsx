import { CSSProperties } from "react";
import { Todo } from "../todo";

interface TodoListItemProps {
  todo: Todo;
  onDelete: (id: Todo["id"]) => void;
  style?: CSSProperties;
}

const TodoListItem = ({
  todo: { id, name },
  style,
  onDelete,
}: TodoListItemProps) => {
  return (
    <li
      style={{
        ...style,
        padding: "1rem",
        borderRadius: "4px",
        backgroundColor: "white",
        color: "black",
      }}
      onClick={() => onDelete(id)}
    >
      {name}
    </li>
  );
};

export default TodoListItem;
