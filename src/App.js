import React, { Component } from 'react';
import TodoList from './TodoList';
import NewTodoForm from './NewTodoForm';
import axios from 'axios';


class App extends Component {
  state = { 'todos': [] };

  componentDidMount() {
    axios.get("http://localhost:3010/api")
      .then(res => this.setState({ todos: res.data }));
  }

  handleNewTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
    axios.post("http://localhost:3010/api", todo);
  }

  handleDelete = (id) => {
    this.setState({ todos: this.state.todos.filter(t => t.id !== id) })
    axios.delete(`http://localhost:3010/api/${id}`);
  }

  handleMarkDone = (id, isDone) => {
    this.setState({
      todos: this.state.todos.map(t => (t.id === id) ? { ...t, done: isDone } : t)
    })
    axios.post(`http://localhost:3010/api/${id}`, { done: isDone });
  }

  render() {
    return (
      <div className="App">
        <TodoList
          todos={this.state.todos}
          handleDelete={this.handleDelete}
          handleMarkDone={this.handleMarkDone}
        />
        <NewTodoForm handleNewTodo={this.handleNewTodo} />
      </div>
    );
  }
}

export default App;
