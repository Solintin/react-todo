import React from 'react';

/** Individual todo item.
 * 
 * Has buttons for delete and mark-done/un-done.
 */

class Todo extends React.Component {
  handleDelete = () => { this.props.handleDelete(this.props.id) }
  handleMarkDone = () => { this.props.handleMarkDone(this.props.id, true) }
  handleMarkNotDone = () => { this.props.handleMarkDone(this.props.id, false) }

  render() {
    return (
      <div>
        {this.props.done ? <s>{this.props.content}</s> : this.props.content}
        <button onClick={this.handleDelete}>Del</button>
        {!this.props.done
          ? <button onClick={this.handleMarkDone}>Done</button>
          : <button onClick={this.handleMarkNotDone}>Undo</button>}
      </div>
    )
  }
}

export default Todo;