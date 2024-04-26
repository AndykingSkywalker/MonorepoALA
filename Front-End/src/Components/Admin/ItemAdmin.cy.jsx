import React from 'react';
import ItemAdmin from './ItemAdmin';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<ItemAdmin />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Router>

      <ItemAdmin />

    </Router>
    )
  })
})


