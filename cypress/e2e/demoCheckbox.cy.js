/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    //    cy.get("#checkBoxOption1").should('be.visible').click()

    //    cy.get("#checkBoxOption2").check()
    //    cy.get("#checkBoxOption2").should('be.checked')
    //    cy.get("#checkBoxOption2").uncheck()
    //    cy.get("#checkBoxOption2").should('not.be.checked')


    //    cy.get('input[type="checkbox"]').each(($xyz, index) => {
    //     if(index <2){
    //         cy.wrap($xyz).check();
    //     }
    // })

   cy.contains('label','Option1').find('input[type="checkbox"]').click()
      

    // cy.contains('Option2').each(($lbltext)=>{
    //     cy.wrap($lbltext).prev('input[type="checkbox"]').check()
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