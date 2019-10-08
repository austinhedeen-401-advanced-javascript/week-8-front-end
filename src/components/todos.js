import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import todoActions from '../store/actions/todos';

const Todos = (props) => {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoContent, setTodoContent] = useState('');

  const { todos, addTodo, fetchTodos } = props;

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ title: todoTitle, content: todoContent });
  }

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Todo Title"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Todo Content"
          value={todoContent}
          onChange={(e) => setTodoContent(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

Todos.propTypes = {
  addTodo: PropTypes.func,
  fetchTodos: PropTypes.func,
  todos: PropTypes.array,
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (data) => dispatch(todoActions.addTodo(data)),
  fetchTodos: () => dispatch(todoActions.fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
