import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditTodoForm extends Component {
  static propTypes = {
    handleEdit: PropTypes.func,
    id: PropTypes.string,
    content: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = { content: this.props.content };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleEdit({ content: this.state.content, id: this.props.id }
    )
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

export default EditTodoForm;
