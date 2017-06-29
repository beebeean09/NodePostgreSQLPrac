import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todos_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {todos : []}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_TODOS:
      debugger;
      return merge({}, state, {todos: action.todos});
    case RECEIVE_TODO:

    default:
      return state;
  }
};

export default TodosReducer;
