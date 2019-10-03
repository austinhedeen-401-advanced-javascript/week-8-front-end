import React from 'react';

import Auth from './auth/auth';
import Login from './auth/login';
import LoginProvider from './auth/context';

import Todos from './todos';

/**
 * The entry point of the application.
 */
function App() {
  return (
    <LoginProvider>
      <h1>Week 8 Project</h1>
      <p><em>You got this!</em></p>
      <Login />
      <hr />
      <Auth capability="read">
        <Todos />
      </Auth>
    </LoginProvider>
  );
}

export default App;
