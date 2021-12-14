import ComponentTodoList from "../components/TodoList";
import FunctionalTodoList from "../functional/TodoList";

const Todos = () => (
  <>
    <h1 style={{ textAlign: "center" }}>Todo List</h1>
    <ComponentTodoList />
    <hr />
    <FunctionalTodoList />
  </>
);

export default Todos;
