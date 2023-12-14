/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling Frames', function() 
{

it('Handling Frames in the webpage',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//scrolling to the specific elemnent 
cy.get('#courses-iframe').scrollIntoView()

//navigating into frame - telling the cypress we are in the frame
cy.frameLoaded('#courses-iframe') 


// now we are identifying the frame for the element
// find -> identofy the element within the context
cy.iframe().find('li>a[href=mentorship]').first().click()

// //Nested frame 
// cy.iframe().find('li>a[href=mentorship]').first()
// .iframe("child-frame").find("").click()
// Static sleeper - just for study purpose
cy.wait(2000)
cy.iframe().find('section.page-title h1').invoke('text').should('eq','Mentorship')
cy.wait(2000)
//coming out of frame
cy.get('a+button.btn.btn-primary').invoke('text').should('eq','Practice')

// frame inside a frame
// first frame
// cy.iframe('css locator').within(()=>{
//     // second frame
//     cy.iframe('css locator').within(() =>{
//         cy.iframe().find('').click()
//     })
// })
// cy.sw

})
})