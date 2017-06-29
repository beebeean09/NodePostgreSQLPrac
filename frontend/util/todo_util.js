import $ from '@rtorr/ajax-only';

export const fetchAllTodos = () => {
  debugger;
  return(
  $.ajax({
    method: 'GET',
    url: '/todos'
  })
);
};


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

export const deleteTodo = (todo) => (
  $.ajax({
    method: 'DELETE',
    url: `/todos/${todo.id}`
  })
);

export const updateTodo = (todo) => (
  $.ajax({
    method: 'PATCH',
    url: `/todos/${todo.id}`,
    data: { todo }
  })
);
