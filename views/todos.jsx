const React = require('react');
const axios = require('axios');
const TodoForm = require('./todo_form.jsx');

class TodosList extends React.Component {
  constructor() {
    super();
    // this.state = { text: "", complete: null };
    this.state = { data: [] , msg: "hello" };
    this.fetchAllTodos = this.fetchAllTodos.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    this.fetchAllTodos();
    setInterval(this.fetchAllTodos, 2000);
    // this.setState({ msg: 'hello'});
  }
  //
  // fetchAllTodos() {
  //   debugger;
  //
  //   let todoslist = [];
  //
  //   $.ajax({
  //     method: 'GET',
  //     url: '/todos'
  //   }).then(todos => todos.forEach(todo => { todoslist.push(todo); }));
  //
  //   let todos = Object.assign({}, this.state, { todos: todoslist });
  //   this.setState({ todos });
  // }

  fetchAllTodos() {
    axios.get('http://localhost:3000/todos')
    .then(res => {
      this.setState({ data: res.data, msg: 'success' });
    });
  }

  createTodo(todo) {
    // console.log('create');
    // return(
    //   $.ajax({
    //     method: 'POST',
    //     url: '/todos',
    //     data: { todo }
    //   })
    // );
    axios.post('http://localhost:3000/todos', todo)
    .then(res => {
    this.setState({ data: res });
    })
    .catch(err => {
    console.error(err);
    });
  }

  render() {
    // const todos = this.state;
    // const todos = this.props.results.map((todo,idx) => {
    //   return (
    //     <div key={idx}>
    //       {todo.id}
    //       {todo.text}
    //       {todo.complete}
    //     </div>
    //   );
    // });

    const todos = this.state.data;
    const msg = this.state.msg;
    console.log(todos);
    console.log(this.state.msg);
    return(
      <div>
        Todos
        {todos}
        {msg}
        <TodoForm handleCreateTodo={this.createTodo}/>
      </div>
    );
  }
}

module.exports = TodosList;
