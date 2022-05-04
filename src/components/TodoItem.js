import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    const { todo, onDone } = this.props;
    const { id, title, isCompleted } = todo;
    if (isCompleted) {
      return <p style={{
        textDecoration: "line-through",
        color: "#444444",
      }} >{title}</p>
    }

    return <p onClick={() => onDone(id)}>{title}</p>
  }
}

export default TodoItem;
