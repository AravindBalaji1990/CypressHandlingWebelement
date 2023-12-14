/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //  cy.get("#checkBoxOption1").should('be.visible').click()
      //   cy.get('[for="radio1"] > .radioButton').check()// how it works fro radio button
      //  cy.get("#checkBoxOption2").check()// click onthe check box
      //  cy.get("#checkBoxOption2").should('be.checked')
      //  cy.get("#checkBoxOption2").uncheck()// unclick onthe same check box
      //  cy.get("#checkBoxOption2").should('not.be.checked')


      // I get all the check box and click it 
      // each - its keywor din cypress where it will loop
      // wrap - its a keyword in cypress where it can get the element specific do a action onthe element
      // whenever the $ appears that means the varible assigned has been parameterised
    //    cy.get('#checkbox-example input[type="checkbox"]').each(($xyz, index, $list) => {
    //     if(index <2){
    //       cy.log("printinghte 3rd parameter ",$list)
    //       cy.log("printinghte 1st parameter ",$xyz)
    //         cy.wrap($xyz).check();
    //     }
    // })

    // tagname label should contain text and find the child with in the click
  //  cy.contains('label','Option1').find('input[type="checkbox"]').click()
      

  // each -> elements value 
  //each(element, indexvalue, collection)
    // cy.contains('Option2').each(($lbltext, index, $abc)=>{
    //     cy.wrap($lbltext).prev('label[for="bmw"]').check()
    //     cy.wrap($lbltext).next('label[for="bmw"]').check()
    // })

    cy.get('#checkbox-example label').each(($label, index) => {
        const labelText = $label.text().trim(); // Get the text of the label and trim any extra whitespace
        if (labelText === 'Option3') {
          // If the label text matches a specific text, click on its associated input element
          cy.wrap($label).children('input').click(); // Click on the label element
          cy.log(`Checked checkbox with label: ${labelText}`);
        }
      });
      

  })
  
  
  })