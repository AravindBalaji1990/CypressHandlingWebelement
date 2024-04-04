/// <reference types="Cypress" />

describe('Handling dropdwon values', () => {
    it('Handling dropdwon values', () => {
     
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // below i am trying to retrieve the value of the attribute value
        //select is a part of cypress keyword and it is used to select the items from the dropdown

        // i am using athe value attribute int he dropdwon element to select the partoicular item
    //  cy.get('select[id=dropdown-class-example]').select('option1');

    //  cy.wait(3000)

     // below is a way to select or identify the dropdown option based on the text available
     // any textbox or textfield if we want to gett he value fromt he field we use invoke("val") -> it will get the value attribute fromthe elment and check it
      // cy.get("select[id=dropdown-class-example]").select('Option2').invoke("val").should("eq", "option2")



      //children is akeyowr in cypress where it checks forthe elements child
      // cy.get('select').children('option').should('have.length',4)// validate th total option
      // cy.get('select').children('option').its('length').then((nooptions) =>{
      //   cy.log('total items:', {nooptions})
      // })

      

      // cy.get('select#dropdown-class-example').invoke('text').then((dropdownValuesuserdefined) => {
      //   cy.log("the value from dropdown : " + dropdownValuesuserdefined)
      //   // /n select /n option1 /n option2 /n
        
      //   const valuesArray = dropdownValuesuserdefined.split('\n').map(value => value.trim()).filter(value => value !== '');
      //   cy.log(`Dropdown Values: ${valuesArray.join(',')}`);
      // });

    // to select multiple items in
    // cy.get('select#dropdown-class-example').select(["11", "12"]);
    // validate the 
    // find -> similar to the children inside the get what are the locator available
    // find will always go with get

      // cy.get('select#dropdown-class-example').find('option').then(options => {
      //   // ... spread operator 
      //   // map -> do a action and create a new array of it
      //   //[...options] -> this means ... means to add the elements in dynamic way which we call it as spread operator options is th eparameter we pass on the then it can be anything thata  user defines
      //   const actualtext = [...options].map(o => o.text)
      //   const actualvalue = [...options].map(o => o.value)
      //   cy.log("the actual text :" + actualtext)
      //   // mocha assertions - actual == expected
      //   expect(actualvalue).to.deep.eq(['','option1','option2','option3'])
      //   expect(actualtext).to.deep.eq(['Select','Option1','Option2','Option3'])
      // })

  })
  })