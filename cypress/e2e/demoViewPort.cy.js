/// <reference types="Cypress" />

describe('View port', function() 
{

it('view port testing ',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.viewport(820, 1180) // Set viewport to 550px x 750px
    // cy.viewport('iphone-6') // Set viewport to 375px x 667px
    // this will get the screenshot
    cy.screenshot("myscreen_1")
    // this will take screesnhot for the specific element
    cy.get("[for='radio1']").screenshot("radiobutton")
})
})
