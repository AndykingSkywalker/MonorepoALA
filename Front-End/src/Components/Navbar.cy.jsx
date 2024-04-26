import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('<Navbar />', () => {
  it('renders', () => {
    cy.mount(
      <Router>
        <Navbar />
      </Router>
    );
  });
});
