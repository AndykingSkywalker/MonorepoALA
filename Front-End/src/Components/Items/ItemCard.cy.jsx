import React from 'react'
import ItemCard from './ItemCard'
import { Route, BrowserRouter as Router } from 'react-router-dom';

describe('<ItemCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <Router>

        <ItemCard />
      </Router>
    )
  })
})