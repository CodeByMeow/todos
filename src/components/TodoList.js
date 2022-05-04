import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onDone } = this.props;
    const todoItems = todos.map(task => <TodoItem todo={task} onDone={onDone} key={task.id} />);
    return (
      <div className='todo-list'>
        <h2>TODO</h2>
        {todoItems}
      </div>
    );
  }
}

export default TodoList;
