import useTodo from "../hooks/useTodo";
import { filterTodo } from "../store/todoActions";
const FilterTodo = () => {
  const [_, dispatch] = useTodo();

  const handleFilter = (e) => {
    const { value } = e.target;
    dispatch(filterTodo(value.toLowerCase()));
  };

  return (
    <div className="todo-filter">
      <h3>Filter task(by name)</h3>
      <div className="input">
        <input type="search" onChange={handleFilter} />
        <button>Clear</button>
      </div>
    </div>
  );
};

export default FilterTodo;
