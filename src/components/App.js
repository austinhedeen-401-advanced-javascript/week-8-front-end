import React from 'react';

import Auth from './auth/auth';
import Login from './auth/login';
import LoginProvider from './auth/context';

function Read() {
  return (
    <Auth capability="read">
      <span>Signed in! You have &quot;read&quot; capabilities.</span>
    </Auth>
  );
}

function Update() {
  return (
    <Auth capability="update">
      <span>You have &quot;update&quot; capabilities.</span>
    </Auth>
  );
}

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
