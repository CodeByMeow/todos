import { useEffect } from "react";
import "./App.css";
import TodoApp from "./components/TodoApp";
import todoServices from "./services/todoServices";
import TodoProvider from "./store/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <TodoApp />
    </TodoProvider>
  );
}

export default App;
