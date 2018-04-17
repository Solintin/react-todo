import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

/** List of todo items.  */

const TodoList = props => (
  <div>
    {props.todos.map(t =>
      props.editing.includes(t.id)
        ? <EditTodoForm
          key={t.id}
          id={t.id}
          content={t.content}
          handleEdit={props.handleEdit}
        />
        : <Todo
          key={t.id}
          id={t.id}
          content={t.content}
          done={t.done}
          handleDelete={props.handleDelete}
          handleMarkDone={props.handleMarkDone}
          handleMarkEdit={props.handleMarkEdit}
        />
    )}
  </div>
);

TodoList.propTypes = {
  handleMarkEdit: PropTypes.func,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func,
  handleMarkDone: PropTypes.func,
  todos: PropTypes.arrayOf(PropTypes.object),
  editing: PropTypes.arrayOf(PropTypes.string),
};

export default TodoList;