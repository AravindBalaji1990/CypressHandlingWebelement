/// <reference types="Cypress" />

//test scenario
describe('Locator usage', function() 
{
  //test case
it('Locator Usage',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get("table#product[name='courses']>tbody>tr:last-of-type").should("be.visible")

}),
it('Locator Usage with cypress first() and last()',function() {

  cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  // we are using the cypress function first() and last() to identify the specific elements
  cy.get("table#product[name='courses']>tbody>tr").first().should("be.visible")
  cy.get("table#product[name='courses']>tbody>tr").last().should("be.visible")
  
  }),

  it('Locator Usage with cypress contains()',function() {

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // we are using the cypress function contains used to identofy a text linked to the element
    cy.get("table#product[name='courses']>tbody>tr>th").contains('Course').should("be.visible")
    
    }),

    it('Locator Usage with cypress find()',function() {

      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      // we are using the cypress function find used to identify the attribute l inked ot the element
      cy.get("table#product[name='courses']>tbody>tr").find('th').should("be.visible")
      
      }),
      it.only('Xpath cehck with cypress',function() {

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // we are using the cypress function find used to identify the attribute l inked ot the element
        cy.xpath("//*[@id='radio-btn-example']/fieldset/label[1]/input").should("be.visible")
        
        })
})