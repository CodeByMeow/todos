import useTodo from "../hooks/useTodo";
import { filterTodo } from "../store/todoActions";
const FilterTodo = () => {
  const [state, dispatch] = useTodo();
  const { query } = state;

  const handleFilter = (e) => {
    const { value } = e.target;
    dispatch(filterTodo(value.toLowerCase()));
  };

  const clearFilter = () => dispatch(filterTodo(""));

  return (
    <div className="todo-filter">
      <h3>Filter task(by name)</h3>
      <div className="input">
        <input type="search" onChange={handleFilter} value={query} />
        <button onClick={clearFilter}>Clear</button>
      </div>
    </div>
  );
};

export default FilterTodo;
