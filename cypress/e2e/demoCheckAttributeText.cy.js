/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // ib=nvoke is a keyword where it will invoke a attribute of 'type'
        // then we validate the type  
        // attr -> this will represent the attribute/ which attribute to consider
        cy.get("input[value='radio1']").invoke('attr','type').should('eq','radio')
        cy.get("input[value='radio1']").should('be.enabled').click()
        // validation + action we can do 
        cy.get("input[value='radio2']").should('have.attr','type','radio').click()



        //to het the text value linked to the attribute
        cy.get("#radio-btn-example legend").invoke('text').should('eq','Radio Button Example')   
    
        // another way of validatinghte element text linked to webelement
        cy.get("#radio-btn-example legend").invoke('text').then((textvalue) =>{
            expect(textvalue).to.equal('Radio Button Example')
        })
  })
  
  
  })