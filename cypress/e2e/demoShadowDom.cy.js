/// <reference types="Cypress" />

describe('demo shadow dom', () => {
    it('demo shadow dom', () => {
     cy.visit('https://selectorshub.com/xpath-practice-page/')   
    //  cy.visit('chrome://settings/')
    cy.wait(5000)
    cy.get("img[id^=NTc0OjE5MA]").click()
    cy.get('img[title="Close"]').should('be.visible').click({wait:5000})
    cy.get('img[title="Close"]').should('exist')
    cy.get('img[title="Close"]').then($element =>{
       expect($element).to.have.lengthOf(1)    
       const   elementabvailable = $element;
        cy.wrap(elementabvailable).click({wait:5000})
    })

    //without handling shadow element - this will throw an error
    // cy.get('#kils').scrollIntoView()
    // cy.get('#userName').shadow().find('#kils').type('testshadow')
    // shadow-root open / closed
    // cy.get('#userName',{shadow: true}).shadow().find('#kils').type('testshadow')

    
    //Alternative way to handle
    cy.get('#userName',{shadow: true}).then($element =>{
        const rootshadow = $element[0].shadowRoot;
        const targetdata = rootshadow.querySelector('#kils')
        cy.wrap(targetdata).type('test shadow')
    })

    //nested shadow
  
    // cy.get('#userName').shadow().find('#kils').shadow().find('').type('testshadow')
  })
  })