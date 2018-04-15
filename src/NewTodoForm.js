import React from 'react';
import uuid from 'uuid';

class NewTodoForm extends React.Component {
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
