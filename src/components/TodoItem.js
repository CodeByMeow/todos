import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo, onDone, onDelete } = this.props;
    const { id, title, isCompleted } = todo;
    if (isCompleted) {
      return (
        <div className="task">
          <p style={{
            textDecoration: "line-through",
            color: "#444444",
          }} >{title}
          </p>
          <button className='hover' onClick={() => { onDelete(id) }}>delete</button>
        </div>
      )
    }

    return (
      <div className="task">
        <p onClick={() => onDone(id)}>{title}</p>
        <button className='hover' onClick={() => { onDelete(id) }}>delete</button>
      </div>
    )
  }
}

export default TodoItem;
