/// <reference types="Cypress" />

describe('check for attribute and text', () => {
    it('check for attribute and text', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

     cy.get('select[id=dropdown-class-example]').select('option1');
      cy.get("select[id=dropdown-class-example]").select('Option2').invoke("val").should("eq", "option2")
      cy.get('select').children('option').should('have.length',4)
      cy.get('select').children('option').its('length').then((nooptions) =>{
        console.log('total items: ${nooptions}')
      })

    //   cy.get('select>option').invoke('text').then((values)=>{
    //     const variableop = values.length;
    //     console.log(variableop)
    //   })

      cy.get('select').invoke('text').then((dropdownValuesuserdefined) => {
        // select /n option1 /n option2 /n
        const valuesArray = dropdownValuesuserdefined.split('\n').map(value => value.trim()).filter(value => value !== '');
        cy.log(`Dropdown Values: ${valuesArray.join(', ')}`);
      });

    // to select multiple items in
    //cy.get('select[name=birthday_day]').select(["11", "12"]);
    // validate the 
      cy.get('select#dropdown-class-example').find('option').then(options => {
        const actualtext = [...options].map(o => o.text)
        const actualvalue = [...options].map(o => o.value)
        cy.log(actualtext)
        expect(actualvalue).to.deep.eq(['','option1','option2','option3'])
        expect(actualtext).to.deep.eq(['Select','Option1','Option2','Option3'])
      })

  })
  
  
  })