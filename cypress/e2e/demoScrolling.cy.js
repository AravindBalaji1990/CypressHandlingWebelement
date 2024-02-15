/// <reference types="Cypress" />

describe('Handling autocomplete', 
()=>  {

it('Handling autocomplete',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.wait(3000)

// scrolling based on duraiton
// cy.get("#mousehover").scrollIntoView({duration:3000})
// scrolling based on animation
cy.get("#mousehover").scrollIntoView({easing:"swing"})
})
})