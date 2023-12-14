/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     cy.get('select[id=dropdown-class-example]').select('option1');
      cy.get("select[id=dropdown-class-example]").select('Option2').invoke("val").should("eq", "option2")
      cy.get('select').children('option').should('have.length',4)// validate th total option
      cy.get('select').children('option').its('length').then((nooptions) =>{
        cy.log('total items:', {nooptions})
      })

      // cy.get('select>option').invoke('text').then((values)=>{
      //   const variableop = values.length;
      //   cy.log(variableop)
      // })

      // cy.get('select#dropdown-class-example').invoke('text').then((dropdownValuesuserdefined) => {
      //   // /n select /n option1 /n option2 /n
      //   //select
      //   //Option1
      //   //Option2
      //   //Option3
      //   const valuesArray = dropdownValuesuserdefined.split('\n').map(value => value.trim()).filter(value => value !== '');
      //   cy.log(`Dropdown Values: ${valuesArray.join(',')}`);
      // });

    // to select multiple items in
    // cy.get('select#dropdown-class-example').select(["11", "12"]);
    // validate the 
      cy.get('select#dropdown-class-example').find('option').then(options => {
        // ... spread operator 
        // map -> do a action and create a new array of it
        const actualtext = [...options].map(o => o.text)
        const actualvalue = [...options].map(o => o.value)
        cy.log(actualtext)
        // mocha assertions - actual == expected
        expect(actualvalue).to.deep.eq(['','option1','option2','option3'])
        expect(actualtext).to.deep.eq(['Select','Option1','Option2','Option3'])
      })

  })
  })