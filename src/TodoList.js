import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/** List of todo items.  */

class TodoList extends React.Component {
  static propTypes = {
    handleDelete: PropTypes.func,
    handleMarkDone: PropTypes.func,
    todos: PropTypes.arrayOf(PropTypes.object)
  };

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