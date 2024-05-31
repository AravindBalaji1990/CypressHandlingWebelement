/// <reference types="Cypress" />

describe('Handling autocomplete', 
()=>  {

it('Scroll into view demo',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.wait(3000)

// scrolling based on duraiton
// cy.get("#mousehover").scrollIntoView({duration:3000})
// scrolling based on animation
cy.get("#mousehover").scrollIntoView({duration:3000})
// cy.get("#mousehover").scrollIntoView({easing:"swing"})
// cy.get("#mousehover").scrollIntoView({ensureScrollable: true})
}),
it('Scroll to demo',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.wait(3000)

    cy.scrollTo(0,500)
    cy.scrollTo(900,500)
}),
it.only('Scroll to demo',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.wait(3000)

    cy.scrollTo('bottom')
    cy.wait(3000)

    cy.scrollTo('bottomLeft')
    cy.wait(3000)

    cy.scrollTo('top')
    cy.wait(3000)

    cy.scrollTo('topRight')
})
})