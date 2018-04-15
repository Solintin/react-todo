import React from 'react';
import Todo from './Todo';

/** List of todo items.  */

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(t =>
          <Todo
            key={t.id}
            id={t.id}
            content={t.content}
            done={t.done}
            handleDelete={this.props.handleDelete}
            handleMarkDone={this.props.handleMarkDone}
          />
        )}
      </div>
    )
  }
}

export default TodoList;