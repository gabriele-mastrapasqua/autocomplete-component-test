/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('search autocomplete app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('it should search autocomplete a valid string', () => {
    // intercept API requests so we are sure we completed a search
    cy.intercept('GET', 'https://api.publicapis.org/entries*').as(
      'searchAPIEntries',
    )

    // search on autocomplete the work 'Ude', it should give 2 results
    cy.get('[data-cy="autocomplete-text-input"]').click()
    cy.get('[data-cy="autocomplete-text-input"]').type('ude')

    // wait for api call
    cy.wait('@searchAPIEntries', {timeout: 20000}).then(interception => {
      cy.get('[data-cy="autocomplete-items-list"] li').should('have.length', 2)
      cy.get('[data-cy="autocomplete-items-list"] li')
        .should('have.length', 2)
        .last()
        .click()

      // on click the list should be hidden
      cy.get('[data-cy="autocomplete-items-list"]').should('not.exist')

      // now we should have a result shown
      cy.get('[data-cy="result-title"]').should('be.visible')
      cy.get('[data-cy="result-name"]').should('have.text', 'Udemy(instructor)')
    })
  })

  it('it should search autocomplete an not found text', () => {
    // intercept API requests so we are sure we completed a search
    cy.intercept('GET', 'https://api.publicapis.org/entries*').as(
      'searchAPIEntries',
    )

    cy.get('[data-cy="autocomplete-text-input"]').click()
    cy.get('[data-cy="autocomplete-text-input"]').type('ciaone')

    cy.wait('@searchAPIEntries', {timeout: 20000}).then(interception => {
      cy.get('[data-cy="autocomplete-items-list"] li').should('have.length', 1)
      cy.get('[data-cy="autocomplete-items-list"] li')
        .should('have.length', 1)
        .first()
        .should('have.text', 'no elements found!')
    })
  })
})

export {}
