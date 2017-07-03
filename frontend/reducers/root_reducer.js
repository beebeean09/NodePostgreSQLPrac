import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  todos: TodosReducer
});

export default RootReducer;
