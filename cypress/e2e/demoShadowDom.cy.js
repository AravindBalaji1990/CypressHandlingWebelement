/// <reference types="Cypress" />

describe('demo shadow dom', () => {
    it('demo shadow dom', () => {
     cy.visit('https://selectorshub.com/xpath-practice-page/')   
    //  cy.visit('chrome://settings/')
    cy.wait(5000)
    cy.get('img[title="Close"]').should('be.visible').click()
    // cy.get('#kils').scrollIntoView()
    cy.xpath('//*[@id="userName"]').shadow().find('#kils').type('testshadow')

    //closed
    // cy.xpath('//*[@id="concepts"]').shadow().find('#training').type('testshadow')

    cy.get('#concepts').then($element =>{
        const rootshadow = $element[0].shadowRoot;
        const targetdata = rootshadow.querySelector('#training')
        cy.wrap(targetdata).type('test shadow')
    })

    //nested shadow
  
    // cy.get('#userName').shadow().find('#kils').shadow().find('').type('testshadow')
  })
  })