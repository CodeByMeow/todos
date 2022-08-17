import "./todos.css";
import TodoList from "./TodoList";
import AddNewTodo from "./AddNewTodo";
import FilterTodo from "./FilterTodo";
import { useState } from "react";

const TodoApp = () => {
  const [query, setQuery] = useState("");
  const handleFilter = (query) => {
    setQuery(query);
  };
  const handleClearFilter = () => {
    setQuery("");
  };
  return (
    <div className="todo-app">
      <FilterTodo
        query={query}
        handleFilter={handleFilter}
        handleClearFilter={handleClearFilter}
      />
      <TodoList query={query} />
      <AddNewTodo />
    </div>
  );
};

export default TodoApp;
