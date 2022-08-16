const TodoItem = ({ todo }) => {
  const { title } = todo;
  return (
    <div className="task">
      <p
        style={{
          textDecoration: "line-through",
          color: "#444444",
        }}
      >
        {title}
      </p>
      <button className="hover">delete</button>
    </div>
  );
};

export default TodoItem;
