/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get("#checkBoxOption1").find("")
      //  cy.get("#checkBoxOption1").should('').click()
      // //   cy.get('[for="radio1"] > .radioButton').check()// how it works fro radio button
      //  cy.get("#checkBoxOption2").check()// click onthe check box
      //  cy.get("#checkBoxOption2").should('be.checked')
      //  cy.get("#checkBoxOption2").uncheck()// unclick onthe same check box
      // cy.wait(5000)
       cy.get("#checkBoxOption2").should('not.be.checked').click({timeout:5000})


      // I get all the check box and click it 
      // each - its keywor din cypress where it will loop
      // wrap - its a keyword in cypress where it can get the element specific do a action onthe element
      // whenever the $ appears that means the varible assigned has been parameterised
      //callback function -> value(all the values),index(0,1,2) ,collection(it consist of all elements)
    //    cy.get('#checkbox-example input[type="checkbox"]').each(($xyz, index, $list) => {
    //     cy.log("what is inside the index", index)
    //     // if(index ==1){
    //       // cy.log("printing the list values " ,$list.values)
    //       cy.log("printing the 3rd parameter ",$list)
    //       cy.log("printing the 1st parameter ",$xyz)
    //       //wrap will perform the actio on the element
    //         cy.wrap($xyz).check();
    //     }
    // })

    // tagname label should contain text and find the child with in the click
    // contains and find
    // contains -> attribute/text contains
    //find -> always works woth cy.get or cy.contains -> findi s something like go to/search for the child elements
    // ia m validating both the label amd the input check box
  //  cy.contains('label','Option1').find('input[type="checkbox"]').click()
      

  // each -> elements value 
  //each(element, indexvalue, collection)
    // cy.contains('Option2').each(($lbltext, index, $abc)=>{
    //     cy.wrap($lbltext).prev('label[for="bmw"]').check()
    //     cy.wrap($lbltext).next('label[for="bmw"]').check()
    // })

    cy.get('#checkbox-example label').each(($label, index) => {
      // Get the text of the label and trim any extra whitespace
        const labelText = $label.text().trim(); 
        if (labelText === 'Option3') {
          // If the label text matches a specific text, click on its associated input element
          // Click on the label element
          cy.wrap($label).children('input').click(); 
          cy.log(`Checked checkbox with label: ${labelText}`);
        }
      });
      

  })
  
  
  })