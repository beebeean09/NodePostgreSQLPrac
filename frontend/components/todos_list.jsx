import React from 'react';

class TodosList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const todos = this.props.todos.map((todo, idx) => (
      <TodosListItem
        key={idx}
        todo={todo}/>
    ));

    return(
      <div>
        TodosList
        {todos}
      </div>
    );
  }
}

export default TodosList;
