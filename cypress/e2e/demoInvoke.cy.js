/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute using invoke to get the attributes value', () => {
     
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     
  cy.get("#hide-textbox").should('be.enabled').click()
  // after giving a invoke we cannot do any aciton like click or type after that
  //invoke('attr','attributename') - whatever the attribute linked to the element will be picked up for validation
  cy.get("#displayed-text").invoke('attr','style').should('eq','display: none;')
  }),
  it('check for attribute using invoke and get the text', () => {
     
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   //last -is a keyword in cypress picks the last item fromthe css locator
   //invoke('text') - whatever the text linked to the element will be piocked up for validation
cy.get(".right-align>fieldset>legend").last().should('be.visible')
cy.get(".right-align>fieldset>legend").last().invoke('text').should('eq','Web Table Fixed header')
// cy.get(".right-align>fieldset>legend").last().invoke('text').should('eq','Web Table Fixed header').click()// click cannot be applied after a invoke
})
  
  
  })