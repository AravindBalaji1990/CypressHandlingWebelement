/// <reference types="Cypress" />

describe('Handling mouse hover action', () => {
    it('Handling mouse hover', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     
      cy.get("#mousehover").scrollIntoView()
      cy.wait(5000)
      // cy.get("#mousehover").click()
      // cy.get("#mousehover").trigger("mouseover")
      cy.wait(5000)
      // cy.get("div.mouse-hover-content").should("be.visible")
      //  {force: true} -> it force clicks the element
      cy.get(".mouse-hover div>a[href*=top]").click({force: true},{log: true},{wait:2000})
  
  })
})