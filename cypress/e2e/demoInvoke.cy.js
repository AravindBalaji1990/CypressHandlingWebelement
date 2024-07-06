/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute using invoke to get the attributes value', () => {
     
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
     
  cy.get("#autocomplete").first().should('be.enabled')
  cy.get("#autocomplete").should('be.visible')
  // after giving a invoke we cannot do any aciton like click or type after that
  //invoke('attr','attributename') - whatever the attribute linked to the element will be picked up for validation
  cy.get("#autocomplete").first().invoke('attr','placeholder').should('eq','Type to Select Countries')

  cy.get("#autocomplete").first().invoke('attr','placeholder').should('include','Countries')
  cy.get("#autocomplete").first().click()
  }),

  it('check for attribute style using invoke to get the attributes value', () => {
     
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   
cy.get("#autocomplete").first().should('be.enabled')
cy.get("#autocomplete").should('be.visible')
// after giving a invoke we cannot do any aciton like click or type after that
//invoke('attr','attributename') - whatever the attribute linked to the element will be picked up for validation
cy.get("#autocomplete").first().type("India")

cy.get(".ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front").invoke('attr','style').should('include','display: block')

cy.get(".ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front>li").contains("India").click()
}),

  it('check for attribute using invoke and get the text', () => {
     
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
   //last -is a keyword in cypress picks the last item fromthe css locator
   //invoke('text') - whatever the text linked to the element will be piocked up for validation
// cy.get(".right-align>fieldset>legend").last().should('be.visible')
// cy.get(".right-align>fieldset>legend").last().invoke('text').should('eq','Web Table Fixed header')
// cy.get(".right-align>fieldset>legend").last().invoke('text').should('eq','Web Table Fixed header').click()// click cannot be applied after a invoke
cy.get("#gf-BIG>table>tbody  tr>td>ul>li.gf-li:nth-child(2)").last().contains("Facebook")
cy.get("#gf-BIG>table>tbody  tr>td>ul>li.gf-li:nth-child(2)").last().invoke('text').should('eq','Facebook')

//if we need to reuse the text value at some point we can store it with 'as' - meaning aliase
cy.get("#gf-BIG>table>tbody  tr>td>ul>li.gf-li:nth-child(2)").last().invoke('text').as("value")
//we need to extract the content from the aliase name 
cy.get('@value').then((xyz) =>{
  cy.log("the value stored  ----> " , xyz)
})


}),
it.only('aliase representaiton for re-usability', () => {
     
  cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get("#gf-BIG>table>tbody  tr>td>ul>li.gf-li:nth-child(2)").last().as("facebooklocator")
cy.get("@facebooklocator").contains("Facebook")
cy.get("@facebooklocator").invoke('text').should('eq','Facebook')
//if we need to reuse the text value at some point we can store it with 'as' - meaning aliase
cy.get("@facebooklocator").invoke('text').as("value")
//we need to extract the content from the aliase name 
cy.get('@value').then((xyz) =>{
cy.log("the value stored  ----> " , xyz)
})


})
})