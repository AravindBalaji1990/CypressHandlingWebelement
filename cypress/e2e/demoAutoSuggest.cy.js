/// <reference types="Cypress" />

describe('Handling autocomplete', 
// {
//     retries: {
//     runMode: 2,
//     openMode: 3
//     },
//     }, 
()=>  {

it('Handling autocomplete',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.wait(3000)
cy.get("#radio-btn-example").screenshot("testdata")
//Dynamic dropdowns
cy.get('#autocomplet').clear()
cy.get('#autocomplete').type('ind')
// taking screenshot at element level
// cy.get('#autocomplete').screenshot()
// this will take the screenshot of the entire page
cy.screenshot()
// cy.entervalue('ind','#autocomplete')
cy.get('ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front').invoke('attr','style').should('contains','block')

// screenshot at element level
cy.get('ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front').screenshot()
// another approach using xpath
// cy.get("//*[@class='ui-menu-item']/div[starts-with(text(),'India')]").click()
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    if($e1.text()==="India")
    {
        cy.wrap($e1).click()
        // $e1.click()
    }
})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
cy.get('#autocomplete').invoke('val').should('eq','India')
}),
it('Scenario to test the cookies set and get', function (){
    // launch the application
    cy.visit("https://accounts.google.com");
    // enable cookie logging
    Cypress.Cookies.debug(true)
    //set cookie -> key , value
    cy.setCookie('cookie1', 'xyzvalue1')
    //get cookie by name and verify value
    cy.getCookie('cookie1').should('have.property', 'value', 'xyzvalue1')
    //clear cookie by name
    cy.clearCookie('cookie')
    //get all cookies
    cy.getCookies()
    //clear all cookies
    cy.clearCookies()
    //verify no cookies
    cy.getCookies().should('be.empty')
 });
})