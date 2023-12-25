describe('Facebok Registration', () => {
    it('Facebook create account', () => {
      cy.visit('https://www.facebook.com/')
      // clicking the logo
      cy.get('i.fb_logo').click()
      //initialisation to url
      cy.get('a[data-testid=open-registration-form-button]').click()
      
      // get the method from command.js
      cy.EnterFnameSname('javascript','cypress');
  
      // cy.entervalue('aravindbalajiv3@gmail.com','input[name=reg_email__]');
  
      // cy.get('input[name=reg_email_confirmation__]').clear()
      // cy.get('input[name=reg_email_confirmation__]').type('aravindbalajiv3@gmail.com')
  
      // cy.get('input[name=reg_passwd__]').type('firstname@123')
      //handling drop down
    //   cy.get('select[name=birthday_day]').select('9');
    //   cy.get("select[name=birthday_day]").select('21').invoke("val").should("eq", "21")
    // // to select multiple items in
    // // cy.get('select[name=birthday_day]').select(["11", "12"]);
    //   cy.get('select[name=birthday_month]').find('option').then(options => {
    //     const actualtext = [...options].map(o => o.text)
    //     const actualvalue = [...options].map(o => o.value)
    //     cy.log(actualtext)
    //     expect(actualvalue).to.deep.eq(['1','2','3','4','5','6','7','8','9','10','11','12'])
    //     expect(actualtext).to.deep.eq(['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'])
    //   })
      
  
      //handling radio button
      //click the first from the duplicate values 
      // cy.get("span[class='_5k_2 _5dba']>input[name='sex'][value='1']").click()
      //to click the first/last item/element
      cy.get('input[name=sex]').last().click()
      cy.wait(1000)
      // validate the text and click
      cy.get('span[class="_5k_2 _5dba"]>label').contains('Male').click()
      cy.wait(1000)
      cy.get('span[class="_5k_2 _5dba"]>label').contains('Custom').click()
      //  cy.get('span[class="_5k_2 _5dba"]>label').each(($li) => cy.log($li.text()
      // ))
      cy.get('span[class="_5k_2 _5dba"]>label').each(ele => {
        if(ele.text() == "Female"){
          cy.log("validation ::::: ", ele.click())
        }
      })
      // validate the element attributes
      // cy.get('div._1lch>button[type=submit]').invoke('attr','name').should('eq', 'websubmit')
      // // validate the text in the tagname
      // cy.get('#non-users-notice-link').invoke('text').should('eq','Learn more')    
  })
  
  
  })