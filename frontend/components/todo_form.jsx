const React = require('react');

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: "", complete: null };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handlesubmit');
    const todo = Object.assign({}, this.state);
    this.props.handleCreateTodo(todo);
    this.setState({ text: "", complete: null });
  }

  update(field) {
    return e => this.setState({[field] : e.target.value });
  }

  render() {

    return(
      <form onSubmit={this.handleSubmit}>
        <label>Text:</label>
        <input
          type="text"
          value={this.state.text}
          placeholder="Text"
          onChange={this.update('text')}/>
        <label>Complete:</label>
        <input
          type="text"
          value={this.state.complete}
          placeholder="Completed? True or False"
          onChange={this.update('complete')}/>
        <input type="submit" value="Add Todo"/>
      </form>
    );
  }
}

module.exports = TodoForm;
