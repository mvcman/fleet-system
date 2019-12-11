import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders Inside ', () => {
  const { getByText } = render(
    <Router>
      <App />
    </Router>,
  );
  const linkElement = getByText(/Inside Footer component/i);
  expect(linkElement).toBeDefined();
});
