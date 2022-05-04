import React, { Component } from 'react';

class FilterTodo extends Component {
  constructor() {
    super();
    this.filter = React.createRef();
  }
  render() {
    const { onFilter } = this.props;
    return (
      <div className='todo-filter'>
        <h3>Filter task(by name)</h3>
        <input type="search" ref={this.filter} onChange={(e) => onFilter(e.target.value)} />
        <button>Clear</button>
      </div>
    );
  }
}

export default FilterTodo;
