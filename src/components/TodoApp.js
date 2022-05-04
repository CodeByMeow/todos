import React, { Component } from 'react';
import './todos.css';
import TodoList from './TodoList';
import AddNewTodo from './AddNewTodo';
import Filter from './FilterTodo';
import FilterTodo from './FilterTodo';

class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, title: "Đi cafe với gấu", isCompleted: true },
      { id: 2, title: "Học ReactJS", isCompleted: false },
      { id: 3, title: "Học cách thổi nến", isCompleted: false },
      { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
      { id: 5, title: "Trade coin", isCompleted: false },
    ]
  }

  onAddNew = (title) => {
    if (!title) return;
    const { todos } = this.state;
    const newItem = { id: todos.length + 1, title, isCompleted: false };
    this.setState({
      todos: [...todos, newItem],
    })
  }

  onDone = (id) => {
    const { todos } = this.state;
    const selected = todos.findIndex(task => task.id === id);
    if (selected === -1) return;
    const todos_temp = [...todos];
    todos_temp[selected].isCompleted = true;
    this.setState({
      todos: todos_temp,
    })
  }

  onFilter = (keyword) => {

    const { todos } = this.state;
    const todos_temp = [...todos];
    const filters = todos_temp.filter(task => task.title.includes(keyword));
    if (filters.length > 0) {
      return this.setState({
        todos: filters,
      })
    }

    this.setState({
      todos: todos_temp,
    })

  }
  render() {
    const { todos } = this.state;
    return (
      <div className='todo-app'>
        <FilterTodo onFilter={this.onFilter} />
        <TodoList todos={todos} onDone={this.onDone} />
        <AddNewTodo onAddNew={this.onAddNew} />
      </div>
    );
  }
}

export default TodoApp;
