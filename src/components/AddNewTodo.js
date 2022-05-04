import React, { Component } from 'react';

class AddNewTodo extends Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
  }
  render() {
    const { onAddNew } = this.props;
    return (
      <div className='todo-new'>
        <h2>ADD ITEM</h2>
        <input type="text" placeholder='New Item Title' ref={this.inputRef} />
        <button onClick={() => {
          onAddNew(this.inputRef.current.value);
          this.inputRef.current.value = "";
        }}>Add</button>
      </div>
    );
  }
}

export default AddNewTodo;
