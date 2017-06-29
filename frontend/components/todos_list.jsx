import React from 'react';
import TodosListItem from './todos_list_item';

class TodosList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    debugger;
    this.props.fetchAllTodos();
  }

  render() {
    debugger;
    const allTodos = (this.props.todos) ? this.props.todos.map((todo, idx) => (
        <TodosListItem
          key={idx}
          todo={todo}/>
      )) : <div></div>;

    return(
      <div>
        TodosList
        {allTodos}
      </div>
    );
  }
}

export default TodosList;
