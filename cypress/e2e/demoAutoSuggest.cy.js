/// <reference types="Cypress" />

describe('Handling autocomplete', {
    retries: {
    runMode: 2,
    openMode: 1
    },
    }, ()=> 
{
it('Handling autocomplete',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//Dynamic dropdowns
// cy.get('#autocomplete').clear()
// cy.get('#autocomplete').type('ind')
cy.entervalue('ind','#autocomplete')
cy.get('#ui-id-0').invoke('attr','style').should('contains','block')

cy.get('.ui-menu-item div').each(($e1, index, $list) => {

    if($e1.text()==="India")
    {
        $e1.click()
    }

})
//autocomplete
cy.get('#autocomplete').should('have.value','India')
})
})