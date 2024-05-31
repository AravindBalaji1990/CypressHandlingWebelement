/// <reference types="Cypress" />

describe('pop up based alert box handling', function() 
{

it('pop up based alert box handling',function() {

cy.visit("http://vodkabears.github.io/remodal/#modal")
cy.get("div.intro__links a[href*='modal']:nth-child(1)").should('be.visible')

cy.get("div[class='remodal remodal-is-initialized remodal-is-opened']").should('be.visible')


cy.get("p#modalDesc").invoke('text').should('include','The modal done right')

cy.get("button[data-remodal-action='confirm']").click()
} )
} )

