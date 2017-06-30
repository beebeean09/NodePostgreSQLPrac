import React from 'react';

class Session extends React.Component{
  constructor(props) {
    super(props);

    this.state = {username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const user = Object.assign({}, this.state);
    // this.props.signup(user) or this.props.login(user)
    this.setState({username: "", password: ""});
  }

  update(field) {
    return e => this.setState({[field]: e.target.value});
  }

  render() {
    return(
      <div>
        <h2>Sign up or Log in</h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input
              type='text'
              value={this.state.username}
              placeholder="Username"
              onChange={this.update('username')}/>
          </label>
          <label>Password:
            <input
              type='text'
              value={this.state.password}
              placeholder="Password"
              onChange={this.update('password')}/>
          </label>
          <input type="submit" value={this.processForm}/>
        </form>
      </div>
    );
  }
}

export default Session;
