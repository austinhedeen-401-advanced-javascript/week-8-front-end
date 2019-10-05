import React from 'react';
import cookie from 'react-cookies';
import PropTypes from 'prop-types';

import jwt from 'jsonwebtoken';

export const LoginContext = React.createContext();

const API = process.env.REACT_APP_API;

/**
 * Provides access to login state.
 */
class LoginProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      token: null,
      user: {},
      login: this.login,
      logout: this.logout,
    };
  }

  /**
   * Attempts to login to the API server using basic authentication.
   * @param username
   * @param password
   * @param type
   */
  login = (username, password, type) => {
    const options = {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      headers: new Headers({
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      }),
    };

    if (type === 'signup') {
      options.body = JSON.stringify({ username, password });
      options.headers = new Headers({
        'Content-Type': 'application/json',
      });
    }

    fetch(`${API}/${type}`, options)
      .then((response) => response.text())
      .then((token) => this.validateToken(token))
      .catch(console.error);
  };

  /**
   * Logs the user out.
   */
  logout = () => {
    this.setLoginState(false, null, {});
  };

  /**
   * Logs the user in if the token is valid.
   * @param token
   */
  validateToken = (token) => {
    try {
      const user = jwt.verify(token, process.env.REACT_APP_SECRET);
      this.setLoginState(true, user, token);
    } catch (e) {
      this.setLoginState(false, null, {});
    }
  };

  /**
   * Sets the login state.
   * @param {boolean} loggedIn
   * @param {Object} user
   * @param {string} token
   */
  setLoginState = (loggedIn, user, token) => {
    cookie.save('auth', token);
    this.setState({ loggedIn, user, token });
  };

  /**
   * Attempts to load an auth token from a cookie.
   */
  componentDidMount() {
    const cookieToken = cookie.load('auth');
    this.validateToken(cookieToken);
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
        { this.props.children }
      </LoginContext.Provider>
    );
  }
}

LoginProvider.propTypes = {
  children: PropTypes.node,
};

export default LoginProvider;
