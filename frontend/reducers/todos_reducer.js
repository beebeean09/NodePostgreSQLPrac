import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todos_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {todos : []}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      return merge({}, state, {todos: action.todos});
    case RECEIVE_TODO:
      newState = merge({}, state);
      newState.todos.push([action.todo]);
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;
