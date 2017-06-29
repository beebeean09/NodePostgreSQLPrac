import React from 'react';
import TodosListContainer from './todos_list_container';
import { Provider } from 'react-redux';

const Root = ({ store }) => {
  return(
    <Provider store={ store }>
      <TodosListContainer />
    </Provider>
  );
};


export default Root;
