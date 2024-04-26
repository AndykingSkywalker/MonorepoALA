import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

describe('<Home />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Home />
      </Router>
    );
  });
});