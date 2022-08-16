import { useState } from "react";
import useTodo from "../hooks/useTodo";
import { addTodo } from "../store/todoActions";

const AddNewTodo = () => {
  const [state, dispatch] = useTodo();
  const [todoInput, setTodoInput] = useState("");
  const { todos } = state;
  const handleAddTodo = () => {
    if (todoInput.trim() === "") return;
    const autoId = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 1;
    const newTodo = {
      id: autoId,
      title: todoInput,
      isCompleted: false,
    };
    dispatch(addTodo(newTodo));
    setTodoInput("");
  };

  return (
    <div className="todo-new">
      <div className="input">
        <h2>ADD ITEM</h2>
        <input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="Enter your todo task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
    </div>
  );
};

export default AddNewTodo;
