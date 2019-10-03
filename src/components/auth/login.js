import React from 'react';

import { LoginContext } from './context';

const If = (props) => {
  return props.condition ? props.children : null;
};

/**
 * Renders a login form if a user is not logged in. Otherwise, renders a logout button.
 */
class Login extends React.Component {
  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event, type) => {
    event.preventDefault();
    this.context.login(this.state.username, this.state.password, type);
  };

  render() {
    return (
      <>
        <If condition={this.context.loggedIn}>
          <button onClick={this.context.logout}>Log Out</button>
        </If>

        <If condition={!this.context.loggedIn}>
          <form>
            <input
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
            <button onClick={(e) => this.handleSubmit(e, 'signin')}>Sign In</button>
            <button onClick={(e) => this.handleSubmit(e, 'signup')}>Sign Up</button>
          </form>
        </If>
      </>
    );
  }
}

export default Login;
