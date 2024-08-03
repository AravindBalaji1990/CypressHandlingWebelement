/// <reference types="Cypress" />

describe('demo for hooks concept', function() 
{
   // all the hooks should be inside the describe
    
    beforeEach(function() {
        cy.log('this is from before each')        
        cy.visit("https://www.google.com")
     })

     //beforeall
     before(function() {
        cy.log('this is from before ')
     })

     it('this this it 1', function() {
        cy.log('this is from it 1')
        cy.assertUrl("google")
        })
      it('this this it 2', function() {
         cy.log('this is from it 2')
         cy.entervalue("cypress","textarea[name='q']")
         })
   

         //afterall
     after(function() {
        cy.log('this is from after')
     })
     afterEach(function() {
        cy.log('this is from after each')
        cy.screenshot()
     })

})
