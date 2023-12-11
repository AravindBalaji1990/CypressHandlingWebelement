/// <reference types="Cypress" />

describe('Handling mouse hover action', () => {
    it('Handling mouse hover', () => {
      cy.visit("https://practice.expandtesting.com/tooltips")
      // this element inside the page is not intended to do this action as the mouse hover is handled in css
      // cy.wait(15000)
      // cy.get("a[title='Sign in']").scrollIntoView()
      
      cy.get("#btn1").trigger("mouseover")
      cy.wait(5000)
      cy.get(".tooltip-inner").should('be.visible')

  
  })
})