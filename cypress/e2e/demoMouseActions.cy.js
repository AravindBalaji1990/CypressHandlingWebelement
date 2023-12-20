/// <reference types="Cypress" />

describe('Handling mouse hover action', () => {
    it('Handling mouse hover', () => {
      cy.visit("https://practice.expandtesting.com/tooltips")
      // this element inside the page is not intended to do this action as the mouse hover is handled in css
      // cy.wait(15000)
      // cy.get("a[title='Sign in']").scrollIntoView()
      
      cy.get("#btn1").trigger("mouseover")
      cy.wait(3000)
      cy.get(".tooltip-inner").should('be.visible')
      cy.wait(3000)
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get("select#dropdown-class-example").click()
      cy.wait(3000)
      cy.get("#btn1").trigger("mouseup")
      cy.wait(3000)
      cy.get("#btn1").trigger("mousedown")

  
  })
})