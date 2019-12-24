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
  const linkElement = getByText(/Book Bus/i);
  expect(linkElement).toBeDefined();
});
