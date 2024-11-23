/// <reference types="Cypress" />

describe('View port', function() 
{

it('view port testing ',function() {
    // cy.visit("/")
    let urlenv1 =  Cypress.env("url2")
    cy.visit(urlenv1)
    
    // should and and are assertions to validate a elements behaviour
    // cy.get("input[placeholder='Enter Your Name']").should('be.visible').and('be.enabled').type('cypress')
    cy.get("input[placeholder='Enter Your Name']").should('be.visible')
    cy.get("input[placeholder='Enter Your Name']").and('be.disabled')
})
})
