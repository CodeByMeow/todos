import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const [state] = useTodo();
  const { todos } = state;
  return (
    <div className="todo-list">
      <h2>TODO</h2>
      {todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;
