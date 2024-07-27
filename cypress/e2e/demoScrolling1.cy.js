/// <reference types="Cypress" />

describe('Handling autocomplete', 
()=>  {

it('Scroll into view demo',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.wait(3000)

// scrolling based on duraiton
// cy.get("#mousehover").scrollIntoView()
// scrolling based on animation
// cy.get("#mousehover").scrollIntoView({duration:3000})// smooth scrolling
// cy.get("#mousehover").scrollIntoView({easing:"swing"})
cy.get("#mousehover").scrollIntoView({ensureScrollable: true})// will be based on element onthe screen that needs to be scrolled to 
}),
it('Scroll to demo',function() {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.wait(3000)
    // this will get the maximum dimention of the page
   cy.window().then((win)=>{
    const width = win.innerWidth;
    const height = win.innerHeight;
    cy.log(width,height)
   })

    cy.scrollTo(0,500)
    cy.wait(3000)
    cy.scrollTo(500,0)
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