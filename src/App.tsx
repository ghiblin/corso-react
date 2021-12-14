import ComponentTodoList from "./components/TodoList";
import FunctionalTodoList from "./functional/TodoList";

function App() {
  return (
    <>
      <ComponentTodoList />
      <hr />
      <FunctionalTodoList />
    </>
  );
}

export default App;
