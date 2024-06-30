/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it.only('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // should is a keyword in cypress which is used to do a validation or verificairton on the element

        // cy.get("input[value='radio1']").should('be.visible')
        // cy.get("input[value='radio1']").should('be.enabled').click()
        // // cy.get("input[value='radio1']").should('not.be.checked')
        // cy.get("input[value='radio1']").should('be.checked')// chekc for the negative

      

      //  cy.get('[for="radio1"] > .radioButton').check()// how it works fro radio button
      //  cy.get("input[value='radio3']").check()// click onthe check box
      //  cy.get("input[value='radio2']").check()// unclick onthe same check box
      //  cy.get("input[value='radio3']").should('not.be.checked')


      // I get all the check box/radiobutton and click it 
      // each - its keywor din cypress where it will loop
      // wrap - its a keyword in cypress where it can get the element specific do a action onthe element
      // whenever the $ appears that means the varible assigned has been parameterised
      //callback function -> value(all the values),index(0,1,2) ,collection(it consist of all elements)
      //$ specifies a element that is being parameterised 
      //  cy.get("input[type='radio']").each(($xyz, index, $list) => {
      //   cy.log("what is inside the index", index)
      //   // if(index ==1){
      //     // cy.log("printing the list values " ,$list.values)
      //     cy.log("printing the 3rd parameter ",$list)
      //     cy.log("printing the 1st parameter ",$xyz)
          
      //     // $xyz.click(); //- we cannot use the $xyz to do any action on the element
      //     //wrap will perform the action on the element
      //       cy.wrap($xyz).should('be.visible').check();
      //       cy.wrap($xyz).should('be.checked')
      //   // }
      //   })

    // tagname label should contain text and find the child with in the click
    // contains and find
    // contains -> attribute/text contains
    //find -> always works woth cy.get or cy.contains -> findi s something like go to/search for the child elements
    // i am validating both the label amd the input check box
  //  cy.contains('label','Radio1').find('input[type="radio"]').click()
      

    // cy.get('#radio-btn-example label').each(($label) => {
    //   // Get the text of the label and trim any extra whitespace
    //     const labelText = $label.text().trim(); 
    //     // === -> same dataype and same value
    //     // == only the value is equal or not 
    //     // === value and datatype is equal example : 5 / "5"
    //     //5 =="5" true
    //     //5 === "5" false
    //     if (labelText === 'Radio3') {
    //       // If the label text matches a specific text, click on its associated input element
    //       // Click on the label element
    //       cy.wrap($label).children('input').click(); 
    //       cy.log(`Checked checkbox with label: ${labelText}`);
    //     }
    //   });

      // each -> elements value 
  //each(element, indexvalue, collection)
    // cy.contains('Radio2').each(($lbltext, index, $abc)=>{
    //     cy.wrap($lbltext).prev('label[for="radio1"]').children('input').click()
    //     cy.wrap($lbltext).next('label[for="radio3"]').children('input').click()
    // })
      

  }),
  it('check for attribute and text', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
  //how many radio button needs to be available
  // its is a keyowrd to identify the elemnt validation
  cy.get("input[type='radio']").its('length').should('be.at.least', 2)
  cy.get("input[type='radio']").its('length').should('eq', 3)
})
  
  
  })