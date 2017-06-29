import $ from '@rtorr/ajax-only';

export const fetchAllTodos = () => (
  $.ajax({
    method: 'GET',
    url: '/todos'
  })
);

export const fetchTodo = (id) => (
  $.ajax({
    method: 'GET',
    url: `/todos/${id}`
  })
);

export const createTodo = (todo) => (
  $.ajax({
    method: 'POST',
    url: '/todos',
    data: todo
  })
);

export const deleteTodo = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/todos/${id}`
  })
);

export const updateTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `/todos/${todo.id}`,
    data: { todo }
  })
);
