/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

describe('Handling Frames', function() 
{

it('Handling Frames in the webpage',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//scrolling to the specific elemnent 
cy.get('#courses-iframe').scrollIntoView()


//navigating into frame - telling the cypress we are in the frame
cy.frameLoaded('#courses-iframe') 
// to search element inside a iframe
try{
cy.iframe().find("a[class='theme-btn register-btn']").should('be.visible')
}catch(error){

}
cy.wait(3000)
// to come out of a iframe just use cy.get
cy.get("input[value='radio1']").should('be.visible').click()

// cy.get('li>a[href=mentorship]').first().click()
// now we are identifying the frame for the element
// find -> identofy the element within the context
// cy.iframe().find('li>a[href=mentorship]').first().click()
// try{
// cy.iframe().find('a[href$=sign_u]').first().should('be.visible')
// }catch(error){
//     cy.error(error)
// }
// cy.iframe().find('a[href$=sign_up]').first().click({timeout:5000})

// //Nested frame 
// cy.frameLoaded('#courses-iframe') 
// cy.iframe().find('li>a[href=mentorship]').first()
// .iframe("child-frame").find("").click()
// Static sleeper - just for study purpose
// cy.wait(2000)
// cy.iframe().find('section.page-title h1').invoke('text').should('eq','Mentorship')
// cy.wait(2000)
//coming out of frame
// cy.get('a+button.btn.btn-primary').invoke('text').should('eq','Practice')

// frame inside a frame
// first frame
// cy.iframe('css locator').within(()=>{
//     // second frame
//     cy.iframe('css locator').within(() =>{
//         cy.iframe().find('').click()
//     })
// })
// cy.sw

}),
it.only('Handling Frames in the webpage and skip the element',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //scrolling to the specific elemnent 
    cy.get('#courses-iframe').scrollIntoView()
    
    
    //navigating into frame - telling the cypress we are in the frame
    cy.frameLoaded('#courses-iframe') 

    cy.iframe().then($iframebody =>{
        if($iframebody.find("a[class='theme-btn register-btn1").length>0){
            cy.find("a[class='theme-btn register-btn1").click()
        }else{
            cy.log("ELEMENT NOT AVAILABLE")
        }
    })
})
})