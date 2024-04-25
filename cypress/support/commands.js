// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// this will avoid any adds thats comein the website
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  //-- facebook enter the firstname and surname - adding the specific function/method to the cypress so that we can invoke it in the js files
  Cypress.Commands.add('EnterFnameSname', (firstname, surname) => {
    cy.get('input[name=firstname]').should('be.visible')
    cy.get('input[name=firstname]').clear()
    cy.get('input[name=firstname]').type(firstname)

    cy.get('input[name=lastname]').should('be.visible')
    cy.get('input[name=lastname]').clear()
    cy.get('input[name=lastname]').type(surname)

  })

  Cypress.Commands.add('entervalue', (data, locator) => {
    cy.get(locator).clear()
    cy.get(locator).type(data)

  })

  Cypress.Commands.add('assertUrl', (expectedvalue) => {
    cy.url().should('include', expectedvalue)
  })

// //   Cypress.Commands.addAll({
// //     EnterFnameSname(firstname, surname){},
// //     entervalue(email,locator){},
//   })