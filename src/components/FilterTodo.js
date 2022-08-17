const FilterTodo = ({ query, handleFilter, handleClearFilter }) => {
  return (
    <div className="todo-filter">
      <h3>Filter task(by name)</h3>
      <div className="input">
        <input
          type="search"
          onChange={(e) => handleFilter(e.target.value)}
          value={query}
        />
        <button onClick={handleClearFilter}>Clear</button>
      </div>
    </div>
  );
};

export default FilterTodo;
