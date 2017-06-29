import React from 'react';

class TodosListItem extends React.Component {
  render() {
    const todo = this.props.todo;
    debugger;
    return(
      <div>
        TodosListItem
        <div>
          <ul>{todo.text}</ul>
          <ul>{todo.complete == false ? 'False' : 'True'}</ul>
        </div>
      </div>
    );
  }
}

export default TodosListItem;
