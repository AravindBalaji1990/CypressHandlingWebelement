// cypress/e2e/userTests.cy.js
describe('dropdwon vlaue from fix ture multiple but individual case iteration', () => {
    let usersData;
  
    it('should display user information for each user', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      // Load the fixture once before all tests
      cy.fixture('dropdown').then((dropdownvalue) => {
        usersData = dropdownvalue;
        cy.log('before block : ' + usersData.usersData)
      //   cy.log(`dropdwon value 1: ${usersData.dropdownvalue1}`);
      //   cy.log(`dropdwon value 1: ${usersData.dropdownvalue2}`);
      //   cy.get("#autocomplete").type(usersData.dropdownvalue1[0])
      })
    });
  });
  