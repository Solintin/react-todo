import React, { Component } from 'react';
import PropTypes from 'prop-types';

/** Individual todo item.
 * 
 * Has buttons for delete and mark-done/un-done.
 */

class Todo extends Component {
  static propTypes = {
    handleEdit: PropTypes.func,
    handleDelete: PropTypes.func,
    handleMarkDone: PropTypes.func,
    handleMarkNotDone: PropTypes.func,
    content: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
  };

  handleDelete = () => { this.props.handleDelete(this.props.id) }
  handleMarkEdit = () => { this.props.handleMarkEdit(this.props.id) }
  handleMarkDone = () => { this.props.handleMarkDone(this.props.id, true) }
  handleMarkNotDone = () => { this.props.handleMarkDone(this.props.id, false) }

  render() {
    return (
      <div>
        {this.props.done ? <s>{this.props.content}</s> : this.props.content}
        <button onClick={this.handleDelete}>Del</button>
        <button onClick={this.handleMarkEdit}>Edit</button>
        {!this.props.done
          ? <button onClick={this.handleMarkDone}>Done</button>
          : <button onClick={this.handleMarkNotDone}>Undo</button>}
      </div>
    )
  }
}

export default Todo;