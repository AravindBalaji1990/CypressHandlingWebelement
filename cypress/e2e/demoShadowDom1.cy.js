/// <reference types="Cypress" />

describe('demo shadow dom', () => {
    it('demo shadow dom', () => {
     cy.visit('http://watir.com/examples/shadow_dom.html') 
    //  cy.reload()
     
     // without using nested shadow DOM feature 
    //  cy.get("#shadow_host")
    //  .shadow()
    //  .find('input[type="text"]')
    //  .type("text")

    //Nested shadow dom 
    cy.get("#shadow_host",{shadow: true})
     .shadow()
     .find('#nested_shadow_host',{shadow: true})
     .shadow()
     .find('#nested_shadow_content>div')
     .invoke('text').should('eq','nested text')

    

    //without handling shadow element - this will throw an error
    // cy.get('#kils').scrollIntoView()
    // cy.get('#loader').should('not.be.visible')

    // cy.get('#loader').should('be.visible').then(($element)=>{
    //     cy.log('waiting')
    // }).timeout(10000)

    // cy.get('#userName').shadow().find('#kils').type('testshadow')
    // shadow-root open / closed
    // cy.get('#userName',{shadow: true}).shadow().find('#kils').type('testshadow')

    
    //Alternative way to handle
    // cy.get('#userName',{shadow: true}).then($element =>{
    //     const rootshadow = $element[0].shadowRoot;
    //     const targetdata = rootshadow.querySelector('#kils')
    //     cy.wrap(targetdata).type('test shadow')
    // })

    //nested shadow
  
    // cy.get('#userName').shadow().find('#kils').shadow().find('').type('testshadow')
  })
  })