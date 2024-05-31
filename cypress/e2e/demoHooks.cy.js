/// <reference types="Cypress" />

describe('demo for hooks concept', function() 
{
   // all the hooks should be inside the describe
    
    beforeEach(function() {
        cy.log('this is from before each')
     })

     //beforeall
     before(function() {
        cy.log('this is from before ')
     })

     it('this this it 1', function() {
        cy.log('thisis from it 1')
        })
      it('this this it 2', function() {
         cy.log('thisis from it 2')
         })
   

         //afterall
     after(function() {
        cy.log('this is from after')
     })
     afterEach(function() {
        cy.log('this is from after each')
     })

})
