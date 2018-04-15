import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

/** List of todo items.  */

const TodoList = props => (
  <div>
    {props.todos.map(t =>
      <Todo
        key={t.id}
        id={t.id}
        content={t.content}
        done={t.done}
        handleDelete={props.handleDelete}
        handleMarkDone={props.handleMarkDone}
      />
    )}
  </div>
);

TodoList.propTypes = {
  handleDelete: PropTypes.func,
  handleMarkDone: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object)
};

export default TodoList;