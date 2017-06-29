import * as TodoUtil from '../util/todo_util';
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchAllTodos = () => dispatch => (
  TodoUtil.fetchAllTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const fetchTodo = (id) => dispatch => (
  TodoUtil.fetchTodo(id).then(todo => dispatch(receiveTodo(todo)))
);

export const createTodo = (todo) => dispatch => (
  TodoUtil.createTodo(todo).then(todo1 => dispatch(receiveTodo(todo1)))
);

export const updateTodo = (todo) => dispatch => (
  TodoUtil.updateTodo(todo).then(todo1 => dispatch(receiveTodo(todo1)))
);

export const deleteTodo = (todo) => dispatch => (
  TodoUtil.deleteTodo(todo).then(todo1 => dispatch(removeTodo(todo1)))
);
