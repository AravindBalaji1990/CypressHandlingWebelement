/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
      cy.visit('https://automationteststore.com/');
      cy.get("#categorymenu > nav > ul > li>a").each(($el, index, $list) => {
       // if(index==3)
        cy.wrap($el).click()
        cy.wait(5000)
        
      });
      

  })
  
  
  })