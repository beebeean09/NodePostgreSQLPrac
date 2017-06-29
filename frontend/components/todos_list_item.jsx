import React from 'react';

class TodosListItem extends React.Component {
  render() {
    const todos = this.props.todos.map((todo, idx) => (
      <div key={idx}>
        <ul>{todo.text}</ul>
        <ul>{todo.complete}</ul>
      </div>
    ));

    return(
      <div>
        TodosListItem
        {todos}
      </div>
    );
  }
}

export default TodosListItem;
