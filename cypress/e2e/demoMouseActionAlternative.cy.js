/// <reference types="Cypress" />

describe('Handling mouse hover action', () => {
    it('Handling mouse hover', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
      cy.get("#mousehover").scrollIntoView()
      cy.wait(5000)
      cy.get("#mousehover").click()
      cy.wait(5000)
      //  {force: true} -> it force clicks the element
      cy.get(".mouse-hover div>a[href*=top]").click({force: true},{log: true})
  
  })
})