import React from 'react'
import Feedback from './Feedback'

describe('<Feedback />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Feedback />)
  })
})