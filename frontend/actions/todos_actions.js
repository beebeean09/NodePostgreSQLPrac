import * as TodoUtil from '../util/todo_util';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchAllTodos = () => dispatch => (
  TodoUtil.fetchAllTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const fetchTodo = (id) => dispatch => (
  TodoUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
);
