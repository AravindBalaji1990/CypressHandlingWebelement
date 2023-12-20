/// <reference types="Cypress" />

describe('Handling mouse hover action', () => {
    it('Handling mouse hover', () => {

      // if trigger did not work then we ca use the keyboard actions
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get("input#autocomplete").type('Ind')
      cy.wait(3000)
      cy.get("ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front").should('be.visible')
      cy.get("ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front").type('{downarrow}')
      //trigger("mouseup")
      cy.wait(3000)
      cy.get("ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front>li:nth-child(1)>div").type('{enter}')
      //trigger("mousedown")

  
  })
})