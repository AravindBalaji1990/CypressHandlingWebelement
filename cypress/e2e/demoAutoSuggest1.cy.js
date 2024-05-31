/// <reference types="Cypress" />

describe('Handling autocomplete', 
()=>  {

it('Handling autocomplete',function() {

cy.visit("https://rahulshettyacademy.com/AutomationPractice/")


//Dynamic dropdowns
cy.get('#autocomplete').clear()
cy.get('#autocomplete').type('india')

cy.get('ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front').invoke('attr','style').should('contains','block')

// cy.get('ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front>li:nth-child(2)').click()
// cy.get('ul.ui-menu.ui-widget.ui-widget-content.ui-autocomplete.ui-front').children("li:nth-child(2)").click()
// another approach using xpath
// cy.xpath("//*[@class='ui-menu-item']/div[starts-with(text(),'India')]").click()
cy.get('.ui-menu-item div').each(($e1, index, $list) => {
    if($e1.text()==="India")
    {
        //wrap is a keyword in cypress which will help us to person actions onthe itratable elements
        cy.wrap($e1).click()
        // $e1.click()
    }
})
//autocomplete validation onthe text box either one of the below valdiation we can provide
cy.get('#autocomplete').should('have.value','India')
cy.get('#autocomplete').invoke('val').should('eq','India')
})
})