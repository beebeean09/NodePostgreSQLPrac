import TodosList from './todos_list';

const Root = ({ store }) => (
  <Provider store={ store }>
    <TodosList />
  </Provider>
);

export default Root;
