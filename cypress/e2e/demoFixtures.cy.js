describe('Fixtures demo', function() 
{
it('Fixtures demo',function() {      
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
// scroll to the specific element in webpage
cy.get('#name').scrollIntoView();
// get the data from fixture
// cy.fixture("what is the name of the json file")
cy.fixture('data').then(function(testdata){
    cy.get('#name').type(testdata.name1)
    cy.wait(2000)
    cy.get('#name').clear()
    cy.wait(2000)
    cy.get('#name').type(testdata.name2)
    
})
}),
it('Fixtures demo in dropdown',function() {      
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    // scroll to the specific element in webpage
    cy.get('#dropdown-class-example').scrollIntoView();
    // get the data from fixture
    // cy.fixture("what is the name of the json file")
    cy.fixture('dropdown2').then(function(dropdownfromfixture){
        cy.get('#dropdown-class-example').select(dropdownfromfixture.dropdownexample3)
        
    })
    }),
    it('Fixtures demo in autosuggestion',function() {      
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // scroll to the specific element in webpage
        cy.get('#autocomplete').scrollIntoView();
        // get the data from fixture
        // cy.fixture("what is the name of the json file")
        cy.fixture('dropdown').then(function(dropdownfromfixture){
            cy.get('#autocomplete').type(dropdownfromfixture.dropdownvalue1)

            cy.get('.ui-menu-item div').each(($e1) => {
                if($e1.text()===dropdownfromfixture.dropdownvalue1)
                {
                    //wrap is a keyword in cypress which will help us to person actions onthe itratable elements
                    cy.wrap($e1).click()
                    // $e1.click()
                }
            })

            cy.get('#autocomplete').should('have.value',dropdownfromfixture.dropdownvalue1)

            
        })
        }),
        it.only('Fixtures demo in autosuggestion from the array of fixtures',function() {      
            cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            // scroll to the specific element in webpage
            cy.get('#autocomplete').scrollIntoView();
            // get the data from fixture
            // cy.fixture("what is the name of the json file")
            cy.fixture("dropdown").then((data)=>{
                // cy.log(data[0].dropdownvalue1)
                // cy.log(data[0].dropdownvalue2)

                // cy.log(data[1].dropdownvalue1)
                // cy.log(data[1].dropdownvalue2)

                for (const data1 of data){
                   cy.log("populate the data : " +data1.dropdownvalue1)
                   if(data1.dropdownvalue1 ==  "India"){
                   cy.get('#autocomplete').type(data1.dropdownvalue1)
                   cy.wait(3000)
                   break;
                }
                }
                
            })
            // cy.get('#autocomplete').type(`${data.dropdownvalue1}`)
            

            })
})