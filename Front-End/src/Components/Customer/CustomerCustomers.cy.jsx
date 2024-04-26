import React from 'react'
import Customers from './Customer'
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Customers />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Router>

      <Customers />
    </Router>
    )
  })
})

