/// <reference types="Cypress" />

describe('Handling autocomplete', 
{
    retries: {
    runMode: 2,
    openMode: 3
    },
    }, 
()=>  {
it('Handling autocomplete',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//Dynamic dropdowns
cy.get('#autocomplete').clear()
cy.get('#autocomplete').type('ind')
// taking screenshot at element level
cy.get('#autocomplete').screenshot()
// this will take the screenshot of the entire page
cy.screenshot()
// cy.entervalue('ind','#autocomplete')
cy.get('ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front').invoke('attr','style').should('contains','sample')
// cy.screenshot()
// another approach using xpath
// cy.get("//*[@class='ui-menu-item']/div[starts-with(text(),'India')]").click()
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    if($e1.text()==="India")
    {
        $e1.click()
    }
})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
cy.get('#autocomplete').invoke('val').should('eq','India')
})
})