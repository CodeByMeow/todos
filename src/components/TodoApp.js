import React, { Component } from 'react';
import './todos.css';
import TodoList from './TodoList';
import AddNewTodo from './AddNewTodo';
import FilterTodo from './FilterTodo';

class TodoApp extends Component {
  state = {
    todos: [
      { id: 1, title: "Đi cafe với gấu", isCompleted: true },
      { id: 2, title: "Học ReactJS", isCompleted: false },
      { id: 3, title: "Học cách thổi nến", isCompleted: false },
      { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
      { id: 5, title: "Trade coin", isCompleted: false },
    ],
    query: "",
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

  onFilter = (query) => {
    this.setState({
      query: query,
    })
  }

  onClearClick = () => this.onFilter("");

  onDelete = (id) => {
    if (!this.state.todos.find(task => task.id === id)) return;
    this.setState({
      todos: [...this.state.todos].filter(task => task.id !== id)
    })

  }

  render() {
    const { todos, query } = this.state;
    return (
      <div className='todo-app'>
        <FilterTodo onFilter={this.onFilter} onClearClick={this.onClearClick} />
        <TodoList todos={todos} query={query} onDone={this.onDone} onDelete={this.onDelete} />
        <AddNewTodo onAddNew={this.onAddNew} />
      </div>
    );
  }
}

export default TodoApp;
