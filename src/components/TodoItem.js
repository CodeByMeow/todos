import useTodo from "../hooks/useTodo";
import { deleteTodo, toggleTodo } from "../store/todoActions";

const TodoItem = ({ todo }) => {
  const { id, title, isCompleted } = todo;
  const [_, dispatch] = useTodo();
  const handleToggleTodo = () => {
    dispatch(toggleTodo(id));
  };
  return (
    <div className="task">
      {isCompleted ? (
        <p
          style={{
            textDecoration: "line-through",
            color: "#444444",
          }}
          onClick={handleToggleTodo}
        >
          {title}
        </p>
      ) : (
        <p onClick={handleToggleTodo}>{title}</p>
      )}
      <button style={{ color: "red" }} onClick={() => dispatch(deleteTodo(id))}>
        &times;
      </button>
    </div>
  );
};

export default TodoItem;
