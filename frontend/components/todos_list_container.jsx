import { fetchAllTodos,
  fetchTodo,
  updateTodo,
  createTodo,
  deleteTodo } from '../actions/todos_actions';
import { connect } from 'react-redux';
import TodosList from './todos_list';

const mapStateToProps = (state) => ({
  todos: state.todos.todos
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodo: (id) => dispatch(fetchTodo(id)),
  fetchAllTodos: () => dispatch(fetchAllTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
