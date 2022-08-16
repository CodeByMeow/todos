import "./todos.css";
import TodoList from "./TodoList";
import AddNewTodo from "./AddNewTodo";
import FilterTodo from "./FilterTodo";
import TodoProvider from "../store/TodoProvider";

const TodoApp = () => {
  return (
    <TodoProvider>
      <div className="todo-app">
        <FilterTodo />
        <TodoList />
        <AddNewTodo />
      </div>
    </TodoProvider>
  );
};

export default TodoApp;
