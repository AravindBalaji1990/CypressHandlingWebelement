/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://semantic-ui.com/modules/dropdown.html")

        cy.get("div.ui.fluid.dropdown.selection.multiple>select[name='skills']+i.dropdown.icon").click()
     cy.get("div.menu.transition.visible>div[data-value='design']").click();
     cy.get('a.ui.label.transition.visible').should('be.visible')
      

  })
  
  
  })