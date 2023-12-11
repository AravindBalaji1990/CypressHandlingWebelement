/// <reference types="Cypress" />

describe('View port', function() 
{

it('view port testing ',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    // should and and are assertions to validate a elements behaviour
    // cy.get("input[placeholder='Enter Your Name']").should('be.visible').and('be.enabled').type('cypress')
    cy.get("input[placeholder='Enter Your Name']").should('be.visible')
    cy.get("input[placeholder='Enter Your Name']").and('be.enabled')

    // find will work only with get 
    // it will check all the child elements from the parent
    cy.get("fieldset[class='pull-right']").find("#name").should('be.enabled')

    // in the webpage it will check for the text available but not all the text but the first one
    cy.contains("Practice Page")

    // we put the element and check for the text value
    cy.get("#openwindow").contains("Open Window")

    // contains checks for the locator and the text with in self
    cy.contains("#openwindow","Open Window")

    // duplciates are available then we can cehck for the first and last items
    cy.get("input[type='radio']").first().click()
    cy.get("input[type='radio']").last().click()
})
})
