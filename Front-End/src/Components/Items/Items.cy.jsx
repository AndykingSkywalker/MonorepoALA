import React from 'react'
import Items from './Items'

describe('<Items />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Items />)
  })
})