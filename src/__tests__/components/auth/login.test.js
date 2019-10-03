import React from 'react';
import ReactDOM from 'react-dom';

import LoginProvider from '../../../components/auth/context';
import Login from '../../../components/auth/login';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginProvider><Login /></LoginProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
