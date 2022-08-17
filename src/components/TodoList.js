import useTodo from "../hooks/useTodo";
import TodoItem from "./TodoItem";
const TodoList = ({ query }) => {
  const [state] = useTodo();
  const { todos } = state;

  const hasKeyWord = (needed, keyword) => {
    return needed.toLowerCase().includes(keyword.toLowerCase());
  };

  const listItem =
    query !== ""
      ? todos.reduce((list, todo) => {
        return hasKeyWord(todo.title, query)
          ? [...list, <TodoItem key={todo.id} todo={todo} />]
          : [...list];
      }, [])
      : todos.map((todo) => <TodoItem key={todo.id} todo={todo} />);

  return (
    <div className="todo-list">
      <h2>TODO</h2>
      {listItem}
    </div>
  );
};

export default TodoList;
