import React from 'react';
import ReactDOM from 'react-dom';

import Auth from '../../../components/auth/auth';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Auth capability="read">
      <span>Signed in! You have &quot;read&quot; capabilities.</span>
    </Auth>,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});
