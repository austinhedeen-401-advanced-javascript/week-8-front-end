import React from 'react';
import ReactDOM from 'react-dom';

import LoginProvider from '../../../components/auth/context';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginProvider><h1>It renders!</h1></LoginProvider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
