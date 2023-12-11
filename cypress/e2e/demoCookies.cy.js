describe('Cookies Demo', function () {
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
 });