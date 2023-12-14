/// <reference types="Cypress" />


describe('Handling Webtables', function() {
it('Handling Webtables in the webpage',function() {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//first() -> represents the item which occurs in the first instance
// scrollintoview -> it scrolls and navigates the page to the specific element
// cy.get('#product').first().scrollIntoView();
// cy.get('#product[name="courses"]').first().scrollIntoView();
cy.get("tr td:nth-child(2)").each(($el, index)=>{
    // get the text value of each tr td:nth-child(2)
    const data = $el.text()
    if(data.includes("JMETER")){
        // next() -> points to the element next to it
        cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
        {
            const pricetext = price.text()
            // mocha assertion
            expect(pricetext).to.equal('25')
            
        })
    }
})
})
})