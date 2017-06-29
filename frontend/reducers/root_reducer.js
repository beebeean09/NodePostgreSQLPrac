import { combineReducer } from 'redux';
import TodosReducer from './todos_reducer';

const RootReducer = combineReducer({
  todos: TodosReducer
});

export default RootReducer;
