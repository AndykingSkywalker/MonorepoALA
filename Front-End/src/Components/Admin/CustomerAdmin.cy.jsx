import React from 'react'
import CustomerAdmin from './CustomerAdmin'

describe('<CustomerAdmin />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CustomerAdmin />)
  })
})