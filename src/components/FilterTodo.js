import React, { Component } from 'react';

class FilterTodo extends Component {
  constructor() {
    super();
    this.filter = React.createRef();
  }

  onClear = () => this.filter.current.value = "";
  render() {
    const { onFilter, onClearClick } = this.props;
    return (
      <div className='todo-filter'>
        <h3>Filter task(by name)</h3>
        <input type="search" ref={this.filter} onChange={(e) => onFilter(e.target.value)} />
        <button onClick={() => {
          onClearClick();
          this.onClear();
        }}>Clear</button>
      </div>
    );
  }
}

export default FilterTodo;
