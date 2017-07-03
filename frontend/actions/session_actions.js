import * as SessionUtil from '../util/session_util';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
});

export const receiveErrors = (user) => ({
  type: RECEIVE_ERRORS,
  user
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const signup = user => dispatch => (
  SessionUtil.signup(user).then(user1 => dispatch(receiveCurrentUser(user1),
      errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const login = user => dispatch => (
  SessionUtil.login(user).then(user1 => dispatch(receiveCurrentUser(user1),
      errors => dispatch(receiveErrors(errors.responseJSON))))
);

export const logout = () => dispatch => (
  SessionUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);
