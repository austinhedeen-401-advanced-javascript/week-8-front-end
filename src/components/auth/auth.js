import React from 'react';
import PropTypes from 'prop-types';

import { LoginContext } from './context';

const If = (props) => {
  return props.condition ? props.children : null;
};

/**
 * A component used to conditionally render contents depending on the role
 * capability of a logged-in user.
 */
class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
    try {
      const { loggedIn, user } = this.context;
      const { capability } = this.props;
      okToRender = loggedIn && capability && user.capabilities.includes(capability);
    } catch (e) {
      console.warn('Not Authorized');
    }

    return (
      <If condition={okToRender}>
        <div>{ this.props.children }</div>
      </If>
    );
  }
}

Auth.propTypes = {
  capability: PropTypes.string,
  children: PropTypes.node,
};

export default Auth;
