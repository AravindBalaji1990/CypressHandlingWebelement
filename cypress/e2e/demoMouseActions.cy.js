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
      // if the value is not dynamic we can use like below
      // cy.get("#btn1").should('have.attr','aria-describedby','tooltip732644')

      //if the value is dynamic
      cy.get("#btn1").should(($element) =>{
        const storeattr = $element.attr('aria-describedby')
        //mocha - chai assertion
        expect(storeattr).to.contain('tooltip')
        // expect(storeattr).to.match('tooltip')// create a regex and use it here for hte format sample - [(\tooltip\)(0-9)+]
      })     
  
  }),
  it('Handling in mousehover in abnother website - this is failure if we did nto give force in click' , () =>{
 cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

 // scrollIntoView() - keywiord in cypress where it wills croll till the element
      cy.get("#mousehover").scrollIntoView()
      cy.wait(2000)
      cy.get("#mousehover").trigger('mouseover')
      cy.get("a[href*=top]").click({force:true})
    })
})