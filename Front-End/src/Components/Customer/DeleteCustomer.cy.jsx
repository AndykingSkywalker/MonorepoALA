import React from 'react';
import DeleteCustomer from './DeleteCustomer';
import { Route, BrowserRouter as Router } from 'react-router-dom';

describe('<DeleteCustomer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
    <Router>
    
      <DeleteCustomer />
      </Router>
      
      )
  })
})