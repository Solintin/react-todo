import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

class NewTodoForm extends Component {
  static propTypes = {
    handleNewTodo: PropTypes.func,
  };

  state = { 'content': "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleNewTodo(
      { content: this.state.content, id: uuid.v4(), done: false }
    )
    this.setState({ 'content': "" });
  };

  onContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input onChange={this.onContentChange} value={this.state.content} />
      </form>
    )
  }
}

export default NewTodoForm;
