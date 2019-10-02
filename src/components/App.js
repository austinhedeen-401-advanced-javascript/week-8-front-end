import React from 'react';

import Auth from './auth/auth';
import Login from './auth/login';
import LoginProvider from './auth/context';

/**
 * A component to test conditional rendering. Renders only if a user is logged
 * in with the "read" capability.
 */
function Read() {
  return (
    <Auth capability="read">
      <span>Signed in! You have &quot;read&quot; capabilities.</span>
    </Auth>
  );
}

/**
 * A component to test conditional rendering. Renders only if a user is logged
 * in with the "update" capability.
 */
function Update() {
  return (
    <Auth capability="update">
      <span>You have &quot;update&quot; capabilities.</span>
    </Auth>
  );
}

/**
 * The entry point of the application.
 */
function App() {
  return (
    <LoginProvider>
      <h1>Hello world!</h1>
      <Login />
      <hr />
      <Read />
      <Update />
    </LoginProvider>
  );
}

export default App;
