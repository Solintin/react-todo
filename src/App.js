import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import axios from 'axios';

class App extends Component {
  // todos: list of todo objects
  // loadError: error object or null if no error
  // editing: list of ids of todos being edited
  state = { 'todos': [], loadError: null, editing: [] };

  componentDidMount() {
    axios.get("http://localhost:3010/api")
      .then(res => this.setState({ todos: res.data }))
      .catch(err => { this.setState({ loadError: err }) })
  }

  handleNewTodo = (todo) => {
    this.setState((state, props) => ({ todos: [...state.todos, todo] }));
    axios.post("http://localhost:3010/api", todo);
  }

  handleDelete = (id) => {
    this.setState((state, props) => ({ todos: state.todos.filter(t => t.id !== id) }))
    axios.delete(`http://localhost:3010/api/${id}`);
  }

  handleMarkDone = (id, isDone) => {
    this.setState((state, props) => ({
      todos: this.state.todos.map(t => (t.id === id) ? { ...t, done: isDone } : t)
    }))
    axios.post(`http://localhost:3010/api/${id}`, { done: isDone });
  }

  handleMarkEdit = (id) => {
    this.setState((state, props) => ({ editing: [...state.editing, id] }))
  }

  handleEdit = (todo) => {
    this.setState((state, props) => ({
      todos: state.todos.map(t => t.id === todo.id ? { ...t, ...todo } : t),
      editing: state.editing.filter(id => todo.id !== id)
    }));
    axios.post(`http://localhost:3010/api/${todo.id}`, todo);
  }

  render() {
    if (this.state.loadError) {
      return <div className="App">Error loading todos!</div>
    } else {
      return (
        <div className="App">
          <TodoList
            todos={this.state.todos}
            handleDelete={this.handleDelete}
            handleMarkEdit={this.handleMarkEdit}
            handleEdit={this.handleEdit}
            handleMarkDone={this.handleMarkDone}
            editing={this.state.editing}
          />
          <NewTodoForm handleNewTodo={this.handleNewTodo} />
        </div>
      );
    }
  }
}

export default App;
