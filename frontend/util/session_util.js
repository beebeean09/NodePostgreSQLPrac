import $ from '@rtorr/ajax-only';

export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/auth/signup',
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/auth/login',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/auth/logout'
  })
);
