import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {
  render() {
    const { todos, onDone, query, onDelete } = this.props;
    const todoItems = todos
      .filter(task => task.title.toLowerCase().includes(query.toLowerCase()))
      .map(task => <TodoItem todo={task} onDone={onDone} key={task.id} onDelete={onDelete} />);
    return (
      <div className='todo-list'>
        <h2>TODO</h2>
        {todoItems}
      </div>
    );
  }
}

export default TodoList;
