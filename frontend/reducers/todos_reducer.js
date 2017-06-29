import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todos_actions';
import merge from 'lodash/merge';

const TodosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:

    case RECEIVE_TODO:

    default:
      return state;
  }
};

export default TodosReducer;
