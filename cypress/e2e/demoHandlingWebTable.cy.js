/// <reference types="Cypress" />


describe('Handling Webtables', function() {
it('Handling Webtables in the webpage',function() {
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// to print the valus from the tables
// below item is for second table
// cy.get("div.tableFixHead>table>tbody>tr").each(($data,index) => {
//     const dataafter = $data.text()
//     cy.log('cehck the row', dataafter)
//     cy.get("div.tableFixHead>table>tbody>tr").find("td").then(function(datacolumn){
//         cy.log(datacolumn.text())
//     })

// })

// below one is for first table
cy.get("table#product[name='courses']>tbody>tr>td:nth-child(2)").each(($el, index)=>{
    // get the text value of each tr td:nth-child(2)
    const data = $el.text()
    if(data.includes("JMETER")){
        // next() -> points to the element next to it
    cy.get("table#product[name='courses']>tbody>tr>td:nth-child(2)").eq(index).next().then(function(price)
        {
            const pricetext = price.text()
            // mocha assertion
            expect(pricetext).to.equal('25')
            
        })
    }
})
})
})